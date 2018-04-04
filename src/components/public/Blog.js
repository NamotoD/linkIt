import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';
import Header from './Header';
import Loader from './Loader';
import Footer from './Footer';
import {startSetPreviousLocation} from '../../actions/previousLocation';

export class Blog extends React.Component {
    componentWillMount() {
        if (this.props.location.hash === "") { // Only loads on first access tp /public
            console.log("ONLY PRINTS ON FIRST LOAD AT ROOT!!");
            $("html").addClass('ss-preload');
            this.setState({ hasMounted: true });
        };

        // const scriptfour = document.createElement("script");
        // scriptfour.src = "publicPage/js/modernizr.js";
        // scriptfour.async = true;
        // document.body.appendChild(scriptfour);

        // const scriptfive = document.createElement("script");
        // scriptfive.src = "publicPage/js/pace.min.js";
        // scriptfive.async = true;
        // document.body.appendChild(scriptfive);

        // const scriptone = document.createElement("script");
        // scriptone.src = "publicPage/js/jquery-3.2.1.min.js";
        // scriptone.async = true;
        // document.body.appendChild(scriptone);

        const scripttwo = document.createElement("script");
        scripttwo.src = "/publicPage/js/plugins.js";
        scripttwo.async = true;
        document.body.appendChild(scripttwo);

        const scriptthree = document.createElement("script");
        scriptthree.src = "/publicPage/js/main.js";
        scriptthree.async = true;
        document.body.appendChild(scriptthree);

    };
    componentDidMount() {
        console.log("Blog Will Unmount", this.props.startSetPreviousLocation);
        this.props.startSetPreviousLocation({previousLocation: this.props.location.pathname})
        if (this.props.location.hash === "") {
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        };
    };

    componentWillUnmount() {
        console.log("Blog Will Unmount", this.props.startSetPreviousLocation);
        this.props.startSetPreviousLocation({previousLocation: this.props.location.pathname})
    };

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }
    render() {
        return (
            <div>
                <Script
                    url="/publicPage/js/pace.min.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                <Script
                    url="/publicPage/js/modernizr.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                <Script
                    url="/publicPage/js/jquery-3.2.1.min.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                <Header /> {/* end s-header */}{/* end s-header */}
                {/* page header
      ================================================== */}
                <section className="page-header page-hero" style={{ backgroundImage: 'url(/publicPage/images/blog/blog-bg-01.jpg)' }}>
                    <div className="row page-header__content">
                        <article className="col-full">
                            <div className="page-header__info">
                                <div className="page-header__cat">
                                    <a href="#0">Branding</a><a href="#0">Design</a>
                                </div>
                                <div className="page-header__date">
                                    Sept 16, 2017
                  </div>
                            </div>
                            <h1 className="page-header__title">
                                <a href="#0" title="">
                                    The 10 Golden Rules of Clean Simple Design.
                  </a>
                            </h1>
                            <p>Pellentesque in ipsum id orci porta dapibus amet dui. Ad id deserunt ratione autem eius et minima ut et. Nihil sed quis velit aut enim aliquam. Quas non ad sint eveniet voluptatem est iure...</p>
                            <p>
                                <a href="#0" className="btn btn--stroke page-header__btn">Read More</a>
                            </p>
                        </article>
                    </div>
                </section> {/* end page-header */}
                {/* blog
      ================================================== */}
                <section className="blog-content-wrap">
                    <div className="row blog-content">
                        <div className="col-full">
                            <div className="blog-list block-1-2 block-tab-full">
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 15, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>Photography Skills Can Improve Your Graphic Design.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Photography</Link>
                                    </div>
                                </article>
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 14, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>Workspace Design Trends and Ideas.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh dolore irure esse Duis nulla sint.
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Branding</Link><Link to={`/blog`}>Wordpress</Link>
                                    </div>
                                </article>
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 12, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>You Can See Patterns Everywhere.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Design</Link><Link to={`/blog`}>UI</Link>
                                    </div>
                                </article>
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 12, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>Designing With Black and White.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Design</Link>
                                    </div>
                                </article>
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 10, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>Get Started With Web Typography.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Typography</Link>
                                    </div>
                                </article>
                                <article className="col-block">
                                    <div className="blog-date">
                                        <Link to={`/blogSingle`}>Sept 08, 2017</Link>
                                    </div>
                                    <h2 className="h01"><Link to={`/blogSingle`}>Improving Design Layout With Vertical Rhythm.</Link></h2>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
                    </p>
                                    <div className="blog-cat">
                                        <Link to={`/blog`}>Design</Link><a href="#0">Web Design</a>
                                    </div>
                                </article>
                            </div> {/* end blog-list */}
                        </div> {/* end col-full */}
                    </div> {/* end blog-content */}
                    <div className="row blog-entries-nav">
                        <div className="col-full">
                            <a href="#0" className="btn btn--stroke">
                                <i className="im im-arrow-left" />
                                Prev
                </a>
                            <a href="#0" className="btn btn--stroke">
                                Next
                  <i className="im im-arrow-right" />
                            </a>
                        </div>
                    </div>
                </section> {/* end blog-content-wrap */}
                {/* footer
      ================================================== */}
                <Footer />
                {this.props.location.hash === "" && <Loader />/* only show on first load */} 
                {/* Java Script
      ================================================== */}
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
	startSetPreviousLocation: (updates) => dispatch(startSetPreviousLocation(updates))
});

export default connect(undefined, mapDispatchToProps)(Blog);