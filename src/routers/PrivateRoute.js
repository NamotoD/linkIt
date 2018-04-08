import React from 'react';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const style = {
    paper: {
        // display: 'inline-block',
        // float: 'left',
        margin: '0',
        // paddingRight: '100px',
        height: '100%'
    }
};

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // takes everything else when destructuring
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Paper style={style.paper}>
                        <Header />
                        <Component {...props} />
                        <Footer />
                    </Paper>
                </MuiThemeProvider>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)