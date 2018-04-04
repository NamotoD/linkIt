import React from 'react';
import { Link } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainMenu from './MainMenu';
import Avatar from './profile/Avatar';

const DashboardPage = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <Link to={`/profile`}>
                <Avatar subtitle = "Profile"/>
            </Link>
            <MainMenu />
        </div>
    </MuiThemeProvider>
);

export default DashboardPage;