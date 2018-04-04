import {history} from '../routers/AppRouter';
import database from '../firebase/firebase';

export const addSkill = (skill) => ({
    type: 'ADD_SKILL',
    skill
});

export const startAddSkill = (skillData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            name = '',
            percentage = ''
        } = skillData;
        const skill = {name, percentage};

        database.ref(`users/${uid}/skills`).push(skill).then((ref) => {
            dispatch(addSkill({
                id: ref.key,
                ...skill
            }));
            history.push('/skills');
        });
    };
};

export const removeSkill = ({ id } = {}) => ({
    type: 'REMOVE_SKILL',
    id
});

export const startRemoveSkill = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const skill = getState().skills.find((skill) => skill.id === id)
        console.log("startRemoveSkill state: ", skill);
        return database.ref(`users/${uid}/skills/${id}`).remove().then(() => {
            dispatch(removeSkill({ id }));
            history.push('/skills');
        });
    };
};

export const editSkill = (id, updates) => ({
    type: 'EDIT_SKILL',
    id,
    updates
});

export const startEditSkill = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/skills/${id}`).update(updates).then(() => {
            dispatch(editSkill(id, updates));
            history.push('/skills');
        });
    };
};

export const setSkills = (skills) => ({
    type: 'SET_SKILLS',
    skills
});

export const startSetSkills = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/skills`).once('value').then((snapshot) => {
            const skills = [];

            snapshot.forEach((childSnapshot) => {
                skills.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSkills(skills));
        });
    };
};

export const startSetSharedSkills = (uid) => {
    return (dispatch, getState) => {
        return database.ref(`users/${uid}/skills`).once('value').then((snapshot) => {
            const skills = [];

            snapshot.forEach((childSnapshot) => {
                skills.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSkills(skills));
        });
    };
};