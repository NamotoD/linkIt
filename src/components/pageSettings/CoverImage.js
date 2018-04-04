import React from 'react';
import { connect } from 'react-redux';
import database, { storage } from '../../firebase/firebase';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import { startSetNewCoverImage } from '../../actions/coverImage';
import { showError } from '../../utils/firebase';
import Avatar from '../../components/profile/Avatar';
import UploadArea from '../../components/materialUI/UploadArea';
import ProgressBar from '../../components/materialUI/ProgressBar';

export class CoverImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			progressOn: false
			// url: (props.user && props.user.coverImage) ? props.project.coverImage.url : "https://dummyimage.com/1050x700/000/fff&text=Drop+image+here+or+click+to+upload"
		};
	};
	uploadFile = (file) => {
		const that = this;
		const uid = this.props.auth.uid;
		const newCoverImageRef = storage.ref(`users/${uid}/profile/coverImage/` + file.name);
		const task = newCoverImageRef.put(file);
		task.on('state_changed',
			function progress(snapshot) {
			},
			function error(err) {
				showError(err);
			},
			function complete(props) {
				that.props.startSetNewCoverImage({
					name: newCoverImageRef.name,
					url: task.snapshot.downloadURL
				});
				that.setState(() => ({
					error: 'Cover Image changed successfully.',
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
		const coverImageRef = database.ref(`users/${uid}/profile/coverImage`);
		coverImageRef
			.once('value')
			.then(function (snapshot) {
				const file = snapshot.val();
				if (file) {//if exists, delete from storage
					storage.ref(`users/${uid}/profile/coverImage/` + file.name) // reference to the image to be deleted
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
				console.log('!!!!!!Failed to fetch cover image from database!', e);
			});
	};

	onFilesError = (error, file) => {
		this.setState(() => ({
			error: error.message,
			progressOn: false
		}));
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
					<Avatar />
						<h1 className="page-header__title">Cover Image</h1>
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
						maxFileSize={1000000} //1mb
						minFileSize={0}
						clickable
						dropActiveClassName='files-dropzone-active'
					>
						<p>Upload .png or .jpg  or .gif files only</p>
						<p>The cover image has to be 3000x2000 px and less than 1Mb.</p>
						{(!this.props.userProfile || !this.props.userProfile.CoverImage || !this.props.userProfile.CoverImage.url) && <p>Provide Cover Image or leave the default</p>}
						<UploadArea />
						{this.state.progressOn && <ProgressBar />}

					</Files>
					<p>Click above area to replace cover image, or simply drop new image on top of the current.</p>
					<p>This will be the background on your portfolio page</p>
					{/*<progress value="0" max="100" id="uploader">0%</progress>*/}
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	startSetNewCoverImage: (updates) => dispatch(startSetNewCoverImage(updates))
});

const mapStateToProps = (state, props) => ({
	auth: state.auth,
	userProfile: state.portfolio.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(CoverImage);