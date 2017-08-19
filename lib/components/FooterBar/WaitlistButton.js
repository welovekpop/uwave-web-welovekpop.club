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

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _lock = require('material-ui/svg-icons/action/lock');

var _lock2 = _interopRequireDefault(_lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineIconStyle = {
  width: '1em',
  height: '1em'
};

var buttonStyle = {
  height: '100%',
  fontSize: '11pt',
  textTransform: 'uppercase',
  // Align multiline button text nicely. Good for languages where "Join Waitlist"
  // becomes a longer phrase, especially.
  lineHeight: '24px'
};

var WaitlistButton = function WaitlistButton(_ref) {
  var t = _ref.t,
      muiTheme = _ref.muiTheme,
      userInWaitlist = _ref.userInWaitlist,
      isLocked = _ref.isLocked,
      onClick = _ref.onClick;

  var icon = void 0;
  if (isLocked) {
    var iconColor = userInWaitlist
    // The user can still leave the waitlist, if it's locked…
    ? muiTheme.flatButton.textColor
    // …but cannot join the waitlist.
    : muiTheme.flatButton.disabledTextColor;
    icon = (0, _jsx3.default)(_lock2.default, {
      style: inlineIconStyle,
      color: iconColor
    });
  }

  return (0, _jsx3.default)(_FlatButton2.default, {
    className: (0, _classnames2.default)('FooterBar-join', isLocked && 'FooterBar-join--locked'),
    disabled: isLocked && !userInWaitlist,
    onClick: onClick,
    style: buttonStyle,
    backgroundColor: muiTheme.palette.primary1Color,
    hoverColor: muiTheme.palette.primary2Color,
    rippleColor: muiTheme.palette.primary3Color
  }, void 0, icon, isLocked && ' ', userInWaitlist ? t('waitlist.leave') : t('waitlist.join'));
};

WaitlistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  muiTheme: _propTypes2.default.object.isRequired,
  userInWaitlist: _propTypes2.default.bool,
  isLocked: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _muiThemeable2.default)(), (0, _reactI18next.translate)(), _pure2.default)(WaitlistButton);
//# sourceMappingURL=WaitlistButton.js.map
//# sourceMappingURL=WaitlistButton.js.map
