import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import Button from 'material-ui/es/Button';
import LockedIcon from 'material-ui-icons/Lock';

var WaitlistButton = function WaitlistButton(_ref) {
  var t = _ref.t,
      userInWaitlist = _ref.userInWaitlist,
      isLocked = _ref.isLocked,
      onClick = _ref.onClick;

  var icon = void 0;
  if (isLocked) {
    icon = _jsx(LockedIcon, {
      className: cx('FooterBar-joinIcon',
      // The user can still leave the waitlist, if it's locked,
      // but cannot join the waitlist.
      !userInWaitlist && 'FooterBar-joinIcon--locked')
    });
  }

  return _jsx(Button, {
    classes: {
      root: 'FooterBar-join',
      disabled: 'FooterBar-join--locked'
    },
    disabled: isLocked && !userInWaitlist,
    onClick: onClick
  }, void 0, icon, isLocked && ' ', userInWaitlist ? t('waitlist.leave') : t('waitlist.join'));
};

WaitlistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  userInWaitlist: PropTypes.bool,
  isLocked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
} : {};

export default compose(translate(), pure)(WaitlistButton);
//# sourceMappingURL=WaitlistButton.js.map
