import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => (
    <section id="blog" className="s-blog target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full">
                <h3>Journal</h3>
                <h1>Latest From The Blog.</h1>
                <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute.
    Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum
    ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
            </div>
        </div>
        <div className="row blog-content">
            <div className="col-full">
                <div className="blog-list block-1-2 block-tab-full">
                    <article className="col-block">
                        <div className="blog-date">
                            <Link to={`/blogSingle`}>Sept 16, 2017</Link>
                        </div>
                        <h2 className="h01"><Link to={`/blogSingle`}>The 10 Golden Rules of Clean Simple Design.</Link></h2>
                        <p>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
      </p>
                        <div className="blog-cat">
                            <Link to={`/blog`}>Branding</Link><Link to={`/blog`}>Design</Link>
                        </div>
                    </article>
                    <article className="col-block">
                        <div className="blog-date">
                            <Link to={`/blogSingle`}>Sept 15, 2017</Link>
                        </div>
                        <h2 className="h01">
                            <Link to={`/blogSingle`}>Photography Can Improve Your Graphic Design.</Link></h2>
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
                        <h2 className="h01"><Link to={`/blogSingle`}>Using Patterns in your Branding.</Link></h2>
                        <p>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
      </p>
                        <div className="blog-cat">
                            <Link to={`/blog`}>Design</Link><Link to={`/blog`}>Branding</Link>
                        </div>
                    </article>
                </div> {/* end blog-list */}
            </div> {/* end col-full */}
        </div> {/* end blog-content */}
    </section>
);

export default Blog;