import React from "react";

import {
    HashRouter as Router,
    Route,
    // Link,
    // Redirect,
    // Switch
} from 'react-router-dom';

import LoginPage from '../containers/LoginPage';
import MainPage from "./MainPage";
import Base from "./Base";

class AppEntry extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Base/>
                    </div>
                    <div>
                        <Route exact path="/" render={() => <MainPage/>}/>
                        <Route exact path="/login" render={() => <LoginPage/>}/>
                    </div>
                </div>
            </Router>
        );
    }
}


export default AppEntry;