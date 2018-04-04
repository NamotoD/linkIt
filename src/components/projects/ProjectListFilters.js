import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setProjectsTextFilter, sortProjectsByCategory, sortProjectsByDate, setProjectsStartDate, setProjectsEndDate } from '../../actions/projectsFilters';

class ProjectListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setProjectsStartDate(startDate));
        this.props.dispatch(setProjectsEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            placeholder="Filter projects..."
                            type="text"
                            value={this.props.filters.text}
                            onChange={(e) => { // read value from the store
                                this.props.dispatch(setProjectsTextFilter(e.target.value)); // save new input value in the store
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.sortBy}
                            onChange={(e) => { // read value from the store
                                if (e.target.value === "date") {
                                    this.props.dispatch(sortProjectsByDate()); // save new input value in the store
                                } else {
                                    this.props.dispatch(sortProjectsByCategory()); // save new input value in the store

                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.projectsFilters
    };
};

export default connect(mapStateToProps)(ProjectListFilters);