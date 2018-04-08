import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import ProjectList from './ProjectList';
import ProjectListFilters from './ProjectListFilters';
import Avatar from '../profile/Avatar';
import PortfolioForm from './PortfolioForm';
import Separator from '../../components/materialUI/Separator';
import { startAddPortfolio } from '../../actions/portfolio';

const style = {
    paper: {
        // display: 'inline-block',
        // float: 'left',
        margin: '0',
        // paddingRight: '100px',
        height: '100vh'
    }
};

export class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	onSubmit = (portfolio) => {
		this.props.startAddPortfolio(portfolio);
		// this.props.history.push('/dashboard');
	};

	render() {
		return (<div>
					<div className="page-header">
						<div className="content-container">
							<Avatar />
							<h1 className="page-header__title">Projects</h1>
						</div>
					</div>
					<div className="content-container">
						<PortfolioForm
							portfolio={this.props.portfolio}
							onSubmit={this.onSubmit}
						/>
					</div>
					<div className="content-container">
						<Separator />
					</div>
					<div className="content-container">
						<p>Press Add Project button to add a new project.</p>
						<Link className="button" to="/createProject">Add Project</Link>
					</div>
					<br />
					<div className="content-container">
						<Separator />
					</div>
					<div className="content-container">
						<p>Use filters below to list your projects by category or date of creation.
						By default you will only see projects created in the current month.
						Use datepicker to show only dates within a time range,
						or disable datepicker to show all your projects by pressing the 'x' symbol.
						You can also filter your projects by typing a text search query.</p>
					</div>
					<ProjectListFilters />
					<br />
					<div className="content-container">
						<Separator />
					</div>
					<ProjectList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);