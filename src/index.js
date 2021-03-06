import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import middleware from './middleware';
import reducer from './reducers';
import App from './components/App';
import HomePage from './components/HomePage';
import FormContactContainer from './containers/FormContactContainer';

const store = middleware(createStore)(reducer);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path='/' component={HomePage} />
                <Route path='/add-contact' type='add' component={FormContactContainer} />
                <Route path='/edit-contact/:id' type='edit' component={FormContactContainer} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('root'));