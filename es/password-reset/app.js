import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { parse as parseQS } from 'querystring';
import thunk from 'redux-thunk';
import { AppContainer as HotContainer } from 'react-hot-loader';
import createLocale from '../locale';
import webApiRequest from '../store/request';
import * as reducers from './reducers';
import { setResetKey } from './actions';
import App from './containers/PasswordResetApp';

import './app.css';

var config = document.querySelector('#u-wave-config').textContent;
var key = document.querySelector('#reset-data').textContent;

var store = createStore(combineReducers(reducers), { config: config }, applyMiddleware(thunk, webApiRequest()));

var qs = parseQS(location.search.slice(1));
store.dispatch(setResetKey(key || qs.key));

createLocale('en').then(function (locale) {
  ReactDOM.render(_jsx(HotContainer, {}, void 0, _jsx(Provider, {
    store: store
  }, void 0, _jsx(App, {
    locale: locale
  }))), document.querySelector('#app'));
});
//# sourceMappingURL=app.js.map
