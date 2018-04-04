import database from '../firebase/firebase';

export const setNewProjectImage = (id, updates) => ({
    type: 'SET_NEW_PROJECT_IMAGE',
    id,
    updates
});

export const startSetNewProjectImage = (id, updates) => {
    return (dispatch, getState) => {
        console.log("Before error id:", id);
        console.log("Before error updates:", updates);
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/projects/${id}/projectImage`).update(updates).then(() => {
            dispatch(setNewProjectImage(id, updates));
            console.log('!!!!!!New image succesfully saved in database!');
            history.push('/public#works'); // if all good got back to projects
        }).catch((e) => {
            console.log('Failed attempt to save image in database!', e);
        });
    };
};