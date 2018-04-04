import {history} from '../routers/AppRouter';
import database, { storage } from '../firebase/firebase';
import {deleteFileFromStorage} from '../utils/firebase';

export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    project
});

export const startAddProject = (projectData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            category = '',
            url = '',
            createdAt = 0,
            description = '',
            projectImage = {}
        } = projectData;
        const project = {title, category, url, createdAt, description, projectImage};

        database.ref(`users/${uid}/projects`).push(project).then((ref) => {
            dispatch(addProject({
                id: ref.key,
                ...project
            }));
            history.push('/addProjectImage');
        });
    };
};

export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const startRemoveProject = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const project = getState().projects.find((project) => project.id === id)
        console.log("startRemoveProject state: ", project);
        // const ProjectImageNameToRemove = getState().projects.id.projectImage.name;
        return database.ref(`users/${uid}/projects/${id}`).remove().then(() => {
            dispatch(removeProject({ id }));
            deleteFileFromStorage(`users/${uid}/projects/${id}/projectImage/` + project.projectImage.name);
            history.push('/projects');
        });
    };
};

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

export const startEditProject = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/projects/${id}`).update(updates).then(() => {
            dispatch(editProject(id, updates));
            history.push('/projects');
        });
    };
};

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const startSetProjects = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/projects`).once('value').then((snapshot) => {
            const projects = [];

            snapshot.forEach((childSnapshot) => {
                projects.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setProjects(projects));
        });
    };
};

export const startSetSharedProjects = (uid) => {
    return (dispatch, getState) => {
        return database.ref(`users/${uid}/projects`).once('value').then((snapshot) => {
            const projects = [];

            snapshot.forEach((childSnapshot) => {
                projects.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setProjects(projects));
        });
    };
};