import React from 'react';
import { connect } from 'react-redux';
import SkillListItem from './SkillListItem';

const SkillList = (props) => (
    <div>
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Edit Your Skills</h1>
        </div>
    </div>
    {props.skills.map((skill) => {
        return <SkillListItem key={skill.id} {...skill} />
    })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        skills: state.skills
    };
};

export default connect(mapStateToProps)(SkillList);