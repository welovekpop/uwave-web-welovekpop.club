'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = require('./CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var className = _ref.className,
      size = _ref.size;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('Loader', className)
  }, void 0, (0, _jsx3.default)(_CircularProgress2.default, {
    size: size
  }));
};

Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  size: _propTypes2.default.string.isRequired
} : {};

exports.default = Loader;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
