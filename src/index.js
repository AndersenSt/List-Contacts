import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import reducer from './reducers';
import initialState from './initialState';
import App from './components/App';
import HomePage from './components/HomePage';
import FormContact from './components/FormContact';

const store = createStore(reducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path='/' component={HomePage} />
                <Route path='/add-contact' type='add' component={FormContact} />
                <Route path='/edit-contact/:id' type='edit' component={FormContact} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('root'));