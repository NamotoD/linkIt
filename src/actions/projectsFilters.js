
export const setProjectsTextFilter = (text = '') => ({
    type: 'SET_PROJECTS_TEXT_FILTER',
    text
});

export const sortProjectsByCategory = () => ({
    type: 'SORT_PROJECTS_BY_CATEGORY'
});

export const sortProjectsByUser = () => ({
    type: 'SORT_PROJECTS_BY_USER'
});

export const sortProjectsByDate = () => ({
    type: 'SORT_PROJECTS_BY_DATE'
});

export const setProjectsStartDate = (startDate) => ({
    type: 'SET_PROJECTS_START_DATE',
    startDate
});

export const setProjectsEndDate = (endDate) => ({
    type: 'SET_PROJECTS_END_DATE',
    endDate
});