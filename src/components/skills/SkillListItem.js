import React from 'react';
import { Link } from 'react-router-dom';

const SkillListItem = ({ id, name, percentage}) => (
    <div className="content-container">
        <Link to={`/editSkill/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p>{percentage}</p>
    </div>
);

export default SkillListItem;