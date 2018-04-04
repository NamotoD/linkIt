import React from 'react';
import { connect } from 'react-redux';
import database, { storage } from '../../firebase/firebase';
import Avatar from './Avatar';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import { startSetNewAvatar } from '../../actions/avatar';
import UserForm from './UserForm';
import { startAddUserInfo } from '../../actions/users';
import { showError } from '../../utils/firebase';
import ProgressBar from '../../components/materialUI/ProgressBar';

export class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			progressOn: false
		};
	};
	uploadFile = (file) => {
		const that = this;
		const uid = this.props.auth.uid;
		const newAvatarRef = storage.ref(`users/${uid}/profile/avatar/` + file.name);
		const task = newAvatarRef.put(file);
		task.on('state_changed',
			function progress(snapshot) {
			},
			function error(err) {
				showError(err);
			},
			function complete(props) {
				that.props.startSetNewAvatar({
					name: newAvatarRef.name,
					url: task.snapshot.downloadURL
				});
				that.setState(() => ({
					error: '',
					progressOn: false
				}));
				console.log("Avatar image uploaded successfully!");
			}
		);
	};
	onFilesChange = (files) => {
		this.setState(() => ({ progressOn: true }));
		const that = this;
		const uid = this.props.auth.uid;
		const avatarRef = database.ref(`users/${uid}/profile/avatar`);
		avatarRef
			.once('value')
			.then(function (snapshot) {
				const file = snapshot.val();
				if (file) {//if exists, delete from storage
					storage.ref(`users/${uid}/profile/avatar/` + file.name) // reference to the image to be deleted
						.delete()
						.then(function () {
							that.uploadFile(files[0]);
							console.log('!!!!!!File in storage deleted successfully!');
						})
						.catch((e) => {
							console.log('!!!!!!Failed attempt to delete file in storage!', e);
						});
				} else {
					that.uploadFile(files[0]);
				};
			})
			.catch((e) => {
				console.log('!!!!!!Failed to fetch avatar image from database!', e);
			});
	};

	onFilesError = (error, file) => {
		this.setState(() => ({
			error: error.message,
			progressOn: false
		}));
	};

	onSubmit = (user) => {
		this.props.startAddUserInfo(user);
		this.props.history.push('/dashboard');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Manage Profile</h1>
					</div>
				</div>
				<div className="content-container">
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<Files
						className='files-dropzone'
						onChange={this.onFilesChange}
						onError={this.onFilesError}
						accepts={['image/*']}
						multiple={false}
						//maxFiles={1}
						maxFileSize={1000000} // 1Mb
						minFileSize={0}
						clickable
						dropActiveClassName='files-dropzone-active'
					>
						{(!this.props.user || !this.props.user.avatar || !this.props.user.avatar.url) && <p>Provide avatar image</p>}
						<Avatar subtitle="Profile" />
						{this.state.progressOn && <ProgressBar />}
					</Files>
					<p>Click above area to replace avatar image, or simply drop new image on top of the current.</p>
					{/*<progress value="0" max="100" id="uploader">0%</progress>*/}
				</div>
				<div className="content-container">
					<UserForm
						user={this.props.user}
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	startAddUserInfo: (updates) => dispatch(startAddUserInfo(updates)),
	startSetNewAvatar: (updates) => dispatch(startSetNewAvatar(updates))
});

const mapStateToProps = (state, props) => ({
	auth: state.auth,
	user: state.portfolio.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);