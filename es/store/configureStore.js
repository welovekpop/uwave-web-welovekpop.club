import _extends from 'babel-runtime/helpers/extends';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { batchedSubscribe } from 'redux-batched-subscribe';
import nanoraf from 'nanoraf';
import raf from 'raf';
import persistSettings from './persistSettings';
import webApiRequest from './request';
import webApiSocket from './socket';
import * as reducers from '../reducers';
import createSourcesReducer from '../reducers/createSourcesReducer';

// Setting up a store in Redux can be kind of messy because there are a lot of
// things coming together in one place. Luckily, we don't have _that_ much going
// on in üWave, so it's kind of manageable.

export default function createUwaveStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isTesting = process.env.NODE_ENV === 'testing';
  var enableLogging = process.env.NODE_ENV !== 'production' && !isTesting;

  var rerender = nanoraf(function (notify) {
    notify();
  }, raf);

  var middleware = [
  // Redux-Thunk allows dispatching a function to the store instead of an
  // action object. These functions can then dispatch action objects as they
  // please. It's used primarily for async actions: for example, actions that
  // send HTTP requests. Those might dispatch an action object once the
  // request finishes.
  thunk,
  // This allows dispatching REQUEST_START actions to the store, which will
  // then be executed and handled as HTTP requests by the middleware.
  webApiRequest(), !isTesting && webApiSocket({ url: options.socketUrl }),
  // Redux-Logger logs state changes to the console, including the
  // Before-state, the Action object, and the After-state. Invaluable for
  // debugging :)
  enableLogging && logger].filter(Boolean);

  var store = createStore(
  // Finish up the reducer function by combining all the different reducers
  // into one big reducer that works on one big state object.
  combineReducers(_extends({}, reducers, {
    sources: createSourcesReducer(options)
  })), initialState, compose(
  // Adds all of the above ☝ middleware features to the store.
  applyMiddleware.apply(undefined, middleware),
  // Keeps the user's settings in localStorage, so that a refresh doesn't
  // reset all your preferences.
  // This is done separately from the Middleware features, because it changes
  // the _initial_ `settings` state, something that Middleware can't do.
  persistSettings, batchedSubscribe(rerender)));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Update the store's reducer function when the reducer source code has
    // changed. See /tasks/watch.js for more on Hot Reloading!
    // This is only used when debugging, not in a deployed app.
    module.hot.accept('../reducers', function () {
      store.replaceReducer(combineReducers(_extends({}, reducers, {
        sources: createSourcesReducer(options)
      })));
    });
  }

  return store;
}
//# sourceMappingURL=configureStore.js.map
