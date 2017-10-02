'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _querystring = require('querystring');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactHotLoader = require('react-hot-loader');

var _locale = require('../locale');

var _locale2 = _interopRequireDefault(_locale);

var _request = require('../store/request');

var _request2 = _interopRequireDefault(_request);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

var _actions = require('./actions');

var _PasswordResetApp = require('./containers/PasswordResetApp');

var _PasswordResetApp2 = _interopRequireDefault(_PasswordResetApp);

require('./app.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = document.querySelector('#u-wave-config').textContent;
var key = document.querySelector('#reset-data').textContent;

var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers), { config: config }, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _request2.default)()));

var qs = (0, _querystring.parse)(location.search.slice(1));
store.dispatch((0, _actions.setResetKey)(key || qs.key));

(0, _locale2.default)('en').then(function (locale) {
  _reactDom2.default.render((0, _jsx3.default)(_reactHotLoader.AppContainer, {}, void 0, (0, _jsx3.default)(_reactRedux.Provider, {
    store: store
  }, void 0, (0, _jsx3.default)(_PasswordResetApp2.default, {
    locale: locale
  }))), document.querySelector('#app'));
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
