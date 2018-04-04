import React from 'react';
import { Link } from 'react-router-dom';
import Script from 'react-load-script';
import Header from './Header';
import Loader from './Loader';
import Footer from './Footer';

export class BlogSingle extends React.Component {
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
        <Header /> {/* end s-header */}
        <article className="blog-single">
          {/* page header/blog hero
          ================================================== */}
          <div className="page-header page-header--single page-hero" style={{ backgroundImage: 'url(/publicPage/images/blog/blog-bg-02.jpg)' }}>
            <div className="row page-header__content narrow">
              <article className="col-full">
                <div className="page-header__info">
                  <div className="page-header__cat">
                    <a href="#0">Branding</a><a href="#0">Design</a>
                  </div>
                </div>
                <h1 className="page-header__title">
                  <a href="#0" title="">
                    Using Patterns in your Branding.
                    </a>
                </h1>
                <ul className="page-header__meta">
                  <li className="date">September 16, 2017</li>
                  <li className="author">
                    By
                      <span>Jonathan Doe</span>
                  </li>
                </ul>
              </article>
            </div>
          </div> {/* end page-header */}
          <div className="row blog-content">
            <div className="col-full blog-content__main">
              <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>
              <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>
              <p>
                <img src="/publicPage/images/wheel-1000.jpg" srcSet="/publicPage/images/wheel-2000.jpg 2000w, /publicPage/images/wheel-1000.jpg 1000w, /publicPage/images/wheel-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt="" />
              </p>
              <h2>Large Heading</h2>
              <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>
              <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>
              <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
              <h3>Smaller Heading</h3>
              <p>Dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p><pre><code>{"\n"}code {"{"}{"\n"}{"    "}font-size: 1.4rem;{"\n"}{"    "}margin: 0 .2rem;{"\n"}{"    "}padding: .2rem .6rem;{"\n"}{"    "}white-space: nowrap;{"\n"}{"    "}background: #F1F1F1;{"\n"}{"    "}border: 1px solid #E1E1E1;{"\t"}{"\n"}{"    "}border-radius: 3px;{"\n"}{"}"}{"\n"}</code></pre>
              <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
              <ul>
                <li>Donec nulla non metus auctor fringilla.
                    <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </li>
                <li>Donec nulla non metus auctor fringilla.</li>
                <li>Donec nulla non metus auctor fringilla.</li>
              </ul>
              <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
              <p className="blog-content__tags">
                <span>Post Tags</span>
                <span className="blog-content__tag-list">
                  <a href="#0">orci</a>
                  <a href="#0">lectus</a>
                  <a href="#0">varius</a>
                  <a href="#0">turpis</a>
                </span>
              </p>
              <div className="blog-content__pagenav">
                <div className="blog-content__nav">
                  <div className="blog-content__prev">
                    <a href="#0" rel="prev">
                      <span>Previous Post</span>
                      Tips on Minimalist Design
                      </a>
                  </div>
                  <div className="blog-content__next">
                    <a href="#0" rel="next">
                      <span>Next Post</span>
                      Less Is More
                      </a>
                  </div>
                </div>
                <div className="blog-content__all">
                  <a href="blog.html" className="btn btn--primary">
                    View All Post
                    </a>
                </div>
              </div>
            </div>{/* end blog-content__main */}
          </div> {/* end blog-content */}
        </article>
        {/* comments
      ================================================== */}
        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3>5 Comments</h3>
              {/* commentlist */}
              <ol className="commentlist">
                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img width={50} height={50} className="avatar" src="/publicPage/images/avatars/user-01.jpg" alt="" />
                  </div>
                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Itachi Uchiha</cite>
                      <div className="comment__meta">
                        <time className="comment__time">Sep 16, 2017 @ 23:05</time>
                        <span className="sep">|</span><a className="reply" href="#">Reply</a>
                      </div>
                    </div>
                    <div className="comment__text">
                      <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                          facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                    </div>
                  </div>
                </li>
                <li className="thread-alt depth-1 comment">
                  <div className="comment__avatar">
                    <img width={50} height={50} className="avatar" src="/publicPage/images/avatars/user-04.jpg" alt="" />
                  </div>
                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>John Doe</cite>
                      <div className="comment__meta">
                        <time className="comment__time">Sep 16, 2017 @ 24:05</time>
                        <span className="sep">|</span><a className="reply" href="#">Reply</a>
                      </div>
                    </div>
                    <div className="comment__text">
                      <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                          urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                          tantas semper delicatissimi.</p>
                    </div>
                  </div>
                  <ul className="children">
                    <li className="depth-2 comment">
                      <div className="comment__avatar">
                        <img width={50} height={50} className="avatar" src="/publicPage/images/avatars/user-03.jpg" alt="" />
                      </div>
                      <div className="comment__content">
                        <div className="comment__info">
                          <cite>Kakashi Hatake</cite>
                          <div className="comment__meta">
                            <time className="comment__time">Sep 16, 2017 @ 25:05</time>
                            <span className="sep">|</span><a className="reply" href="#">Reply</a>
                          </div>
                        </div>
                        <div className="comment__text">
                          <p>Duis sed odio sit amet nibh vulputate
                              cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                              cursus a sit amet mauris</p>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="depth-3 comment">
                          <div className="comment__avatar">
                            <img width={50} height={50} className="avatar" src="/publicPage/images/avatars/user-04.jpg" alt="" />
                          </div>
                          <div className="comment__content">
                            <div className="comment__info">
                              <cite>John Doe</cite>
                              <div className="comment__meta">
                                <time className="comment__time">Sep 16, 2017 @ 25:15</time>
                                <span className="sep">|</span><a className="reply" href="#">Reply</a>
                              </div>
                            </div>
                            <div className="comment__text">
                              <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                  etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img width={50} height={50} className="avatar" src="/publicPage/images/avatars/user-02.jpg" alt="" />
                  </div>
                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Shikamaru Nara</cite>
                      <div className="comment__meta">
                        <time className="comment-time">Sep 16, 2017 @ 25:15</time>
                        <span className="sep">|</span><a className="reply" href="#">Reply</a>
                      </div>
                    </div>
                    <div className="comment__text">
                      <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                    </div>
                  </div>
                </li>
              </ol> {/* Commentlist End */}
              {/* respond */}
              <div className="respond">
                <h3>Leave a Comment</h3>
                <form name="contactForm" id="contactForm" method="post" action="">
                  <fieldset>
                    <div className="form-field">
                      <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" defaultValue />
                    </div>
                    <div className="form-field">
                      <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" defaultValue />
                    </div>
                    <div className="form-field">
                      <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website" defaultValue />
                    </div>
                    <div className="message form-field">
                      <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" defaultValue={""} />
                    </div>
                    <button type="submit" className="submit btn--primary">Submit</button>
                  </fieldset>
                </form> {/* Form End */}
              </div> {/* Respond End */}
            </div> {/* end col-full */}
          </div> {/* end row comments */}
        </div> {/* end comments-wrap */}
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

export default BlogSingle;