const avatarReducerDefaultState = {
    name: 'jsa-128.jpg',
    url: '../images/loader.gif'
};

export default (state = avatarReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NEW_AVATAR':
            return {
                ...state,
                ...action.updates
            };
        case 'SET_AVATAR':
            return {
                ...action.avatar
            };
        default:
            return state;
    }
};