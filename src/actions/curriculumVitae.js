import database from '../firebase/firebase';

export const setNewCurriculumVitae = (updates) => ({
    type: 'SET_NEW_CURRICULUM_VITAE',
    updates
});

export const startSetNewCurriculumVitae = (updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/about/curriculumVitae`).update(updates).then(() => {
            dispatch(setNewCurriculumVitae(updates));
            console.log('!!!!!!New cv file succesfully saved in database!');
        }).catch((e) => {
            console.log('Failed attempt to save cv in database!', e);
        });
    };
};

export const setCurriculumVitae = (curriculumVitae) => ({
    type: 'SET_CURRICULUM_VITAE',
    curriculumVitae
});

export const startSetCurriculumVitae = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/about/curriculumVitae`).once('value').then((snapshot) => {
            const curriculumVitae = snapshot.val();
            dispatch(setCurriculumVitae(curriculumVitae));
        });
    };
};