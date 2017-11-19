'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
});

var OfflineIcon = function OfflineIcon(_ref) {
  var style = _ref.style;
  return (0, _jsx3.default)('div', {
    style: (0, _extends3.default)({}, style, { width: 24, height: 24, display: 'inline-block'
    })
  }, void 0, _ref2);
};

OfflineIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  style: _propTypes2.default.object
} : {};

exports.default = OfflineIcon;
//# sourceMappingURL=OfflineIcon.js.map
//# sourceMappingURL=OfflineIcon.js.map
