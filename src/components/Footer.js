import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
// import {startLogout} from '../actions/auth';

const style = {
    paper: {
        // display: 'inline-block',
        // float: 'left',
        margin: '0',
        // paddingRight: '100px',
        height: '100vh'
    }
};

export const Footer = () => (
            <footer className="footer">
                <div className="row">
                    <div className="col-full">
                        <div className="footer-logo">
                            <a className="footer-site-logo"/*onClick={this.goToDashboard}*/ href="#0"><img src="/publicPage/images/logo.png" alt="Homepage" /></a>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright LinkIt 2018</span>
                            <span>Design by <a href="https://www.styleshout.com/"> styleshout</a></span><span><a href='https://www.freepik.com/free-photo/user-people-network-circuit-board-link-connection-technology_1198382.htm'>Freepik</a></span>
                        </div>
                        <div className="go-top">
                            <Link className="smoothscroll" to={"#top"} title="Back to Top"><i className="im im-arrow-up" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div> {/* end footer-bottom */}
            </footer>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Footer);