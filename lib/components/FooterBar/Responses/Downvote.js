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

var _reactI18next = require('react-i18next');

var _thumbDown = require('material-ui/svg-icons/action/thumb-down');

var _thumbDown2 = _interopRequireDefault(_thumbDown);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Downvote = function Downvote(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      active = _ref.active,
      count = _ref.count,
      onDownvote = _ref.onDownvote;
  return (0, _jsx3.default)(_Button2.default, {
    disabled: disabled,
    tooltip: t('votes.downvote'),
    onClick: onDownvote,
    count: count
  }, void 0, (0, _jsx3.default)(_thumbDown2.default, {
    color: active ? '#B64B4B' : 'white'
  }));
};

Downvote.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onDownvote: _propTypes2.default.func.isRequired,
  count: _propTypes2.default.number.isRequired,
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool
} : {};

exports.default = (0, _reactI18next.translate)()(Downvote);
//# sourceMappingURL=Downvote.js.map
//# sourceMappingURL=Downvote.js.map
