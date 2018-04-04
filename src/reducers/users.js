
const usersReducerDefaultState = {
    greeting: '',
    firstName: '',
    lastName: '',
    occupation: '',
    location: '',
    phoneNumber: '',
    mobileNumber: '',
    faxNumber: '',
    emailPrimary: '',
    emailSecondary: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    facebook: '',
    twitter: '',
    instagram: '',
    behance: '',
    pinterest: '',
    linkedIn: '',
    stackOverflow: '',
    gitHub: '',
    flickr: '',
    tumblr: '',
    vimeo: '',
    reddit: '',
    youTube: '',
    soundCloud: '',
    googlePlay: '',
    blogger: ''
};

export default (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER_INFO':
            return {
                ...state,
                ...action.user
            };
        case 'SET_USER':
            return {
                ...action.user
            };
        case 'GET_USERS':
            return {
                ...action.users
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