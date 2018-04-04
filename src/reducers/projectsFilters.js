import moment from 'moment';

const projectsFiltersReducerDefaultState = {
    text: '',
    sortBy: 'user', // category, user, date
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = projectsFiltersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PROJECTS_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_PROJECTS_BY_CATEGORY':
            return {
                ...state,
                sortBy: 'category'
            };
        case 'SORT_PROJECTS_BY_USER':
            return {
                ...state,
                sortBy: 'user'
            };
        case 'SORT_PROJECTS_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_PROJECTS_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_PROJECTS_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};