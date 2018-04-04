import React from 'react';
import { connect } from 'react-redux';

const Contact = (props) => (
    <section id="contact" className="s-contact target-section">
        <div className="overlay" />
        <div className="row narrow section-intro">
            <div className="col-full">
                <h3>Contact</h3>
                <h1>Get in touch with me!</h1>
                            <div className="input-group__item">
                                <h4 className="h06">Phone</h4>
                                <p>{(props.user && props.user.phoneNumber) &&
                                    <span>Phone: {props.user.phoneNumber}<br /></span>}
                                    {(props.user && props.user.mobileNumber) &&
                                        <span>Mobile: {props.user.mobileNumber}<br /></span>}
                                    {(props.user && props.user.faxNumber) &&
                                        <span>Fax: {props.user.faxNumber}</span>}
                                </p>
                            </div>
                            <div className="input-group__item">
                                <h4 className="h06">Email</h4>
                                <p>{(props.user && props.user.emailPrimary) &&
                                    <span>{props.user.emailPrimary}<br /></span>}
                                    {(props.user && props.user.emailSecondary) &&
                                        <span>{props.user.emailSecondary}<br /></span>}
                                </p>
                            </div>
                            <div className="input-group__item">
                                <h4 className="h06">Address</h4>
                                <p>{(props.user && props.user.addressLine1) &&
                                    <span>{props.user.addressLine1}<br /></span>}
                                    {(props.user && props.user.addressLine2) &&
                                        <span>{props.user.addressLine2}<br /></span>}
                                    {(props.user && props.user.addressLine3) &&
                                        <span>{props.user.addressLine3}</span>}
                                </p>
                            </div>
                {/*<p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>*/}
            </div>
        </div>
        {/* 
        <div className="row contact__main">
            <div className="col-eight tab-full contact__form">
                <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>
                        <div className="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue minLength={2} required aria-required="true" className="full-width" />
                        </div>
                        <div className="form-field">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue required aria-required="true" className="full-width" />
                        </div>
                        <div className="form-field">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue className="full-width" />
                        </div>
                        <div className="form-field">
                            <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required aria-required="true" className="full-width" defaultValue={""} />
                        </div>
                        <div className="form-field">
                            <button className="full-width btn--primary">Submit</button>
                            <div className="submit-loader">
                                <div className="text-loader">Sending...</div>
                                <div className="s-loader">
                                    <div className="bounce1" />
                                    <div className="bounce2" />
                                    <div className="bounce3" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className="message-warning">
                    Something went wrong. Please try again.
  </div>
                <div className="message-success">
                    Your message was sent, thank you!<br />
                </div>
            </div>
            <div className="col-four tab-full contact__infos">
                <h4 className="h06">Phone</h4>
                <p>{(props.user && props.user.phoneNumber) &&
                    <span>Phone: {props.user.phoneNumber}<br /></span>}
                    {(props.user && props.user.mobileNumber) &&
                        <span>Mobile: {props.user.mobileNumber}<br /></span>}
                    {(props.user && props.user.faxNumber) &&
                        <span>Fax: {props.user.faxNumber}</span>}
                </p>
                <h4 className="h06">Email</h4>
                <p>{(props.user && props.user.emailPrimary) &&
                    <span>{props.user.emailPrimary}<br /></span>}
                    {(props.user && props.user.emailSecondary) &&
                        <span>{props.user.emailSecondary}<br /></span>}
                </p>
                <h4 className="h06">Address</h4>
                <p>{(props.user && props.user.addressLine1) &&
                    <span>{props.user.addressLine1}<br /></span>}
                    {(props.user && props.user.addressLine2) &&
                        <span>{props.user.addressLine2}<br /></span>}
                    {(props.user && props.user.addressLine3) &&
                        <span>{props.user.addressLine3}</span>}
                </p>
            </div>
        {/* </div> */}
    </section>
);

const mapStateToProps = (state) => {
    return {
        user: state.portfolio.profile
    };
};

export default connect(mapStateToProps)(Contact);