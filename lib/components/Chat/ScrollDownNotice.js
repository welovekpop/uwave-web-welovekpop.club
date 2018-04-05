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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ArrowDownward = require('material-ui-icons/ArrowDownward');

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_ArrowDownward2.default, {});

var ScrollNotice = function ScrollNotice(_ref) {
  var show = _ref.show,
      onClick = _ref.onClick;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('ChatMessages-scrollDown', show && 'is-visible')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessages-scrollDownButton'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    variant: 'fab',
    mini: true,
    color: 'primary',
    onClick: onClick
  }, void 0, _ref2)));
};

ScrollNotice.propTypes = process.env.NODE_ENV !== "production" ? {
  show: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = ScrollNotice;
//# sourceMappingURL=ScrollDownNotice.js.map
//# sourceMappingURL=ScrollDownNotice.js.map
