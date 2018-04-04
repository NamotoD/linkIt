import database from '../firebase/firebase';

export const addAboutUserInfo = (aboutUser) => ({
    type: 'ADD_ABOUT_USER',
    aboutUser
});

export const startAddAboutUserInfo = (aboutUserInfo = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            aboutShort = '',
            aboutLongGreeting = '',
            aboutLong = ''
        } = aboutUserInfo;
        const aboutUser = {aboutShort, aboutLongGreeting, aboutLong};

        database.ref(`users/${uid}/about`).update(aboutUser).then(() => {
            dispatch(addAboutUserInfo({...aboutUser}));
        });
    };
};

export const setAboutUser = (aboutUser) => ({
    type: 'SET_ABOUT_USER',
    aboutUser
});

export const startSetAboutUser = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/about`).once('value').then((snapshot) => {
            const aboutUser = snapshot.val();
            dispatch(setAboutUser(aboutUser));
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