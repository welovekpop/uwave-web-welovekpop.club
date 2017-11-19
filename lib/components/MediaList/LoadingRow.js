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

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MediaLoadingIndicator = require('./MediaLoadingIndicator');

var _MediaLoadingIndicator2 = _interopRequireDefault(_MediaLoadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_MediaLoadingIndicator2.default, {
  className: 'MediaListRow-loader'
});

var _ref2 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-artist'
}, void 0, ' \u2026 ');

var _ref3 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-title'
}, void 0, ' \u2026 ');

var _ref4 = (0, _jsx3.default)('div', {
  className: 'MediaListRow-duration'
}, void 0, ' \u2026 ');

var LoadingRow = function (_React$Component) {
  (0, _inherits3.default)(LoadingRow, _React$Component);

  function LoadingRow() {
    (0, _classCallCheck3.default)(this, LoadingRow);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  LoadingRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        selected = _props.selected,
        attrs = (0, _objectWithoutProperties3.default)(_props, ['className', 'selected']);

    var selectedClass = selected ? 'is-selected' : '';
    return _react2.default.createElement('div', (0, _extends3.default)({
      className: (0, _classnames2.default)('MediaListRow', 'is-loading', className, selectedClass)
    }, attrs), _ref, _ref2, _ref3, _ref4);
  };

  return LoadingRow;
}(_react2.default.Component);

LoadingRow.defaultProps = {
  selected: false
};
exports.default = LoadingRow;

LoadingRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  selected: _propTypes2.default.bool
} : {};
//# sourceMappingURL=LoadingRow.js.map
//# sourceMappingURL=LoadingRow.js.map
