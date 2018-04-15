"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUwaveStore;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxBatchedSubscribe = require("redux-batched-subscribe");

var _nanoraf = _interopRequireDefault(require("nanoraf"));

var _raf = _interopRequireDefault(require("raf"));

var _persistSettings = _interopRequireDefault(require("./persistSettings"));

var _request = _interopRequireDefault(require("./request"));

var _socket = _interopRequireDefault(require("./socket"));

var reducers = _interopRequireWildcard(require("../reducers"));

var _createSourcesReducer = _interopRequireDefault(require("../reducers/createSourcesReducer"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setting up a store in Redux can be kind of messy because there are a lot of
// things coming together in one place. Luckily, we don't have _that_ much going
// on in üWave, so it's kind of manageable.
function createUwaveStore(initialState, options) {
  if (initialState === void 0) {
    initialState = {};
  }

  if (options === void 0) {
    options = {};
  }

  var isTesting = process.env.NODE_ENV === 'testing';
  var enableLogging = process.env.NODE_ENV !== 'production' && !isTesting;
  var rerender = (0, _nanoraf.default)(function (notify) {
    notify();
  }, _raf.default);
  var middleware = [// Redux-Thunk allows dispatching a function to the store instead of an
  // action object. These functions can then dispatch action objects as they
  // please. It's used primarily for async actions: for example, actions that
  // send HTTP requests. Those might dispatch an action object once the
  // request finishes.
  _reduxThunk.default, // This allows dispatching REQUEST_START actions to the store, which will
  // then be executed and handled as HTTP requests by the middleware.
  (0, _request.default)(), !isTesting && (0, _socket.default)({
    url: options.socketUrl
  }), // Redux-Logger logs state changes to the console, including the
  // Before-state, the Action object, and the After-state. Invaluable for
  // debugging :)
  enableLogging && _reduxLogger.default].filter(Boolean);
  var currentReducers = (0, _objectSpread3.default)({}, reducers, {
    sources: (0, _createSourcesReducer.default)(options)
  });
  var store = (0, _redux.createStore)( // Finish up the reducer function by combining all the different reducers
  // into one big reducer that works on one big state object.
  (0, _redux.combineReducers)(currentReducers), initialState, (0, _redux.compose)( // Adds all of the above ☝ middleware features to the store.
  _redux.applyMiddleware.apply(void 0, middleware), // Keeps the user's settings in localStorage, so that a refresh doesn't
  // reset all your preferences.
  // This is done separately from the Middleware features, because it changes
  // the _initial_ `settings` state, something that Middleware can't do.
  _persistSettings.default, (0, _reduxBatchedSubscribe.batchedSubscribe)(rerender)));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Update the store's reducer function when the reducer source code has
    // changed. See /tasks/watch.js for more on Hot Reloading!
    // This is only used when debugging, not in a deployed app.
    module.hot.accept('../reducers', function () {
      store.replaceReducer((0, _redux.combineReducers)((0, _objectSpread3.default)({}, reducers, {
        sources: (0, _createSourcesReducer.default)(options)
      })));
    });
  }

  store.mount = function (name, reducer) {
    var _objectSpread2;

    currentReducers = (0, _objectSpread3.default)({}, currentReducers, (_objectSpread2 = {}, _objectSpread2[name] = reducer, _objectSpread2));
    store.replaceReducer((0, _redux.combineReducers)(currentReducers));
  };

  return store;
} //# sourceMappingURL=configureStore.js.map
//# sourceMappingURL=configureStore.js.map
