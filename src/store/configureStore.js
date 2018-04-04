import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import avatarReducer from '../reducers/avatar';
import curriculumVitaeReducer from '../reducers/curriculumVitae';
import aboutUserReducer from '../reducers/about';
import portfolioReducer from '../reducers/portfolio';
import projectsReducer from '../reducers/projects';
import skillsReducer from '../reducers/skills';
import projectImageReducer from '../reducers/projectImage';
import usersReducer from '../reducers/users';
import imagesReducer from '../reducers/images';
//import portfoliosFiltersReducer from '../reducers/portfoliosFilters';
import projectsFiltersReducer from '../reducers/projectsFilters';
import previousLocationReducer from '../reducers/previousLocation';
import coverImageReducer from '../reducers/coverImage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const appReducer = combineReducers({
        auth: authReducer,
        portfolio: portfolioReducer,
        users: usersReducer,
        projects: projectsReducer,
        skills: skillsReducer,
        projectImage: projectImageReducer,
        images: imagesReducer,
        avatar: avatarReducer,
        aboutUser: aboutUserReducer,
        curriculumVitae: curriculumVitaeReducer,
        //portfoliosFilters: portfoliosFiltersReducer,
        projectsFilters: projectsFiltersReducer,
        previousLocation: previousLocationReducer,
        coverImage: coverImageReducer
    });
    const rootReducer = (state, action) => {
        if (action.type === 'LOGOUT') { // re-initialise the state for next user!! By Abra
            state = undefined
        };
        return appReducer(state, action)
    }

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};