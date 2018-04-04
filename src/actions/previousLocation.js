import database from '../firebase/firebase';

export const setPreviousLocation = (updates) => ({
    type: 'SET_PREVIOUS_LOCAITON',
    updates
});

export const startSetPreviousLocation = (updates) => {
    return (dispatch, getState) => {
        console.log("in startSetPreviousLocation", getState().previousLocation.updates);
        // return database.ref(`users/${uid}/profile/avatar`).update(updates).then(() => {
            dispatch(setPreviousLocation(updates));
        //     console.log('!!!!!!New avatar image succesfully saved in database!');
        // }).catch((e) => {
        //     console.log('Failed attempt to save avatar image in database!', e);
        // });
    };
};

// export const setAvatar = (avatar) => ({
//     type: 'SET_AVATAR',
//     avatar
// });

// export const startSetAvatar = () => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         return database.ref(`users/${uid}/profile/avatar`).once('value').then((snapshot) => {
//             const avatar = snapshot.val();
//             dispatch(setAvatar(avatar));
//         });
//     };
// };