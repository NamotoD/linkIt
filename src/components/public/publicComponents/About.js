import React from 'react';
import { connect } from 'react-redux';
import SkillList from './about/SkillList';
import Experience from '../publicComponents/Experience';

const About = (props) => (
    <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                {(props.aboutUser && props.aboutUser.aboutShort) &&
                    <p className="lead">{props.aboutUser.aboutShort}
                    </p>}
            </div>
        </div>
        <div className="row about-content">
            <div className="col-six tab-full left">
            {(props.aboutUser && props.aboutUser.aboutLongGreeting) &&
                <h3>{props.aboutUser.aboutLongGreeting}</h3>}
                {(props.aboutUser && props.aboutUser.aboutLong) &&
                <p>{props.aboutUser.aboutLong}</p>}
            </div>
            <div className="col-six tab-full right">
                <h3>I've Got Some skills.</h3>
                <ul className="skill-bars">
                    <SkillList />
                </ul>
            </div>
        </div> {/* end about-content */}
        <div className="row about-content about-content--buttons">
            <div className="col-six tab-full left">
                <a href={(props.aboutUser && props.aboutUser.curriculumVitae && props.aboutUser.curriculumVitae.url) ? props.aboutUser.curriculumVitae.url : '#0'} className="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className="col-six tab-full right">
                <a href={(props.user && props.user.emailPrimary) ? ("mailto:" + props.user.emailPrimary) : '#0'} className="btn full-width">Hire Me Now</a>
            </div>
        </div> {/* end about-content buttons */}
        {/*<Experience />*/}
    </section> 
);

const mapStateToProps = (state) => {
    return {
        aboutUser: state.portfolio.about,
        user: state.portfolio.profile
    };
};

export default connect(mapStateToProps)(About);