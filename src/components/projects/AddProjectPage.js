import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../../actions/projects';

export class AddProjectPage extends React.Component {
    onSubmit = (project) => {
        this.props.startAddProject(project);
        // console.log("Project Id after added: ", this.props.stateNow)
        // this.props.history.push('/addProjectImage');
    };
    render() {
        return (
            <div>{
                // console.log("Project Id after added: ", this.props.lastProject)
            }
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state, props) => ({
//     project: state.projects.find((project) => project.id === props.match.params.id),
//     lastProject: state.projects[state.projects.length - 1]
// });

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(AddProjectPage);