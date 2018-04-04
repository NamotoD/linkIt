import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';

class Footer extends React.Component {
    goToDashboard = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/dashboard');
    };
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-full">
                        <div className="footer-logo">
                            <a className="footer-site-logo" onClick={this.goToDashboard} href="#0"><img src="/publicPage/images/logo.png" alt="Homepage" /></a>
                        </div>
                        <ul className="footer-social">
                            {(this.props.user && this.props.user.emailPrimary) &&
                                <li><a href={"mailto:" + this.props.user.emailPrimary}>
                                    <i className="im im-mail" aria-hidden="true" />
                                    <span>Email</span>
                                </a></li>}
                            {(this.props.user && this.props.user.facebook) &&
                                <li><a href={this.props.user.facebook}>
                                    <i className="im im-facebook" aria-hidden="true" />
                                    <span>Facebook</span>
                                </a></li>}
                            {(this.props.user && this.props.user.twitter) &&
                                <li><a href={this.props.user.twitter}>
                                    <i className="im im-twitter" aria-hidden="true" />
                                    <span>Twitter</span>
                                </a></li>}
                            {(this.props.user && this.props.user.instagram) &&
                                <li><a href={this.props.user.instagram}>
                                    <i className="im im-instagram" aria-hidden="true" />
                                    <span>Instagram</span>
                                </a></li>}
                            {(this.props.user && this.props.user.behance) &&
                                <li><a href={this.props.user.behance}>
                                    <i className="im im-behance" aria-hidden="true" />
                                    <span>Behance</span>
                                </a></li>}
                            {(this.props.user && this.props.user.pinterest) &&
                                <li><a href={this.props.user.pinterest}>
                                    <i className="im im-pinterest" aria-hidden="true" />
                                    <span>Pinterest</span>
                                </a></li>}
                            {(this.props.user && this.props.user.linkedIn) &&
                                <li><a href={this.props.user.linkedIn}>
                                    <i className="im im-linkedin" aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a></li>}
                            {(this.props.user && this.props.user.stackOverflow) &&
                                <li><a href={this.props.user.stackOverflow}>
                                    <i className="im im-stackoverflow" aria-hidden="true" />
                                    <span>StackOverflow</span>
                                </a></li>}
                            {(this.props.user && this.props.user.gitHub) &&
                                <li><a href={this.props.user.gitHub}>
                                    <i className="im im-github" aria-hidden="true" />
                                    <span>GitHub</span>
                                </a></li>}
                            {(this.props.user && this.props.user.flickr) &&
                                <li><a href={this.props.user.flickr}>
                                    <i className="im im-flickr" aria-hidden="true" />
                                    <span>Flickr</span>
                                </a></li>}
                            {(this.props.user && this.props.user.tumblr) &&
                                <li><a href={this.props.user.tumblr}>
                                    <i className="im im-tumblr" aria-hidden="true" />
                                    <span>Tumblr</span>
                                </a></li>}
                            {(this.props.user && this.props.user.vimeo) &&
                                <li><a href={this.props.user.vimeo}>
                                    <i className="im im-vimeo" aria-hidden="true" />
                                    <span>Vimeo</span>
                                </a></li>}
                            {(this.props.user && this.props.user.reddit) &&
                                <li><a href={this.props.user.reddit}>
                                    <i className="im im-reddit" aria-hidden="true" />
                                    <span>Reddit</span>
                                </a></li>}
                            {(this.props.user && this.props.user.youTube) &&
                                <li><a href={this.props.user.youTube}>
                                    <i className="im im-youtube" aria-hidden="true" />
                                    <span>YouTube</span>
                                </a></li>}
                            {(this.props.user && this.props.user.soundCloud) &&
                                <li><a href={this.props.user.soundCloud}>
                                    <i className="im im-soundcloud" aria-hidden="true" />
                                    <span>SoundCloud</span>
                                </a></li>}
                            {(this.props.user && this.props.user.blogger) &&
                                <li><a href={this.props.user.blogger}>
                                    <i className="im im-blogger" aria-hidden="true" />
                                    <span>Blogger</span>
                                </a></li>}
                            {(this.props.user && this.props.user.googlePlay) &&
                                <li><a href={this.props.user.googlePlay}>
                                    <i className="im im-google-play" aria-hidden="true" />
                                    <span>GooglePlay</span>
                                </a></li>}
                        </ul>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright LinkIt 2018</span>
                            <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>
                            <span>Design by <a href='https://www.freepik.com/free-photo/user-people-network-circuit-board-link-connection-technology_1198382.htm'>Designed by Freepik</a></span>
                        </div>
                        <div className="go-top">
                            <Link className="smoothscroll" to={"#top"} title="Back to Top"><i className="im im-arrow-up" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div> {/* end footer-bottom */}
            </footer>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.portfolio.profile
    };
};

export default connect(mapStateToProps)(Footer);