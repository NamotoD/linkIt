import React from 'react';
import { connect } from 'react-redux';
import database, { storage } from '../../firebase/firebase';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import { startEditProject } from '../../actions/projects';
import { showError } from '../../utils/firebase';
import UploadArea from '../../components/materialUI/UploadArea';
import ProgressBar from '../../components/materialUI/ProgressBar';

export class AddProjectImagePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			url: (props.project && props.project.projectImage) ? props.project.projectImage.url : "https://dummyimage.com/1050x700/000/fff&text=Drop+image+here+or+click+to+upload",
			progressOn: false,
			urlDimensions: ""
		};
	};
	uploadFile = (file) => {
		this.setState(() => ({
			// urlDimensions: file.preview.url
		}));
		const that = this;
		const uid = this.props.auth.uid;
		const id = this.props.lastProject.id;
		const newProjectImageRef = storage.ref(`users/${uid}/projects/${id}/projectImage/` + file.name);
		const task = newProjectImageRef.put(file);
		task.on('state_changed',
			function progress(snapshot) {
			},
			function error(err) {
				showError(err);
			},
			function complete(props) {
				that.props.startEditProject(id, {
					projectImage: {
						height: that.refs.projectImage.height,
						width: that.refs.projectImage.width,
						name: newProjectImageRef.name,
						url: task.snapshot.downloadURL
					}
				});
				that.setState(() => ({
					error: '',
					progressOn: false
				}));
				console.log("Project image uploaded successfully!");
			}
		);
	};
	onFilesChange = (files) => {
		this.setState(() => ({ progressOn: true }));
		const that = this;
		const uid = this.props.auth.uid;
		const id = this.props.lastProject.id;
		const projectImageRef = database.ref(`users/${uid}/projects/${id}/projectImage`);
		projectImageRef
			.once('value')
			.then(function (snapshot) {
				const file = snapshot.val();
				if (file) {//if exists, delete from storage
					storage.ref(`users/${uid}/projects/${id}/projectImage/` + file.name) // reference to the image to be deleted
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

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Project Image</h1>
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
						maxFileSize={1000000}
						minFileSize={0}
						clickable
						dropActiveClassName='files-dropzone-active'
					>
						<div>
							<img ref="projectImage" src={this.state.urlDimensions} alt="" className="uploaded-image" />
						</div>						
						<p>Upload .png or .jpg  or .gif files only</p>
						<p>The recommended minimal width of the project image should be at least 400 pixels</p>
						<p>The maximum size of the image has to be less than 1 Mb</p>
						{(!this.props.userProfile || !this.props.userProfile.CoverImage || !this.props.userProfile.CoverImage.url) && <p>Provide Cover Image or leave the default</p>}
						<UploadArea />
						{this.state.progressOn && <ProgressBar />}
					</Files>
					
					<p>Click above area to upload the project image</p>
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	startEditProject: (id, project) => dispatch(startEditProject(id, project))
});

const mapStateToProps = (state, props) => ({
	auth: state.auth,
	lastProject: state.projects[state.projects.length - 1]
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectImagePage);