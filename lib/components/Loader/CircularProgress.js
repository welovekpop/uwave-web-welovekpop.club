'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THICKNESS = {
  large: 3.6,
  tiny: 10
};
/**
 * The CircularProgress component from material-ui v1.0. We use this one instead
 * of the one from v0.x, because this one is CSS-only!
 *
 * Adapted from:
 * https://github.com/callemall/material-ui/blob/next/src/Progress/CircularProgress.js
 */

var CircularProgress = function CircularProgress(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 'large' : _ref$size;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('MuiCircularProgress', 'MuiCircularProgress--' + size)
  }, void 0, (0, _jsx3.default)('svg', {
    className: 'MuiCircularProgress-svg',
    viewBox: '0 0 100 100'
  }, void 0, (0, _jsx3.default)('circle', {
    className: 'MuiCircularProgress-circle',
    cx: 50,
    cy: 50,
    r: 50 - THICKNESS[size] / 2,
    fill: 'none',
    strokeWidth: THICKNESS[size],
    strokeMiterlimit: '20'
  })));
};

CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  size: _propTypes2.default.string
} : {};

exports.default = CircularProgress;
//# sourceMappingURL=CircularProgress.js.map
//# sourceMappingURL=CircularProgress.js.map
