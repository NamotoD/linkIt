import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader } from 'material-ui/Card';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const userAvatar = (props) => (
    <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Card>
                {/*!props.avatar.url && <span>Provide profile details in Profile section</span>*/}
                <CardHeader
                    title={props.user.firstName + ' ' + props.user.lastName}
                    subtitle={props.user.location}// subtitle={props.subtitle}
                    avatar={props.avatar.url || "/publicPage/images/avatars/anonymous.png"}
                />
            </Card>
        </MuiThemeProvider>
    </div>
);

const mapStateToProps = (state, props) => ({
    avatar: state.avatar,
    user: state.users
});

export default connect(mapStateToProps)(userAvatar);