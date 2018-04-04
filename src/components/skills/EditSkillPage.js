import React from 'react';
import { connect } from 'react-redux';
import SkillForm from './SkillForm';
import { startEditSkill, startRemoveSkill } from '../../actions/skills';

export class EditSkillPage extends React.Component {
    onSubmit = (skill) => {
        this.props.startEditSkill(this.props.skill.id, skill);
    };
    onRemove = () => {
        this.props.startRemoveSkill({ id: this.props.skill.id });
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Skill</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillForm
                    skill={this.props.skill}
                        onSubmit={this.onSubmit}
                    />
                    {console.log("In EditSkillPage: ", this.props.skill)}
                    <button
                        className="button"
                        onClick={this.onRemove}
                    >   Remove Skill
                </button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    skill: state.skills.find((skill) => skill.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditSkill: (id, skill) => dispatch(startEditSkill(id, skill)),
    startRemoveSkill: (data) => dispatch(startRemoveSkill(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillPage);