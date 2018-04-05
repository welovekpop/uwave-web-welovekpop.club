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

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactI18next = require('react-i18next');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _UserRow = require('./UserRow');

var _UserRow2 = _interopRequireDefault(_UserRow);

var _WaitlistPosition = require('./WaitlistPosition');

var _WaitlistPosition2 = _interopRequireDefault(_WaitlistPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoinWaitlistButton = (0, _withProps2.default)({
  variant: 'raised',
  color: 'primary',
  style: {
    marginLeft: 16,
    marginBottom: 8
  }
})(_Button2.default);

var _ref2 = (0, _jsx3.default)(_Divider2.default, {});

var _ref3 = (0, _jsx3.default)(_Divider2.default, {});

var UserList = function UserList(_ref) {
  var t = _ref.t,
      currentDJ = _ref.currentDJ,
      users = _ref.users,
      waitlist = _ref.waitlist,
      isLockedWaitlist = _ref.isLockedWaitlist,
      userIsLoggedIn = _ref.userIsLoggedIn,
      userInWaitlist = _ref.userInWaitlist,
      onJoinWaitlist = _ref.onJoinWaitlist;
  return (0, _jsx3.default)('div', {}, void 0, currentDJ && _ref2, (0, _jsx3.default)(_List2.default, {
    subheader: (0, _jsx3.default)(_List.ListSubheader, {}, void 0, t('waitlist.title'))
  }, void 0, currentDJ && (0, _jsx3.default)(_UserRow2.default, {
    user: currentDJ,
    icon: (0, _jsx3.default)(_PlayArrow2.default, {
      style: { margin: 5 }
    })
  }), waitlist.map(function (user, position) {
    return (0, _jsx3.default)(_UserRow2.default, {
      user: user,
      icon: (0, _jsx3.default)(_WaitlistPosition2.default, {
        position: position + 1
      })
    }, user._id);
  })), userIsLoggedIn && !userInWaitlist && (0, _jsx3.default)(JoinWaitlistButton, {
    onClick: function onClick() {
      return onJoinWaitlist();
    },
    disabled: isLockedWaitlist
  }, void 0, t('waitlist.join')), _ref3, (0, _jsx3.default)(_List2.default, {
    subheader: (0, _jsx3.default)(_List.ListSubheader, {}, void 0, t('users.title'))
  }, void 0, users.map(function (user) {
    return (0, _jsx3.default)(_UserRow2.default, {
      user: user
    }, user._id);
  })));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  currentDJ: _propTypes2.default.object,
  users: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  waitlist: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  userIsLoggedIn: _propTypes2.default.bool.isRequired,
  userInWaitlist: _propTypes2.default.bool,
  isLockedWaitlist: _propTypes2.default.bool,
  onJoinWaitlist: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _reactI18next.translate)()(UserList);
//# sourceMappingURL=UserList.js.map
//# sourceMappingURL=UserList.js.map
