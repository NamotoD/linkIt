import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {//local state
            // id: props.project ? props.project.id : '',
            title: props.project ? props.project.title : '',
            category: props.project ? props.project.category : '',
            url: props.project ? props.project.url : '',
            description: props.project ? props.project.description : '',
            createdAt: props.project ? moment(props.project.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };
    onUrlChange = (e) => {
        const url = e.target.value;
        this.setState(() => ({ url }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.category) {
            this.setState(() => ({ error: 'Please provide description and category.' }));
        } else {
            this.setState(() => ({ error: '' }));
            //pass data to AddProjectPage and EditProjectPage
            this.props.onSubmit({
                // id: this.state.id,
                title: this.state.title,
                category: this.state.category,
                url: this.state.url,
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <label>
                        Project Title:
                        <input
                            type="text"
                            placeholder="Title"
                            size="100"
                            maxLength="100"
                            autoFocus
                            className="text-input"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </label>
                    <label>
                        Project Category:
                        <input
                            type="text"
                            placeholder="Category"
                            size="100"
                            maxLength="100"
                            className="text-input"
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                        />
                    </label>
                    <label>
                        Project Live Url:
                        <input
                            type="text"
                            placeholder="Url"
                            className="text-input"
                            size="100"
                            maxLength="100"
                            value={this.state.url}
                            onChange={this.onUrlChange}
                        />
                    </label>
                    <label>
                        Project Creation Date:
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </label>
                    <label>
                        Project Description:
                        <textarea
                            placeholder="Description"
                            className="textarea"
                            size="500"
                            maxLength="500"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        >
                        </textarea>
                    </label>
                    <button className="button">Add Project</button>
                </form>
            </div>
                )
            }
}