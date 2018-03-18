'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MediaLoadingIndicator = require('./MediaLoadingIndicator');

var _MediaLoadingIndicator2 = _interopRequireDefault(_MediaLoadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_MediaLoadingIndicator2.default, {
  className: 'MediaListRow-loader'
});

var _ref3 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-artist'
}, void 0, ' \u2026 ');

var _ref4 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-title'
}, void 0, ' \u2026 ');

var _ref5 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-duration'
}, void 0, ' \u2026 ');

var LoadingRow = function LoadingRow(_ref) {
  var className = _ref.className,
      _ref$selected = _ref.selected,
      selected = _ref$selected === undefined ? false : _ref$selected,
      attrs = (0, _objectWithoutProperties3.default)(_ref, ['className', 'selected']);

  return _react2.default.createElement('div', (0, _extends3.default)({
    className: (0, _classnames2.default)('MediaListRow', 'is-loading', className, selected && 'is-selected')
  }, attrs), _ref2, _ref3, _ref4, _ref5);
};

LoadingRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  selected: _propTypes2.default.bool
} : {};

exports.default = LoadingRow;
//# sourceMappingURL=LoadingRow.js.map
//# sourceMappingURL=LoadingRow.js.map
