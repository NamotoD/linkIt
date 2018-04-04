import React from 'react';

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {//local state
            // id: props.project ? props.project.id : '',
            name: props.skill ? props.skill.name : '',
            percentage: props.skill ? props.skill.percentage : '',
            error: ''
        };
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onPercentageChange = (e) => {
        const percentage = e.target.value;
        this.setState(() => ({ percentage }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.percentage) {
            this.setState(() => ({ error: 'Please provide name and percentage.' }));
        } else {
            this.setState(() => ({ error: '' }));
            //pass data to AddProjectPage and EditProjectPage
            this.props.onSubmit({
                // id: this.state.id,
                name: this.state.name,
                percentage: this.state.percentage
            });
        };
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <p>Name your skill and rate it between 0-100</p>
                    <label>
                        Skill Name:
                        <input
                            type="text"
                            placeholder="Name"
                            size="50"
                            maxLength="50"
                            autoFocus
                            className="text-input"
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                    </label>
                    <label>
                        Skill Percentage:
                        <input
                            type="text"
                            placeholder="0-100"
                            size="5"
                            maxLength="3"
                            className="text-input"
                            value={this.state.percentage}
                            onChange={this.onPercentageChange}
                        />
                    </label>
                    <button className="button">Add Skill</button>
                </form>
            </div>
                )
            }
}