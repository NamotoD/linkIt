import React from 'react';

const lengthMax500 = new RegExp("^.{0,500}$");

export default class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {//local state
            portfolioDescription: props.portfolio ? props.portfolio.portfolioDescription : '',
            error: ''
        };
    };
    onPortfolioDescriptionChange = (e) => {
        const portfolioDescription = e.target.value;
        if (portfolioDescription.match(lengthMax500)) {
            this.setState(() => ({ portfolioDescription }));
        };
    };
    onSubmit = (e) => {
        e.preventDefault();

        // if (!this.state.firstName || !this.state.lastName || !this.state.occupation || !this.state.location) {
        //     this.setState(() => ({ error: 'Please provide First Name, Last Name, your current occupation and location.' }));
        // } else {
        this.setState(() => ({ error: '' }));
        //pass data to DashboardPage
        this.props.onSubmit({
            portfolioDescription: this.state.portfolioDescription || null
        });
        // };
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <p>Add a description of your portfolio in less then 500 characters. 
                Press Save Changes when your done.</p>
                    <label>
                        Portfolio Description:
                    <textarea
                            placeholder="Describe your Portfolio"
                            size="500"
                            maxLength="500"
                            autoFocus
                            className="textarea"
                            value={this.state.portfolioDescription || ""}
                            onChange={this.onPortfolioDescriptionChange}
                        />
                    </label>
                    <button className="button">Save Changes</button>
                </form>
            </div>
        )
    }
}