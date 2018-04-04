const projectImageReducerDefaultState = [];

export default (state = projectImageReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NEW_PROJECT_IMAGE':
            return {
                ...action.updates
    };
        // case 'SET_AVATAR':
        //     return {
        //         ...action.avatar
        //     };
        default:
            return state;
    }
};