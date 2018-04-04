import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';
import Header from './publicComponents/Header';
import Home from './publicComponents/Home';
import About from './publicComponents/About';
import Works from './publicComponents/Works';
import Testimonials from './publicComponents/Testimonials';
import Blog from './publicComponents/Blog';
import Advert from './publicComponents/Advert';
import Stats from './publicComponents/Stats';
import Contact from './publicComponents/Contact';
import PhotoSwipe from './publicComponents/PhotoSwipe';
import Loader from './Loader';
import Footer from './Footer';
import database from '../../firebase/firebase';
import '../../styles/components/public/_base.scss';
import '../../styles/components/public/_fonts.scss';
import '../../styles/components/public/_mains.scss';
import '../../styles/components/public/_vendor.scss';
// import {history} from '../../routers/AppRouter';

export class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    };

    componentWillMount(props) {
        // if (this.props.location.hash === "") { // Only loads on first access tp /public
        //     // console.log("ONLY PRINTS ON FIRST LOAD AT ROOT!!");
        // console.log("this.props.location.hash is \"\"", this.props.location.hash);
        //     $("html").addClass('ss-preload');
        //     this.setState({ hasMounted: true });
        // };

        const scripttwo = document.createElement("script");
        scripttwo.src = "/publicPage/js/plugins.js";
        scripttwo.async = true;
        document.body.appendChild(scripttwo);

        const scriptthree = document.createElement("script");
        scriptthree.src = "/publicPage/js/main.js";
        scriptthree.async = true;
        document.body.appendChild(scriptthree);

        // const scriptfour = document.createElement("link");
        // scriptfour.rel = "stylesheet";
        // scriptfour.href = "/publicPage/css/base.css";
        // scriptfour.async = true;
        // document.body.appendChild(scriptfour);

        // const scriptfive = document.createElement("link");
        // scriptfive.rel = "stylesheet";
        // scriptfive.href = "/publicPage/css/vendor.css";
        // scriptfive.async = true;
        // document.body.appendChild(scriptfive);

        // const scriptsix = document.createElement("link");
        // scriptsix.rel = "stylesheet";
        // scriptsix.href = "/publicPage/css/main.css";
        // scriptsix.async = true;
        // document.body.appendChild(scriptsix);



        // const data = database.ref(`users/GRBpKhODg8SxRWncMSiiQXF9dY12`).once('value').then((snapshot) => {
        //     const user = {};
        //     snapshot.forEach((childSnapshot) => {
        //         user[childSnapshot.key] = childSnapshot.val();
        //     });
        //     this.setState({
        //         user: {
        //             ...user
        //         },
        //     });
        // });

    };
    componentDidMount() {
        console.log("componentDidMount: ");
        // const firstElement = history.location.pathname.split('/')[1];
        // console.log("firstElement: ", firstElement)
        // if (firstElement !== 'share') {
        //     window.location.reload();
        // }
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations 
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');
        setTimeout(() => {
            // console.log("DATAAAAAAState:", this.state.user)

        }, 10000);
    };
    componentDidUpdate() {
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations 
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');

    }
    // componentWillUnmount() {
    //     window.location.reload();

    // };

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    render(props) {
        return (
            <div>{console.log("In Share: ", this.props)}
                {console.log("My references: ", this.refs)}
                <Header />
                {/* home
   ================================================== */}
                <Home />{/* end s-home */}
                {/* about
    ================================================== */}
                <About />{/* end about */}
                {/* works
    ================================================== */}
                <Works /> {/* end works */}
                {/* testimonials
    ================================================== */}
                {/*<Testimonials /> end s-testimonials */}

                {/* blog
    ================================================== */}
                {/* <Blog />  end s-blog */}

                {/* s-cta
    ================================================== */}
                {/* <Advert />  end cta */}

                {/*<Stats /> end s-stats */}
                {/* s-stats
    ================================================== */}
                <Contact /> {/* end s-contact */}
                {/* footer
    ================================================== */}
                <Footer />
                {/* photoswipe background
    ================================================== */}
                <PhotoSwipe />{/* end photoSwipe background */}
                {this.props.location.hash === "" && <Loader />/* only show on first load */}               {/* Java Script
    ================================================== */}
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    // startSetAvatar: () => dispatch(startSetAvatar()),
});


const mapStateToProps = (state, props) => ({
    currState: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Share);