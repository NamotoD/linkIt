import React from 'react';
const validUrl = new RegExp(
    "^" +
    // protocol identifier
    "(?:(?:https?|ftp)://)" +
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
    // IP address exclusion
    // private & local networks
    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
    "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
    "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    "|" +
    // host name
    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
    // domain name
    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
    // TLD identifier
    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
    // TLD may end with dot
    "\\.?" +
    ")" +
    // port number
    "(?::\\d{2,5})?" +
    // resource path
    "(?:[/?#]\\S*)?" +
    "$", "i"
);
const validName = new RegExp("^[a-zA-Z ]{0,30}$");
const lengthMax30 = new RegExp("^.{0,30}$");
const lengthMax50 = new RegExp("^.{0,50}$");

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {//local state
            greeting: props.user ? props.user.greeting : '',
            firstName: props.user ? props.user.firstName : '',
            lastName: props.user ? props.user.lastName : '',
            occupation: props.user ? props.user.occupation : '',
            location: props.user ? props.user.location : '',
            phoneNumber: props.user ? props.user.phoneNumber : '',
            mobileNumber: props.user ? props.user.mobileNumber : '',
            faxNumber: props.user ? props.user.faxNumber : '',
            emailPrimary: props.user ? props.user.emailPrimary : '',
            emailSecondary: props.user ? props.user.emailSecondary : '',
            addressLine1: props.user ? props.user.addressLine1 : '',
            addressLine2: props.user ? props.user.addressLine2 : '',
            addressLine3: props.user ? props.user.addressLine3 : '',
            facebook: props.user ? props.user.facebook : '',
            twitter: props.user ? props.user.twitter : '',
            instagram: props.user ? props.user.instagram : '',
            behance: props.user ? props.user.behance : '',
            pinterest: props.user ? props.user.pinterest : '',
            linkedIn: props.user ? props.user.linkedIn : '',
            stackOverflow: props.user ? props.user.stackOverflow : '',
            gitHub: props.user ? props.user.gitHub : '',
            flickr: props.user ? props.user.flickr : '',
            tumblr: props.user ? props.user.tumblr : '',
            vimeo: props.user ? props.user.vimeo : '',
            reddit: props.user ? props.user.reddit : '',
            youTube: props.user ? props.user.youTube : '',
            soundCloud: props.user ? props.user.soundCloud : '',
            blogger: props.user ? props.user.blogger : '',
            googlePlay: props.user ? props.user.googlePlay : '',
            error: ''
        };
    };
    onGreetingChange = (e) => {
        const greeting = e.target.value;
        if (greeting.match(lengthMax30)) {
            this.setState(() => ({ greeting }));
        };
    };
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        if (firstName.match(validName)) {
            this.setState(() => ({ firstName }));
        };
    };
    onLastNameChange = (e) => {
        const lastName = e.target.value;
        if (lastName.match(validName)) {
            this.setState(() => ({ lastName }));
        };
    };
    onOccupationChange = (e) => {
        const occupation = e.target.value;
        if (occupation.match(lengthMax30)) {
            this.setState(() => ({ occupation }));
        };
    };
    onLocationChange = (e) => {
        const location = e.target.value;
        if (location.match(lengthMax30)) {
            this.setState(() => ({ location }));
        };
    };
    onPhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        if (phoneNumber.match(lengthMax30)) {
            this.setState(() => ({ phoneNumber }));
        };
    };
    onMobileNumberChange = (e) => {
        const mobileNumber = e.target.value;
        if (mobileNumber.match(lengthMax30)) {
            this.setState(() => ({ mobileNumber }));
        };
    };
    onFaxNumberChange = (e) => {
        const faxNumber = e.target.value;
        if (faxNumber.match(lengthMax30)) {
            this.setState(() => ({ faxNumber }));
        };
    };
    onEmailPrimaryChange = (e) => {
        const emailPrimary = e.target.value;
        if (emailPrimary.match(lengthMax50)) {
            this.setState(() => ({ emailPrimary }));
        };
    };
    onEmailSecondaryChange = (e) => {
        const emailSecondary = e.target.value;
        if (emailSecondary.match(lengthMax50)) {
            this.setState(() => ({ emailSecondary }));
        };
    };
    onAddressLine1Change = (e) => {
        const addressLine1 = e.target.value;
        if (addressLine1.match(lengthMax50)) {
            this.setState(() => ({ addressLine1 }));
        };
    };
    onAddressLine2Change = (e) => {
        const addressLine2 = e.target.value;
        if (addressLine2.match(lengthMax50)) {
            this.setState(() => ({ addressLine2 }));
        };
    };
    onAddressLine3Change = (e) => {
        const addressLine3 = e.target.value;
        if (addressLine3.match(lengthMax50)) {
            this.setState(() => ({ addressLine3 }));
        };
    };
    onFacebookChange = (e) => {
        const facebook = e.target.value;
        // if (facebook.match(lengthMax50)) {
        this.setState(() => ({ facebook }));
        // };
    };
    onTwitterChange = (e) => {
        const twitter = e.target.value;
        // if (twitter.match(lengthMax50)) {
        this.setState(() => ({ twitter }));
        // };
    };
    onInstagramChange = (e) => {
        const instagram = e.target.value;
        // if (instagram.match(lengthMax50)) {
        this.setState(() => ({ instagram }));
        // };
    };
    onBehanceChange = (e) => {
        const behance = e.target.value;
        // if (behance.match(lengthMax50)) {
        this.setState(() => ({ behance }));
        // };
    };
    onPinterestChange = (e) => {
        const pinterest = e.target.value;
        // if (pinterest.match(lengthMax50)) {
        this.setState(() => ({ pinterest }));
        // };
    };
    onLinkedInChange = (e) => {
        const linkedIn = e.target.value;
        // if (linkedIn.match(lengthMax50)) {
        this.setState(() => ({ linkedIn }));
        // };
    };
    onStackOverflowChange = (e) => {
        const stackOverflow = e.target.value;
        // if (stackOverflow.match(lengthMax50)) {
        this.setState(() => ({ stackOverflow }));
        // };
    };
    onGitHubChange = (e) => {
        const gitHub = e.target.value;
        // if (gitHub.match(lengthMax50)) {
        this.setState(() => ({ gitHub }));
        // };
    };
    onFlickrChange = (e) => {
        const flickr = e.target.value;
        // if (flickr.match(lengthMax50)) {
        this.setState(() => ({ flickr }));
        // };
    };
    onTumblrChange = (e) => {
        const tumblr = e.target.value;
        // if (tumblr.match(lengthMax50)) {
        this.setState(() => ({ tumblr }));
        // };
    };
    onVimeoChange = (e) => {
        const vimeo = e.target.value;
        // if (vimeo.match(lengthMax50)) {
        this.setState(() => ({ vimeo }));
        // };
    };
    onRedditChange = (e) => {
        const reddit = e.target.value;
        // if (reddit.match(lengthMax50)) {
        this.setState(() => ({ reddit }));
        // };
    };
    onYouTubeChange = (e) => {
        const youTube = e.target.value;
        // if (youTube.match(lengthMax50)) {
        this.setState(() => ({ youTube }));
        // };
    };
    onSoundCloudChange = (e) => {
        const soundCloud = e.target.value;
        // if (soundCloud.match(lengthMax50)) {
        this.setState(() => ({ soundCloud }));
        // };
    };
    onBloggerChange = (e) => {
        const blogger = e.target.value;
        // if (blogger.match(lengthMax50)) {
        this.setState(() => ({ blogger }));
        // };
    };
    onGooglePlayChange = (e) => {
        const googlePlay = e.target.value;
        // if (googlePlay.match(lengthMax50)) {
        this.setState(() => ({ googlePlay }));
        // };
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName || !this.state.occupation || !this.state.location) {
            this.setState(() => ({ error: 'Please provide First Name, Last Name, your current occupation and location.' }));
        } else {
            this.setState(() => ({ error: '' }));
            //pass data to DashboardPage
            this.props.onSubmit({
                greeting: this.state.greeting || null,
                firstName: this.state.firstName || null,
                lastName: this.state.lastName || null,
                occupation: this.state.occupation || null,
                location: this.state.location || null,
                phoneNumber: this.state.phoneNumber || null,
                mobileNumber: this.state.mobileNumber || null,
                faxNumber: this.state.faxNumber || null,
                emailPrimary: this.state.emailPrimary || null,
                emailSecondary: this.state.emailSecondary || null,
                addressLine1: this.state.addressLine1 || null,
                addressLine2: this.state.addressLine2 || null,
                addressLine3: this.state.addressLine3 || null,
                facebook: this.state.facebook || null,
                twitter: this.state.twitter || null,
                instagram: this.state.instagram || null,
                behance: this.state.behance || null,
                pinterest: this.state.pinterest || null,
                linkedIn: this.state.linkedIn || null,
                stackOverflow: this.state.stackOverflow || null,
                gitHub: this.state.gitHub || null,
                flickr: this.state.flickr || null,
                tumblr: this.state.tumblr || null,
                vimeo: this.state.vimeo || null,
                reddit: this.state.reddit || null,
                youTube: this.state.youTube || null,
                soundCloud: this.state.soundCloud || null,
                blogger: this.state.blogger || null,
                googlePlay: this.state.googlePlay || null
            });
        };
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <label>
                        Greeting:
                    <input
                            type="text"
                            placeholder="Greeting"
                            size="30"
                            autoFocus
                            className="text-input"
                            value={this.state.greeting || ""}
                            onChange={this.onGreetingChange}
                        />
                    </label>
                    <label>
                        First Name:
                    <input
                            type="text"
                            placeholder="First Name"
                            size="30"
                            className="text-input"
                            value={this.state.firstName || ""}
                            onChange={this.onFirstNameChange}
                        />
                    </label>
                    <label>
                        Last Name:
                    <input
                            type="text"
                            placeholder="Last Name"
                            size="30"
                            className="text-input"
                            value={this.state.lastName || ""}
                            onChange={this.onLastNameChange}
                        />
                    </label>
                    <label>
                        Occupation:
                    <input
                            type="text"
                            placeholder="Occupation"
                            size="30"
                            className="text-input"
                            value={this.state.occupation || ""}
                            onChange={this.onOccupationChange}
                        />
                    </label>
                    <label>
                        Location:
                    <input
                            type="text"
                            placeholder="Location"
                            size="30"
                            className="text-input"
                            value={this.state.location || ""}
                            onChange={this.onLocationChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                    <input
                            type="text"
                            placeholder="Phone Number"
                            size="30"
                            className="text-input"
                            value={this.state.phoneNumber || ""}
                            onChange={this.onPhoneNumberChange}
                        />
                    </label>
                    <label>
                        Mobile Number:
                    <input
                            type="text"
                            placeholder="Mobile Number"
                            size="30"
                            className="text-input"
                            value={this.state.mobileNumber || ""}
                            onChange={this.onMobileNumberChange}
                        />
                    </label>
                    <label>
                        Fax Number:
                    <input
                            type="text"
                            placeholder="Fax Number"
                            size="30"
                            className="text-input"
                            value={this.state.faxNumber || ""}
                            onChange={this.onFaxNumberChange}
                        />
                    </label>
                    <label>
                        Primary Email:
                    <input
                            type="text"
                            placeholder="Primary Email"
                            maxLength="50"
                            size="30"
                            className="text-input"
                            value={this.state.emailPrimary || ""}
                            onChange={this.onEmailPrimaryChange}
                        />
                    </label>
                    <label>
                        Secondary Email:
                    <input
                            type="text"
                            placeholder="Secondary Email"
                            maxLength="50"
                            size="30"
                            className="text-input"
                            value={this.state.emailSecondary || ""}
                            onChange={this.onEmailSecondaryChange}
                        />
                    </label>
                    <label>
                        Address Line 1:
                    <input
                            type="text"
                            placeholder="Address Line 1"
                            maxLength="50"
                            size="30"
                            className="text-input"
                            value={this.state.addressLine1 || ""}
                            onChange={this.onAddressLine1Change}
                        />
                    </label>
                    <label>
                    Address Line 2:
                    <input
                            type="text"
                            placeholder="Address Line 2"
                            maxLength="50"
                            size="30"
                            className="text-input"
                            value={this.state.addressLine2 || ""}
                            onChange={this.onAddressLine2Change}
                        />
                    </label>
                    <label>
                    Address Line 3:
                    <input
                            type="text"
                            placeholder="Address Line 3"
                            maxLength="50"
                            size="30"
                            className="text-input"
                            value={this.state.addressLine3 || ""}
                            onChange={this.onAddressLine3Change}
                        />
                    </label>
                    <h1>Connect your Social Media </h1>
                    <p>Copy/Paste your private Url for each Social Media you wish to share</p>
                    <p>Make sure to include http/s part of the Url</p>
                    <p>An icon with a link will get generated on your portfolio for each Url</p>
                    <label>
                        Facebook:
                      <input
                            placeholder="Your Facebook public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.facebook || ""}
                            onChange={this.onFacebookChange}
                        />
                    </label>
                    <label>
                        Twitter:
                      <input
                            placeholder="Your Twitter public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.twitter || ""}
                            onChange={this.onTwitterChange}
                        />
                    </label>
                    <label>
                        Instagram:
                      <input
                            placeholder="Your Instagram public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.instagram || ""}
                            onChange={this.onInstagramChange}
                        />
                    </label>
                    <label>
                        Behance:
                      <input
                            placeholder="Your Behance public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.behance || ""}
                            onChange={this.onBehanceChange}
                        />
                    </label>
                    <label>
                        Pinterest:
                      <input
                            placeholder="Your Pinterest public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.pinterest || ""}
                            onChange={this.onPinterestChange}
                        />
                    </label>
                    <label>
                        linkedIn:
                      <input
                            placeholder="Your linkedIn public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.linkedIn || ""}
                            onChange={this.onLinkedInChange}
                        />
                    </label>
                    <label>
                        Stack Overflow:
                      <input
                            placeholder="Your Stack Overflow public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.stackOverflow || ""}
                            onChange={this.onStackOverflowChange}
                        />
                    </label>
                    <label>
                        GitHub:
                      <input
                            placeholder="Your GitHub public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.gitHub || ""}
                            onChange={this.onGitHubChange}
                        />
                    </label>
                    <label>
                        Flickr:
                      <input
                            placeholder="Your Flickr public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.flickr || ""}
                            onChange={this.onFlickrChange}
                        />
                    </label>
                    <label>
                        Tumblr:
                      <input
                            placeholder="Your Tumblr public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.tumblr || ""}
                            onChange={this.onTumblrChange}
                        />
                    </label>
                    <label>
                        Vimeo:
                      <input
                            placeholder="Your Vimeo public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.vimeo || ""}
                            onChange={this.onVimeoChange}
                        />
                    </label>
                    <label>
                        Reddit:
                      <input
                            placeholder="Your Reddit public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.reddit || ""}
                            onChange={this.onRedditChange}
                        />
                    </label>
                    <label>
                        YouTube:
                      <input
                            placeholder="Your YouTube public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.youTube || ""}
                            onChange={this.onYouTubeChange}
                        />
                    </label>
                    <label>
                        SoundCloud:
                      <input
                            placeholder="Your SoundCloud public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.soundCloud || ""}
                            onChange={this.onSoundCloudChange}
                        />
                    </label>
                    <label>
                        Blogger:
                      <input
                            placeholder="Your Blogger public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.blogger || ""}
                            onChange={this.onBloggerChange}
                        />
                    </label>
                    <label>
                        Google Play:
                      <input
                            placeholder="Your Google Play public Url.."
                            type="text"
                            maxLength="100"
                            size="60"
                            className="text-input"
                            value={this.state.googlePlay || ""}
                            onChange={this.onGooglePlayChange}
                        />
                    </label>
                    {/*
                    <textarea
                        placeholder="About Yourself"
                        value={this.state.about}
                        onChange={this.onAboutChange}
                    >
                    </textarea>
                    */}
                    <button className="button">Save Changes</button>
                </form>
            </div>
        )
    }
}