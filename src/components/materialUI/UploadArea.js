import React from 'react';
import Paper from 'material-ui/Paper';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  height: 100,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

const UploadArea = () => (
  <div>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Paper style={style} zDepth={5} rounded={false} />
    </MuiThemeProvider>
  </div>
);

export default UploadArea;