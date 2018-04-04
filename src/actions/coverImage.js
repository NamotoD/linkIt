import database from '../firebase/firebase';

export const setNewCoverImage = (updates) => ({
    type: 'SET_NEW_COVER_IMAGE',
    updates
});

export const startSetNewCoverImage = (updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile/coverImage`).update(updates).then(() => {
            dispatch(setNewCoverImage(updates));
            console.log('!!!!!!New cover image succesfully saved in database!');
        }).catch((e) => {
            console.log('Failed attempt to save cover image in database!', e);
        });
    };
};

export const setCoverImage = (coverImage) => ({
    type: 'SET_COVER_IMAGE',
    coverImage
});

export const startSetCoverImage = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile/coverImage`).once('value').then((snapshot) => {
            const coverImage = snapshot.val();
            dispatch(setCoverImage(coverImage));
        });
    };
};

// export const startSetSharedAvatar = (uid) => {
//     return (dispatch, getState) => {
//         return database.ref(`users/${uid}/profile/avatar`).once('value').then((snapshot) => {
//             const avatar = snapshot.val();
//             dispatch(setAvatar(avatar));
//         });
//     };
// };