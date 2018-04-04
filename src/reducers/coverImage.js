const coverImageReducerDefaultState = {
    name: 'jsa-128.jpg',
    url: '../images/loader.gif'
};

export default (state = coverImageReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NEW_COVER_IMAGE':
            return {
                ...state,
                ...action.updates
            };
        case 'SET_COVER_IMAGE':
            return {
                ...action.coverImage
            };
        default:
            return state;
    }
};