import React from "react";
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import LoginForm from "./LoginForm";

import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';


class Login extends React.Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <Link to="/login">
                <FlatButton {...this.props} label="Login"/>
            </Link>
        );
    }
}

class Logged extends React.Component {


    render() {

        // Logged.muiName = 'IconMenu';

        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><MoreVertIcon/></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help"/>
                <MenuItem primaryText="Sign out"/>
            </IconMenu>

        );
    }
}


class Base extends React.Component {
    state = {
        logged: false,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                {/*<Toggle*/}
                {/*label="Logged"*/}
                {/*defaultToggled={true}*/}
                {/*onToggle={this.handleChange}*/}
                {/*labelPosition="right"*/}
                {/*style={{margin: 20}}*/}
                {/*/>*/}
                <AppBar
                    title="perceval"
                    // iconElementLeft={<IconButton>< /></IconButton>}
                    iconElementRight={this.state.logged ? <Logged/> : <Login/>}
                />
            </div>
        );
    }
}

export default Base;