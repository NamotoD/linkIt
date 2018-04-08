import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
    paper: {
        // display: 'inline-block',
        // float: 'left',
        margin: '0',
        // paddingRight: '100px',
        height: '100vh'
    }
};

const MainMenu = () => (
    <div>
        <Divider />
        <Paper style={style.paper}>
            <Menu>
                <Link to={`/public`}>
                    <MenuItem primaryText="View Your Portfolio" />
                </Link>
                <Link to={`/about`}>
                    <MenuItem primaryText="About" />
                </Link>
                <Link to={`/coverImage`}>
                    <MenuItem primaryText="Cover Image" />
                </Link>
                <Link to={`/projects`}>
                    <MenuItem primaryText="Projects" />
                </Link>
                <Link to={`/skills`}>
                    <MenuItem primaryText="Skills" />
                </Link>
                <Link to={`#`}>
                    <MenuItem primaryText="Experience(Coming soon..)" />
                </Link>
                <Link to={`#`}>
                    <MenuItem primaryText="Testimonials(Coming soon..)" />
                </Link>
                <Link to={`#`}>
                    <MenuItem primaryText="Stats(Coming soon..)" />
                </Link>
                <MenuItem/>
            </Menu>
        </Paper>
    </div>
);

export default MainMenu;