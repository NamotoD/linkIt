import React from 'react';

const Stats = () => (
    <section id="stats" className="s-stats">
        <div className="row block-1-4 block-tab-1-2 block-mob-full stats">
            <div className="col-block stats__col ">
                <div className="stats__count">
                    128
  </div>
                <h4>Awards Received</h4>
            </div>
            <div className="col-block stats__col">
                <div className="stats__count">
                    1500
  </div>
                <h4>Cups of Coffee</h4>
            </div>
            <div className="col-block stats__col stats__col--highlight">
                <div className="stats__upsign">
                    <a href="#works"><i className="im im-arrow-up" aria-hidden="true" /></a>
                </div>
                <div className="stats__count">
                    110
  </div>
                <h4>Projects Completed</h4>
            </div>
            <div className="col-block stats__col">
                <div className="stats__count">
                    101
  </div>
                <h4>Happy Clients</h4>
            </div>
        </div>
    </section>
);

export default Stats;