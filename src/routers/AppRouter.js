
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../components/profile/Profile';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
// import Testimonials from '../components/testimonials/Testimonials';
import Stats from '../components/stats/Stats';
import Experience from '../components/experience/Experience';
import AddProjectPage from '../components/projects/AddProjectPage';
import AddSkillPage from '../components/skills/AddSkillPage';
import EditProjectPage from '../components/projects/EditProjectPage';
import EditSkillPage from '../components/skills/EditSkillPage';
import AddProjectImagePage from '../components/projects/AddProjectImagePage';
import CoverImagePage from '../components/pageSettings/CoverImage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Public from '../components/public/Public';
import Share from '../components/public/Share';
import Blog from '../components/public/Blog';
import BlogSingle from '../components/public/BlogSingle';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <Route path="/public" component={Public} />
                <Route path="/share/:userId" component={Share} />
                <PrivateRoute path="/blog" component={Blog} />
                <PrivateRoute path="/blogSingle" component={BlogSingle} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/about" component={About} />
                <PrivateRoute path="/projects" component={Projects} />
                <PrivateRoute path="/skills" component={Skills} />
                <PrivateRoute path="/experience" component={Experience} />
                {/*<PrivateRoute path="/testimonials" component={Testimonials} />*/}
                <PrivateRoute path="/stats" component={Stats} />
                <PrivateRoute path="/createProject" component={AddProjectPage} />
                <PrivateRoute path="/createSkill" component={AddSkillPage} />
                <PrivateRoute path="/addProjectImage" component={AddProjectImagePage} />
                <PrivateRoute path="/coverImage" component={CoverImagePage} />
                <PrivateRoute path="/editProject/:id" component={EditProjectPage} />
                <PrivateRoute path="/editSkill/:id" component={EditSkillPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;