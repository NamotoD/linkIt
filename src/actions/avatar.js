import database from '../firebase/firebase';

export const setNewAvatar = (updates) => ({
    type: 'SET_NEW_AVATAR',
    updates
});

export const startSetNewAvatar = (updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile/avatar`).update(updates).then(() => {
            dispatch(setNewAvatar(updates));
            console.log('!!!!!!New avatar image succesfully saved in database!');
        }).catch((e) => {
            console.log('Failed attempt to save avatar image in database!', e);
        });
    };
};

export const setAvatar = (avatar) => ({
    type: 'SET_AVATAR',
    avatar
});

export const startSetAvatar = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile/avatar`).once('value').then((snapshot) => {
            const avatar = snapshot.val();
            dispatch(setAvatar(avatar));
        });
    };
};

export const startSetSharedAvatar = (uid) => {
    return (dispatch, getState) => {
        return database.ref(`users/${uid}/profile/avatar`).once('value').then((snapshot) => {
            const avatar = snapshot.val();
            dispatch(setAvatar(avatar));
        });
    };
};