import 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import AppContainer from './components/App/Container';
import * as Socket from './utils/Socket';
import { get as readSession } from './utils/Session';
import { initState, setJWT } from './actions/LoginActionCreators';
import { startTicking } from './actions/TickerActionCreators';

import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger({
    // avoid log spam
    predicate: (getState, action) => action.type !== 'tick'
  })
)(createStore);
const store = createStoreWithMiddleware(
  combineReducers(reducers)
);

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers/index').default);
  });
}

const jwt = readSession();
if (jwt) {
  store.dispatch(setJWT(jwt));
}

// Material-UI dependency
require('react-tap-event-plugin')();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

store.dispatch(initState());
store.dispatch(startTicking());

Socket.connect(store);

window.debug = require('debug');
