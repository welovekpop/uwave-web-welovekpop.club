"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaitlistButton = function WaitlistButton(_ref) {
  var t = _ref.t,
      userInWaitlist = _ref.userInWaitlist,
      isLocked = _ref.isLocked,
      onClick = _ref.onClick;
  var icon;

  if (isLocked) {
    icon = (0, _jsx2.default)(_Lock.default, {
      className: (0, _classnames.default)('FooterBar-joinIcon', // The user can still leave the waitlist, if it's locked,
      // but cannot join the waitlist.
      !userInWaitlist && 'FooterBar-joinIcon--locked')
    });
  }

  return (0, _jsx2.default)(_Button.default, {
    classes: {
      root: 'FooterBar-join',
      disabled: 'FooterBar-join--locked'
    },
    disabled: isLocked && !userInWaitlist,
    onClick: onClick
  }, void 0, icon, isLocked && ' ', userInWaitlist ? t('waitlist.leave') : t('waitlist.join'));
};

WaitlistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  userInWaitlist: _propTypes.default.bool,
  isLocked: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default)(WaitlistButton);

exports.default = _default;
//# sourceMappingURL=WaitlistButton.js.map
