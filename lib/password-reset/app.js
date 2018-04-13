"use strict";

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _querystring = require("querystring");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reactHotLoader = require("react-hot-loader");

var _locale = _interopRequireDefault(require("../locale"));

var _request = _interopRequireDefault(require("../store/request"));

var reducers = _interopRequireWildcard(require("./reducers"));

var _actions = require("./actions");

var _PasswordResetApp = _interopRequireDefault(require("./containers/PasswordResetApp"));

require("./app.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = document.querySelector('#u-wave-config').textContent;
var key = document.querySelector('#reset-data').textContent;
var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers), {
  config: config
}, (0, _redux.applyMiddleware)(_reduxThunk.default, (0, _request.default)()));
var qs = (0, _querystring.parse)(window.location.search.slice(1));
store.dispatch((0, _actions.setResetKey)(key || qs.key));
(0, _locale.default)('en').then(function (locale) {
  _reactDom.default.render((0, _jsx2.default)(_reactHotLoader.AppContainer, {}, void 0, (0, _jsx2.default)(_reactRedux.Provider, {
    store: store
  }, void 0, (0, _jsx2.default)(_PasswordResetApp.default, {
    locale: locale
  }))), document.querySelector('#app'));
}); //# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
