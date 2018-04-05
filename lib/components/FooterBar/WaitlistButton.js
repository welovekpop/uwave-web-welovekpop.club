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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Lock = require('material-ui-icons/Lock');

var _Lock2 = _interopRequireDefault(_Lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaitlistButton = function WaitlistButton(_ref) {
  var t = _ref.t,
      userInWaitlist = _ref.userInWaitlist,
      isLocked = _ref.isLocked,
      onClick = _ref.onClick;

  var icon = void 0;
  if (isLocked) {
    icon = (0, _jsx3.default)(_Lock2.default, {
      className: (0, _classnames2.default)('FooterBar-joinIcon',
      // The user can still leave the waitlist, if it's locked,
      // but cannot join the waitlist.
      !userInWaitlist && 'FooterBar-joinIcon--locked')
    });
  }

  return (0, _jsx3.default)(_Button2.default, {
    classes: {
      root: 'FooterBar-join',
      disabled: 'FooterBar-join--locked'
    },
    disabled: isLocked && !userInWaitlist,
    onClick: onClick
  }, void 0, icon, isLocked && ' ', userInWaitlist ? t('waitlist.leave') : t('waitlist.join'));
};

WaitlistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  userInWaitlist: _propTypes2.default.bool,
  isLocked: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default)(WaitlistButton);
//# sourceMappingURL=WaitlistButton.js.map
//# sourceMappingURL=WaitlistButton.js.map
