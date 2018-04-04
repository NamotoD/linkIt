import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../../../actions/auth';

const Header = ({startLogin}) => (
    <section id="top">
        <header className="s-header">
            <div className="header-logo">
                <button className="button" onClick={startLogin}><img src="/publicPage/images/logo.png" alt="Homepage" /></button>
            </div>
            <nav className="header-nav-wrap">
                <ul className="header-nav">
                    <li className="current"><Link className="smoothscroll" to={{ hash: "#home" }} title="home">Home</Link></li>
                    <li><Link className="smoothscroll" to={{ hash: "#about" }} title="about">About</Link></li>
                    <li><Link className="smoothscroll" to={{ hash: "#works" }} title="works">Works</Link></li>
                    {/*<li><Link className="smoothscroll" to={{ hash: "#blog" }} title="blog">Blog</Link></li>*/}
                    <li><Link className="smoothscroll" to={{ hash: "#contact" }} title="contact">Contact</Link></li>
                </ul>
            </nav>
            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
        </header> {/* end s-header */}
    </section>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Header);