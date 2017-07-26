import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import "babel-polyfill";
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import './index.css';


const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
