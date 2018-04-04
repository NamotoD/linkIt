import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'; // reset styles
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetProjects, startSetSharedProjects } from './actions/projects';
import { startSetSkills, startSetSharedSkills } from './actions/skills';
import { startSetAvatar, startSetSharedAvatar } from './actions/avatar';
import { startSetCoverImage} from './actions/coverImage';
import { startSetUser, startGetUsers } from './actions/users';
import { startSetAboutUser } from './actions/about';
import { startSetCurriculumVitae } from './actions/curriculumVitae';
import { startSetPortfolio, startSetSharedPortfolio } from './actions/portfolio';
import { setProjectsTextFilter, sortProjectsByCategory, sortProjectsByDate } from './actions/projectsFilters';
import getVisibleProjects from './selectors/projects';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }

};
// ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetAvatar()).then(() => {
        });
        store.dispatch(startSetCoverImage()).then(() => {
        });
        store.dispatch(startSetUser()).then(() => {
        });
        store.dispatch(startSetAboutUser()).then(() => {
        });
        store.dispatch(startSetCurriculumVitae()).then(() => {
        });
        store.dispatch(startSetPortfolio()).then(() => {
        });
        store.dispatch(startSetSkills()).then(() => {
        });
        store.dispatch(startSetProjects()).then(() => {
            renderApp();
            const firstElement = history.location.pathname.split('/')[1];
            if (history.location.pathname === '/' || history.location.pathname === '/public' || firstElement === 'share') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        const pathElements = history.location.pathname.split('/');
        const userName = pathElements[pathElements.length - 1]; // last one

        store.dispatch(startGetUsers()).then(() => {
            const users = store.getState().users;
            let count = 0;
            let found = false;
            for (let user in users) {
                if(users[user].profile) {
                    const fullName = users[user].profile.firstName + users[user].profile.lastName;
                    if (fullName.toLowerCase() === userName.toLowerCase()) {
                        found = true;
                        const uid = Object.keys(users)[count];
                        store.dispatch(startSetSharedPortfolio(uid)).then(() => {
                        });
                        store.dispatch(startSetSharedSkills(uid)).then(() => {
                        });
                        store.dispatch(startSetSharedProjects(uid)).then(() => {
                            renderApp();
                            history.push(`/share/${fullName}`);
                        });
                    }
                    count++;
                };
            };
            if (!found) {
                renderApp();
                history.push('/');
            };

            // if (uid in users) {
            //     const user = users[uid];
            //     const fullName = user.profile.firstName + user.profile.lastName
            //     console.log("USER: ", fullName)
            //     store.dispatch(startSetSharedPortfolio(uid)).then(() => {
            //     });
            //     store.dispatch(startSetSharedProjects(uid)).then(() => {
            //         renderApp();
            //         history.push(`/share/${fullName}`);
            //     });
            // }
            // else {
            //     renderApp();
            //     history.push('/');
            // }
        });
    };
});