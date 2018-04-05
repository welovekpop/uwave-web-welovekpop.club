'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Progress = require('material-ui/Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'LoadingScreen'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  className: 'LoadingScreen-loader'
}), (0, _jsx3.default)('p', {
  className: 'LoadingScreen-notice'
}, void 0, '\xFCWave requires JavaScript to run.'));

var LoadingScreen = function LoadingScreen() {
  return _ref;
};

exports.default = LoadingScreen;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
