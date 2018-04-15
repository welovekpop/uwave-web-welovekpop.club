"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactI18next = require("react-i18next");

var _List = _interopRequireWildcard(require("material-ui/List"));

var _Divider = _interopRequireDefault(require("material-ui/Divider"));

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _PlayArrow = _interopRequireDefault(require("@material-ui/icons/PlayArrow"));

var _UserRow = _interopRequireDefault(require("./UserRow"));

var _WaitlistPosition = _interopRequireDefault(require("./WaitlistPosition"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoinWaitlistButton = (0, _withProps.default)({
  variant: 'raised',
  color: 'primary',
  style: {
    marginLeft: 16,
    marginBottom: 8
  }
})(_Button.default);

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Divider.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Divider.default, {});

var UserList = function UserList(_ref) {
  var t = _ref.t,
      currentDJ = _ref.currentDJ,
      users = _ref.users,
      waitlist = _ref.waitlist,
      isLockedWaitlist = _ref.isLockedWaitlist,
      userIsLoggedIn = _ref.userIsLoggedIn,
      userInWaitlist = _ref.userInWaitlist,
      onJoinWaitlist = _ref.onJoinWaitlist;
  return (0, _jsx2.default)("div", {}, void 0, currentDJ && _ref2, (0, _jsx2.default)(_List.default, {
    subheader: (0, _jsx2.default)(_List.ListSubheader, {}, void 0, t('waitlist.title'))
  }, void 0, currentDJ && (0, _jsx2.default)(_UserRow.default, {
    user: currentDJ,
    icon: (0, _jsx2.default)(_PlayArrow.default, {
      style: {
        margin: 5
      }
    })
  }), waitlist.map(function (user, position) {
    return (0, _jsx2.default)(_UserRow.default, {
      user: user,
      icon: (0, _jsx2.default)(_WaitlistPosition.default, {
        position: position + 1
      })
    }, user._id);
  })), userIsLoggedIn && !userInWaitlist && (0, _jsx2.default)(JoinWaitlistButton, {
    onClick: function onClick() {
      return onJoinWaitlist();
    },
    disabled: isLockedWaitlist
  }, void 0, t('waitlist.join')), _ref3, (0, _jsx2.default)(_List.default, {
    subheader: (0, _jsx2.default)(_List.ListSubheader, {}, void 0, t('users.title'))
  }, void 0, users.map(function (user) {
    return (0, _jsx2.default)(_UserRow.default, {
      user: user
    }, user._id);
  })));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  currentDJ: _propTypes.default.object,
  users: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  waitlist: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  userIsLoggedIn: _propTypes.default.bool.isRequired,
  userInWaitlist: _propTypes.default.bool,
  isLockedWaitlist: _propTypes.default.bool,
  onJoinWaitlist: _propTypes.default.func.isRequired
} : {};

var _default = (0, _reactI18next.translate)()(UserList); //# sourceMappingURL=UserList.js.map


exports.default = _default;
//# sourceMappingURL=UserList.js.map
