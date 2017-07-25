import React from "react";

import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from "./MainPage";


class AppEntry extends React.Component {


    render() {

        return (
            <div>
                <div>
                    <Router>
                        <div>

                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/login" render={() => <LoginPage/>} />

                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}


export default AppEntry;