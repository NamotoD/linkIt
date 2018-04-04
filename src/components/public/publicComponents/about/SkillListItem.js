import React from 'react';
import { Link } from 'react-router-dom';


export default class WorkListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {//local state
            // id: props.project ? props.project.id : '',
            skill: props.skill
        };
    };
    render() {
        return (
            <div>
                <li>
                    <div className={"progress percent" + this.props.percentage}><span>{this.props.percentage + '%'}</span></div>
                    <strong>{this.props.name}</strong>
                </li>
            </div>)
    };
};