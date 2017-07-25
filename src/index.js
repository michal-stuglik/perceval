import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux'
import "babel-polyfill";
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
