import React from 'react';
import { connect } from 'react-redux';
import WorkList from './works/WorkList';

const Works = (props) => (
    <section id="works" className="s-works target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full">
                <h3>Portfolio</h3>
                <h1>See My Latest Projects.</h1>
                <p className="lead">{props.portfolio.portfolioDescription}</p>
            </div>
        </div>
        <div className="row masonry-wrap">
            <div className="masonry">
                <WorkList />
            </div>
        </div> {/* end masonry */}
    </section>
);

const mapStateToProps = (state) => {
    return {
        portfolio: state.portfolio
    };
};

export default connect(mapStateToProps)(Works);