import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';
import LockedIcon from 'material-ui/svg-icons/action/lock';

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
    icon = _jsx(LockedIcon, {
      style: inlineIconStyle,
      color: iconColor
    });
  }

  return _jsx(FlatButton, {
    className: cx('FooterBar-join', isLocked && 'FooterBar-join--locked'),
    disabled: isLocked && !userInWaitlist,
    onClick: onClick,
    style: buttonStyle,
    backgroundColor: muiTheme.palette.primary1Color,
    hoverColor: muiTheme.palette.primary2Color,
    rippleColor: muiTheme.palette.primary3Color
  }, void 0, icon, isLocked && ' ', userInWaitlist ? t('waitlist.leave') : t('waitlist.join'));
};

WaitlistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
  userInWaitlist: PropTypes.bool,
  isLocked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
} : {};

export default compose(muiThemeable(), translate(), pure)(WaitlistButton);
//# sourceMappingURL=WaitlistButton.js.map
