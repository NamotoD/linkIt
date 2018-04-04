
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ProgressBar = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <LinearProgress mode="indeterminate" />
    </MuiThemeProvider>
);

export default ProgressBar;