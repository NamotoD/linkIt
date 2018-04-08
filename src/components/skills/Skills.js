import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../../components/profile/Avatar';
import SkillList from './SkillList';

export class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	onSubmit = (skill) => {
		this.props.startAddSkill(skill);
		// this.props.history.push('/dashboard');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<Avatar />
						<h1 className="page-header__title">Skills</h1>
					</div>
				</div>
				<div className="content-container">
					<p>On this page you can manage your skills.
					Press Add Skill button below to add a new skill,
					or edit your skills listed below.</p>
				</div>
				<div className="content-container">
					<Link className="button" to="/createSkill">Add Skill</Link>
				</div>
				<div className="content-container">
					<SkillList />
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	startAddPortfolio: (updates) => dispatch(startAddPortfolio(updates))
});

const mapStateToProps = (state, props) => ({
	portfolio: state.portfolio
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills);