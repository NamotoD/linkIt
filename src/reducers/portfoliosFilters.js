
const portfoliosFiltersReducerDefaultState = {
    text: '',
    sortBy: 'user', // category, user, date
    startDate: undefined,
    endDate: undefined
};

export default (state = portfoliosFiltersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PORTFOLIOS_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_PORTFOLIOS_BY_CATEGORY':
            return {
                ...state,
                sortBy: 'category'
            };
        case 'SORT_PORTFOLIOS_BY_USER':
            return {
                ...state,
                sortBy: 'user'
            };
        case 'SORT_PORTFOLIOS_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_PORTFOLIOS_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_PORTFOLIOS_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};