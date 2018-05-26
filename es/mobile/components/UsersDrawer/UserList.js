import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import List from "@material-ui/core/es/List";
import ListSubheader from "@material-ui/core/es/ListSubheader";
import Divider from "@material-ui/core/es/Divider";
import Button from "@material-ui/core/es/Button";
import CurrentDJIcon from "@material-ui/icons/es/PlayArrow";
import UserRow from './UserRow';
import WaitlistPosition from './WaitlistPosition';
var JoinWaitlistButton = withProps({
  variant: 'raised',
  color: 'primary',
  style: {
    marginLeft: 16,
    marginBottom: 8
  }
})(Button);

var _ref2 =
/*#__PURE__*/
_jsx(Divider, {});

var _ref3 =
/*#__PURE__*/
_jsx(Divider, {});

var UserList = function UserList(_ref) {
  var t = _ref.t,
      currentDJ = _ref.currentDJ,
      users = _ref.users,
      waitlist = _ref.waitlist,
      isLockedWaitlist = _ref.isLockedWaitlist,
      userIsLoggedIn = _ref.userIsLoggedIn,
      userInWaitlist = _ref.userInWaitlist,
      onJoinWaitlist = _ref.onJoinWaitlist;
  return _jsx("div", {}, void 0, currentDJ && _ref2, _jsx(List, {
    subheader: _jsx(ListSubheader, {}, void 0, t('waitlist.title'))
  }, void 0, currentDJ && _jsx(UserRow, {
    user: currentDJ,
    icon: _jsx(CurrentDJIcon, {
      style: {
        margin: 5
      }
    })
  }), waitlist.map(function (user, position) {
    return _jsx(UserRow, {
      user: user,
      icon: _jsx(WaitlistPosition, {
        position: position + 1
      })
    }, user._id);
  })), userIsLoggedIn && !userInWaitlist && _jsx(JoinWaitlistButton, {
    onClick: function onClick() {
      return onJoinWaitlist();
    },
    disabled: isLockedWaitlist
  }, void 0, t('waitlist.join')), _ref3, _jsx(List, {
    subheader: _jsx(ListSubheader, {}, void 0, t('users.title'))
  }, void 0, users.map(function (user) {
    return _jsx(UserRow, {
      user: user
    }, user._id);
  })));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  currentDJ: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  waitlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  userIsLoggedIn: PropTypes.bool.isRequired,
  userInWaitlist: PropTypes.bool,
  isLockedWaitlist: PropTypes.bool,
  onJoinWaitlist: PropTypes.func.isRequired
} : {};
export default translate()(UserList);
//# sourceMappingURL=UserList.js.map
