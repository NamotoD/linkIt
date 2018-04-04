const curriculumVitaeReducerDefaultState = {
    name: 'jsa-128.jpg',
    url: '../images/loader.gif'
};

export default (state = curriculumVitaeReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NEW_CURRICULUM_VITAE':
            return {
                ...state,
                ...action.updates
            };
        case 'SET_CURRICULUM_VITAE':
            return {
                ...action.curriculumVitae
            };
        default:
            return state;
    }
};