import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectListItem = ({ id, title, category, url, createdAt, description }) => (
    <Link className="list-item" to={`/editProject/${id}`}>
        <div>
            <h3 className="list-item__title">{category}</h3>
            <span className="list-item__sub-title">{title}</span>
        </div>
        <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
    </Link>
);

export default ProjectListItem;