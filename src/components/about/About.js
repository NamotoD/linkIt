import React from 'react';
import { connect } from 'react-redux';
import database, { storage } from '../../firebase/firebase';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import { startSetNewCurriculumVitae } from '../../actions/curriculumVitae';
import AboutForm from './AboutForm';
import { startAddAboutUserInfo } from '../../actions/about';
import { showError } from '../../utils/firebase';
import Avatar from '../../components/profile/Avatar';
import UploadArea from '../../components/materialUI/UploadArea';
import ProgressBar from '../../components/materialUI/ProgressBar';

export class About extends React.Component {
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
		const newCurriculumVitaeRef = storage.ref(`users/${uid}/about/curriculumVitae/` + file.name);
		const task = newCurriculumVitaeRef.put(file);
		task.on('state_changed',
			function progress(snapshot) {
			},
			function error(err) {
				showError(err);
			},
			function complete(props) {
				that.props.startSetNewCurriculumVitae({
					name: newCurriculumVitaeRef.name,
					url: task.snapshot.downloadURL
				});
				that.setState(() => ({
					error: '',
					progressOn: false
				}));
				console.log("Cv uploaded successfully!");
			}
		);
	};

	onFilesChange = (files) => {
		this.setState(() => ({ progressOn: true }));
		const that = this;
		const uid = this.props.auth.uid;
		const curriculumVitaeRef = database.ref(`users/${uid}/about/curriculumVitae`);
		curriculumVitaeRef
			.once('value')
			.then(function (snapshot) {
				const file = snapshot.val();
				if (file) {//if exists, delete from storage
					storage.ref(`users/${uid}/about/curriculumVitae/` + file.name) // reference to the image to be deleted
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
				console.log('!!!!!!Failed to fetch cv from database!', e);
			});
	};

	onFilesError = (error, file) => {
		this.setState(() => ({
			error: error.message,
			progressOn: false
		}));
	};

	onSubmit = (aboutUser) => {
		this.props.startAddAboutUserInfo(aboutUser);
		this.props.history.push('/dashboard');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<Avatar />
						<h1 className="page-header__title">About</h1>
					</div>
				</div>
				<div className="content-container">
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<Files
						className='files-dropzone'
						onChange={this.onFilesChange}
						onError={this.onFilesError}
						accepts={['application/pdf', 'application/msword']}
						multiple={false}
						//maxFiles={1}
						maxFileSize={1000000}//1Mb
						minFileSize={0}
						clickable
						dropActiveClassName='files-dropzone-active'
					>
						<p>Upload .pdf or .doc files only</p>
						<p>The CV must be less than 1Mb.</p>
						{(!this.props.aboutUser || !this.props.aboutUser.curriculumVitae || !this.props.aboutUser.curriculumVitae.url) && <p>Provide CV</p>}
						<UploadArea />
						{this.state.progressOn && <ProgressBar />}
					</Files>
					<p>Click above area to replace CV, or simply drop new CV on top of this area</p>
					<p>Your CV will be avaialble for download on your portfolio page</p>
					{/*<progress value="0" max="100" id="uploader">0%</progress>*/}
				</div>
				<div className="content-container">
					<AboutForm
						aboutUser={this.props.aboutUser}
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	startAddAboutUserInfo: (updates) => dispatch(startAddAboutUserInfo(updates)),
	startSetNewCurriculumVitae: (updates) => dispatch(startSetNewCurriculumVitae(updates))
});

const mapStateToProps = (state, props) => ({
	auth: state.auth,
	aboutUser: state.portfolio.about
});

export default connect(mapStateToProps, mapDispatchToProps)(About);