
const portfolioReducerDefaultState = {
    portfolioDescription: ''
};

export default (state = portfolioReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PORTFOLIO':
            return {
                ...state,
                ...action.portfolio
            };
        case 'SET_PORTFOLIO':
            return {
                ...action.portfolio
            };
        default:
            return state;
    }
};