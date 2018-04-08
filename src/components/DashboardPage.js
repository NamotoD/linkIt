import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import Avatar from './profile/Avatar';

const DashboardPage = () => (
        <div>
            <Link to={`/profile`}>
                <Avatar subtitle = "Profile"/>
            </Link>
            <MainMenu />
        </div>
);

export default DashboardPage;