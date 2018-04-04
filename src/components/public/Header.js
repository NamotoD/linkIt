import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { history } from '../../routers/AppRouter';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {//local state
            // id: props.project ? props.project.id : '',
            project: props.project
        };
    };
    goToDashboard = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/dashboard');
    };
    render() {
        return (
            <section id="top">
                <header className="s-header">
                    <div className="header-logo">
                        <button className="button" onClick={this.goToDashboard}><img src="/publicPage/images/logo.png" alt="Dashboard" /></button>
                    </div>
                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            <li className="current"><Link className="smoothscroll" to={{ hash: "#home" }} title="home">Home</Link></li>
                            <li><Link className="smoothscroll" to={{ hash: "#about" }} title="about">About</Link></li>
                            <li><Link className="smoothscroll" to={{ hash: "#works" }} title="works">Works</Link></li>
                            {/*<li><Link className="smoothscroll" to={{ hash: "#blog" }} title="blog">Blog</Link></li>*/}
                            <li><Link className="smoothscroll" to={{ hash: "#contact" }} title="contact">Contact</Link></li>
                            <li><button
                                onClick={this.props.startLogout}
                                title="contact">Logout
                    </button></li>
                        </ul>
                    </nav>
                    <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
                </header> {/* end s-header */}
            </section>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);