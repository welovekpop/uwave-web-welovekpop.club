'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUwaveStore;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxBatchedSubscribe = require('redux-batched-subscribe');

var _nanoraf = require('nanoraf');

var _nanoraf2 = _interopRequireDefault(_nanoraf);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _persistSettings = require('./persistSettings');

var _persistSettings2 = _interopRequireDefault(_persistSettings);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

var _reducers = require('../reducers');

var reducers = _interopRequireWildcard(_reducers);

var _createSourcesReducer = require('../reducers/createSourcesReducer');

var _createSourcesReducer2 = _interopRequireDefault(_createSourcesReducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setting up a store in Redux can be kind of messy because there are a lot of
// things coming together in one place. Luckily, we don't have _that_ much going
// on in üWave, so it's kind of manageable.

function createUwaveStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isTesting = process.env.NODE_ENV === 'testing';
  var enableLogging = process.env.NODE_ENV !== 'production' && !isTesting;

  var rerender = (0, _nanoraf2.default)(function (notify) {
    notify();
  }, _raf2.default);

  var middleware = [
  // Redux-Thunk allows dispatching a function to the store instead of an
  // action object. These functions can then dispatch action objects as they
  // please. It's used primarily for async actions: for example, actions that
  // send HTTP requests. Those might dispatch an action object once the
  // request finishes.
  _reduxThunk2.default,
  // This allows dispatching REQUEST_START actions to the store, which will
  // then be executed and handled as HTTP requests by the middleware.
  (0, _request2.default)(), !isTesting && (0, _socket2.default)({ url: options.socketUrl }),
  // Redux-Logger logs state changes to the console, including the
  // Before-state, the Action object, and the After-state. Invaluable for
  // debugging :)
  enableLogging && _reduxLogger2.default].filter(Boolean);

  var store = (0, _redux.createStore)(
  // Finish up the reducer function by combining all the different reducers
  // into one big reducer that works on one big state object.
  (0, _redux.combineReducers)((0, _extends3.default)({}, reducers, {
    sources: (0, _createSourcesReducer2.default)(options)
  })), initialState, (0, _redux.compose)(
  // Adds all of the above ☝ middleware features to the store.
  _redux.applyMiddleware.apply(undefined, middleware),
  // Keeps the user's settings in localStorage, so that a refresh doesn't
  // reset all your preferences.
  // This is done separately from the Middleware features, because it changes
  // the _initial_ `settings` state, something that Middleware can't do.
  _persistSettings2.default, (0, _reduxBatchedSubscribe.batchedSubscribe)(rerender)));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Update the store's reducer function when the reducer source code has
    // changed. See /tasks/watch.js for more on Hot Reloading!
    // This is only used when debugging, not in a deployed app.
    module.hot.accept('../reducers', function () {
      store.replaceReducer((0, _redux.combineReducers)((0, _extends3.default)({}, reducers, {
        sources: (0, _createSourcesReducer2.default)(options)
      })));
    });
  }

  return store;
}
//# sourceMappingURL=configureStore.js.map
//# sourceMappingURL=configureStore.js.map
