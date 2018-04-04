import React from 'react';
import { connect } from 'react-redux';
import SkillListItem from './SkillListItem';

const SkillList = (props) => (
    <div>
    {props.skills.map((skill) => {
        return <SkillListItem key={skill.id} {...skill} />
    })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        // projects: selectProjects(state.projects, state.projectsFilters)
        skills: state.skills // show all
    };
};

export default connect(mapStateToProps)(SkillList);