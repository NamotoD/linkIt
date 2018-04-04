import database from '../firebase/firebase';

export const addUserInfo = (user) => ({
    type: 'ADD_USER_INFO',
    user
});

export const startAddUserInfo = (userInfo = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            greeting = '',
            firstName = '',
            lastName = '',
            occupation = '',
            location = '',
            phoneNumber = '',
            mobileNumber = '',
            faxNumber = '',
            emailPrimary = '',
            emailSecondary = '',
            addressLine1 = '',
            addressLine2 = '',
            addressLine3 = '',
            facebook = '',
            twitter = '',
            instagram = '',
            behance = '',
            pinterest = '',
            linkedIn = '',
            stackOverflow = '',
            gitHub = '',
            flickr = '',
            tumblr = '',
            vimeo = '',
            reddit = '',
            youTube = '',
            soundCloud = '',
            blogger = '',
            googlePlay = ''
        } = userInfo;
        const user = {greeting, firstName, lastName, occupation, location, phoneNumber, mobileNumber, faxNumber, emailPrimary, emailSecondary, addressLine1, addressLine2, addressLine3, facebook, twitter, instagram, behance, pinterest, linkedIn, stackOverflow, gitHub, flickr, tumblr, vimeo, reddit, youTube, soundCloud, blogger, googlePlay};

        database.ref(`users/${uid}/profile`).update(user).then(() => {
            dispatch(addUserInfo({...user}));
        });
    };
};

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const startSetUser = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile`).once('value').then((snapshot) => {
            const user = snapshot.val();
            dispatch(setUser(user));
        });
    };
};

export const getUsers = (users) => ({
    type: 'GET_USERS',
    users
});

export const startGetUsers = () => {
    return (dispatch, getState) => {
        return database.ref(`users`).once('value').then((snapshot) => {
            const users = snapshot.val();
            dispatch(getUsers(users));
        });
    };
};

// export const removeUser = ({ user_id } = {}) => ({
//     type: 'REMOVE_USER',
//     user_id
// });

// export const editUser = (user_id, updates) => ({
//     type: 'EDIT_USER',
//     user_id,
//     updates
// });