"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _ThumbDown = _interopRequireDefault(require("@material-ui/icons/ThumbDown"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var Downvote = function Downvote(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      active = _ref.active,
      count = _ref.count,
      onDownvote = _ref.onDownvote;
  return (0, _jsx2.default)(_Button.default, {
    disabled: disabled,
    tooltip: t('votes.downvote'),
    onClick: onDownvote,
    count: count
  }, void 0, (0, _jsx2.default)(_ThumbDown.default, {
    className: active ? 'ResponseButton-icon--downvoted' : ''
  }));
};

Downvote.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onDownvote: _propTypes.default.func.isRequired,
  count: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  active: _propTypes.default.bool
} : {};

var _default = enhance(Downvote);

exports.default = _default;
//# sourceMappingURL=Downvote.js.map
