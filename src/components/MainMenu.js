import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
// import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
    paper: {
        // display: 'inline-block',
        // float: 'left',
        margin: '0',
        paddingRight: '100px'
    },
    rightIcon: {
        //textAlign: 'center',
        //lineHeight: '24px',
    },
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
            </Menu>
        </Paper>
    </div>
);

export default MainMenu;