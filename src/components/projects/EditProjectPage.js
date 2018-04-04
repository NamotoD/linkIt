import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import EditProjectImagePage from './EditProjectImagePage';
import { startEditProject, startRemoveProject } from '../../actions/projects';

export class EditProjectPage extends React.Component {
    onSubmit = (project) => {
        this.props.startEditProject(this.props.project.id, project);
        // this.props.history.push('/projects');
    };
    onRemove = () => {
        this.props.startRemoveProject({ id: this.props.project.id });
        // this.props.history.push('/projects');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm
                        project={this.props.project}
                        onSubmit={this.onSubmit}
                    />
                    {console.log("In EditProjectPage: ", this.props.project)}
                    <EditProjectImagePage
                        project={this.props.project} />
                    <button
                        className="button"
                        onClick={this.onRemove}
                    >   Remove Project
                </button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find((project) => project.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditProject: (id, project) => dispatch(startEditProject(id, project)),
    startRemoveProject: (data) => dispatch(startRemoveProject(data))
});

// EditProjectPage.defaultProps = {
//     projectImage: {
//         height: 700,
//         width: 1050,
//         name: "DefaultImage.png",
//         url: "https://dummyimage.com/1050x700/000/fff&text=no+image"
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);