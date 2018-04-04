import React from 'react';
import { connect } from 'react-redux';

const SocialMedia = (props) => (
    <ul className="home-social">
        {(props.user && props.user.emailPrimary) &&
            <li>
                <a href={"mailto:" + props.user.emailPrimary}><i className="im im-mail" aria-hidden="true" /><span>Email</span></a>
            </li>}
        {(props.user && props.user.facebook) &&
            <li>
                <a href={props.user.facebook}><i className="im im-facebook" aria-hidden="true" /><span>Facebook</span></a>
            </li>}
        {(props.user && props.user.twitter) &&
            <li>
                <a href={props.user.twitter}><i className="im im-twitter" aria-hidden="true" /><span>Twitter</span></a>
            </li>}
        {(props.user && props.user.instagram) &&
            <li>
                <a href={props.user.instagram}><i className="im im-instagram" aria-hidden="true" /><span>Instagram</span></a>
            </li>}
        {(props.user && props.user.behance) &&
            <li>
                <a href={props.user.behance}><i className="im im-behance" aria-hidden="true" /><span>Behance</span></a>
            </li>}
        {(props.user && props.user.pinterest) &&
            <li>
                <a href={props.user.pinterest}><i className="im im-pinterest" aria-hidden="true" /><span>Pinterest</span></a>
            </li>}
        {(props.user && props.user.linkedIn) &&
            <li>
                <a href={props.user.linkedIn}><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
            </li>}
        {(props.user && props.user.stackOverflow) &&
            <li>
                <a href={props.user.stackOverflow}><i className="im im-stackoverflow" aria-hidden="true" /><span>StackOverflow</span></a>
            </li>}
        {(props.user && props.user.gitHub) &&
            <li>
                <a href={props.user.gitHub}><i className="im im-github" aria-hidden="true" /><span>GitHub</span></a>
            </li>}
        {(props.user && props.user.flickr) &&
            <li>
                <a href={props.user.flickr}><i className="im im-flickr" aria-hidden="true" /><span>Flickr</span></a>
            </li>}
        {(props.user && props.user.tumblr) &&
            <li>
                <a href={props.user.tumblr}><i className="im im-tumblr" aria-hidden="true" /><span>Tumblr</span></a>
            </li>}
        {(props.user && props.user.vimeo) &&
            <li>
                <a href={props.user.vimeo}><i className="im im-vimeo" aria-hidden="true" /><span>Vimeo</span></a>
            </li>}
        {(props.user && props.user.reddit) &&
            <li>
                <a href={props.user.reddit}><i className="im im-reddit" aria-hidden="true" /><span>Reddit</span></a>
            </li>}
        {(props.user && props.user.youTube) &&
            <li>
                <a href={props.user.youTube}><i className="im im-youtube" aria-hidden="true" /><span>YouTube</span></a>
            </li>}
        {(props.user && props.user.soundCloud) &&
            <li>
                <a href={props.user.soundCloud}><i className="im im-soundcloud" aria-hidden="true" /><span>SoundCloud</span></a>
            </li>}
        {(props.user && props.user.blogger) &&
            <li>
                <a href={props.user.blogger}><i className="im im-blogger" aria-hidden="true" /><span>Blogger</span></a>
            </li>}
        {(props.user && props.user.googlePlay) &&
            <li>
                <a href={props.user.googlePlay}><i className="im im-google-play" aria-hidden="true" /><span>GooglePlay</span></a>
            </li>}
    </ul>
);

const mapStateToProps = (state) => {
    return {
        user: state.portfolio.profile
    };
};

export default connect(mapStateToProps)(SocialMedia);