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
const lengthMax100 = new RegExp("^.{0,100}$");
const lengthMax200 = new RegExp("^.{0,200}$");
const lengthMax2000 = new RegExp("^.{0,2000}$");

export default class AboutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {//local state
            aboutShort: props.aboutUser ? props.aboutUser.aboutShort : '',
            aboutLongGreeting: props.aboutUser ? props.aboutUser.aboutLongGreeting : '',
            aboutLong: props.aboutUser ? props.aboutUser.aboutLong : '',
            error: ''
        };
    };
    onAboutShortChange = (e) => {
        const aboutShort = e.target.value;
        if (aboutShort.match(lengthMax200)) {
            this.setState(() => ({ aboutShort }));
        };
    };
    onAboutLongGreetingChange = (e) => {
        const aboutLongGreeting = e.target.value;
        if (aboutLongGreeting.match(lengthMax100)) {
            this.setState(() => ({ aboutLongGreeting }));
        };
    };
    onAboutLongChange = (e) => {
        const aboutLong = e.target.value;
        if (aboutLong.match(lengthMax2000)) {
            this.setState(() => ({ aboutLong }));
        };
    };
    onSubmit = (e) => {
        e.preventDefault();

        // if (!this.state.firstName || !this.state.lastName || !this.state.occupation || !this.state.location) {
        //     this.setState(() => ({ error: 'Please provide First Name, Last Name, your current occupation and location.' }));
        // } else {
        this.setState(() => ({ error: '' }));
        //pass data to DashboardPage
        this.props.onSubmit({
            aboutShort: this.state.aboutShort || null,
            aboutLongGreeting: this.state.aboutLongGreeting || null,
            aboutLong: this.state.aboutLong || null
        });
        // };
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <label>
                        One or two sentences about yourself:
                    <input
                            type="text"
                            placeholder="Something about yourself just in one or two sentences."
                            size="200"
                            maxLength="200"
                            autoFocus
                            className="text-input"
                            value={this.state.aboutShort || ""}
                            onChange={this.onAboutShortChange}
                        />
                    </label>
                    <label>
                        Greeting before long description:
                    <input
                            type="text"
                            placeholder="Greeting"
                            size="100"
                            maxLength="100"
                            className="text-input"
                            value={this.state.aboutLongGreeting || ""}
                            onChange={this.onAboutLongGreetingChange}
                        />
                    </label>
                    <label>
                        Describe yourself in less than 1000 characters:
                    <textarea
                            placeholder="More detailed description about yourself."
                            size="2000"
                            maxLength="2000"
                            className="textarea"
                            value={this.state.aboutLong || ""}
                            onChange={this.onAboutLongChange}
                        />
                    </label>
                    <button className="button">Save Changes</button>
                </form>
            </div>
        )
    }
}