import React from 'react';
import { connect } from 'react-redux';
import SocialMedia from './home/SocialMedia';

const Home = (props) => (
    <section
        id="home"
        className="s-home page-hero target-section"
        data-parallax="scroll"
        data-image-src={((props.user && props.user.firstName == "Oto" && props.user.lastName == "Drahonovsky") && "/publicPage/images/hero-bg2.jpg") ||
            ((props.user && props.user.coverImage) ? props.user.coverImage.url : "/publicPage/images/hero-bg.jpg")}
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center">
        {console.log("!!!!!!!!!!!1", props.user)}
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
            <div className="row home-content__main">
                {(props.user && props.user.greeting) &&
                    <h3>{props.user.greeting}</h3>}
                <h1>
                    I am {(props.user && props.user.firstName) && props.user.firstName} {(props.user && props.user.lastName) && props.user.lastName}. <br />
                    I am a {(props.user && props.user.occupation) && props.user.occupation} <br />
                    based in {(props.user && props.user.location) && props.user.location}.
                </h1>
                <div className="home-content__buttons">
                    <a href="#works" className="smoothscroll btn btn--stroke">
                        Latest Projects
                    </a>
                    <a href="#about" className="smoothscroll btn btn--stroke">
                        More About Me
                    </a>
                </div>
                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>
            </div>
        </div> {/* end home-content */}
        <SocialMedia />
        {/* end home-social */}
    </section>
);

const mapStateToProps = (state) => {
    return {
        user: state.portfolio.profile
    };
};

export default connect(mapStateToProps)(Home);