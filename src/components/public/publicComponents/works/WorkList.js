import React from 'react';
import { connect } from 'react-redux';
import WorkListItem from './WorkListItem';
import selectProjects from '../../../../selectors/projects';

const WorkList = (props) => (
    <div>
    {props.projects.map((project) => {
        return <WorkListItem key={project.id} {...project} />
    })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        // projects: selectProjects(state.projects, state.projectsFilters)
        projects: state.projects // show all
    };
};

export default connect(mapStateToProps)(WorkList);