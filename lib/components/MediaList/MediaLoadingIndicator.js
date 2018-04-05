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

var _Progress = require('material-ui/Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_Progress.CircularProgress, {
  className: 'MediaLoadingIndicator-spinner'
});

var MediaLoadingIndicator = function MediaLoadingIndicator(_ref) {
  var className = _ref.className;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('MediaLoadingIndicator', className)
  }, void 0, _ref2);
};

MediaLoadingIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string
} : {};

exports.default = MediaLoadingIndicator;
//# sourceMappingURL=MediaLoadingIndicator.js.map
//# sourceMappingURL=MediaLoadingIndicator.js.map
