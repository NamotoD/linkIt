import React from 'react';
import { connect } from 'react-redux';
import SkillForm from './SkillForm';
import { startAddSkill } from '../../actions/skills';

export class AddSkillPage extends React.Component {
    onSubmit = (skill) => {
        this.props.startAddSkill(skill);
    };
    render() {
        return (
            <div>{
            }
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Skill</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillForm
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
    startAddSkill: (skill) => dispatch(startAddSkill(skill))
});

export default connect(undefined, mapDispatchToProps)(AddSkillPage);