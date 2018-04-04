
const aboutUserReducerDefaultState = {
    aboutShort: '',
    aboutLongGreeting: '',
    aboutLong: ''
};

export default (state = aboutUserReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ABOUT_USER':
            return {
                ...state,
                ...action.aboutUser
            };
        case 'SET_ABOUT_USER':
            return {
                ...action.aboutUser
            };
        // case 'REMOVE_USER':
        //     return state.filter(({ user_id }) => user_id !== action.user_id);
        // case 'EDIT_USER':
        //     return state.map((user) => {
        //         if (user.user_id === action.user_id) {
        //             return {
        //                 ...user,
        //                 ...action.updates
        //             };
        //         } else {
        //             return user;
        //         };
        //     });
        default:
            return state;
    }
};