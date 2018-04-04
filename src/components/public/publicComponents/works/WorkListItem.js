import React from 'react';
import { Link } from 'react-router-dom';


export default class WorkListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {//local state
            // id: props.project ? props.project.id : '',
            project: props.project
        };
    }
    goToExternalProject = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.location = this.props.url
    }
    render() {
        return (
            <div>
                {!this.props.projectImage && (this.props.projectImage = props.projectImage)}{/*Set defaults if no project image uploaded*/}
                <div className="masonry__brick">
                    <div className="item-folio">
                        <div className="item-folio__thumb">
                            <a
                                href={this.props.projectImage.url}
                                className="thumb-link"
                                title={this.props.title}
                                data-size={(this.props.projectImage.width) / ((this.props.projectImage.height) / (700)) + "x700"}>
                                <img src={this.props.projectImage.url} alt="" />
                                <span className="shadow-overlay" />
                            </a>
                        </div>
                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                {this.props.title}
                            </h3>
                            <p className="item-folio__cat">
                                {this.props.category}
                            </p>
                        </div>
                        <a
                            onClick={this.goToExternalProject}
                            href={this.props.url} className="item-folio__project-link" title="Project link">
                            <i className="im im-link" />
                        </a>
                        <div className="item-folio__caption">
                            <p>{this.props.description}</p>
                        </div>
                    </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
            </div>)
    }
}
// const WorkListItem = ({ id, title, category, url, createdAt, description, projectImage }) => (
//     <div>
//     {!projectImage && (projectImage = props.projectImage)}{/*Set defaults if no project image uploaded*/}
//         <div className="masonry__brick">
//             <div className="item-folio">
//                 <div className="item-folio__thumb">
//                     <a
//                         href={projectImage.url}
//                         className="thumb-link"
//                         title={title}
//                         data-size={(projectImage.width) / ((projectImage.height) / (700)) + "x700"}>
//                         <img src={projectImage.url} alt="" />
//                         <span className="shadow-overlay" />
//                     </a>
//                 </div>
//                 <div className="item-folio__text">
//                     <h3 className="item-folio__title">
//                         {title}
//                     </h3>
//                     <p className="item-folio__cat">
//                         {category}
//                     </p>
//                 </div>
//                 <a href={url} className="item-folio__project-link" title="Project link">
//                     <i className="im im-link" />
//                 </a>
//                 <div className="item-folio__caption">
//                     <p>{description}</p>
//                 </div>
//             </div> {/* end item-folio */}
//         </div> {/* end masonry__brick */}
//     </div>
// );

WorkListItem.defaultProps = {
    projectImage: {
        height: 700,
        width: 1050,
        name: "DefaultImage.png",
        url: "https://dummyimage.com/1050x700/000/fff&text=no+image"
    }
};

// export default WorkListItem;