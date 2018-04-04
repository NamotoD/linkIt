export const setPortfoliosTextFilter = (text = '') => ({
    type: 'SET_PORTFOLIOS_TEXT_FILTER',
    text
});

export const sortPortfoliosByCategory = () => ({
    type: 'SORT_PORTFOLIOS_BY_CATEGORY'
});

export const sortPortfoliosByUser = () => ({
    type: 'SORT_PORTFOLIOS_BY_USER'
});

export const sortPortfoliosByDate = () => ({
    type: 'SORT_PORTFOLIOS_BY_DATE'
});

export const SetPortfoliosStartDate = (startDate) => ({
    type: 'SET_PORTFOLIOS_START_DATE',
    startDate
});

export const SetPortfoliosEndDate = (endDate) => ({
    type: 'SET_PORTFOLIOS_END_DATE',
    endDate
});