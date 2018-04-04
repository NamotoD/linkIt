import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import selectProjects from '../../selectors/projects';

const ProjectList = (props) => (
    <div className="content-container">
    <br/>
        <div className="list-header">
            <div className="show-for-mobile">Projects</div>
            <div className="show-for-desktop">Category/Title</div>
            <div className="show-for-desktop">Date of Creation</div>
        </div>
        <div className="list-body">
            {
                props.projects.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No projects</span>
                    </div>
                ) : (
                        props.projects.map((project) => {
                            return <ProjectListItem key={project.id} {...project} />
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: selectProjects(state.projects, state.projectsFilters)
    };
};

export default connect(mapStateToProps)(ProjectList);