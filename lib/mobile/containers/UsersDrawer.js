"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _waitlistSelectors = require("../../selectors/waitlistSelectors");

var _userSelectors = require("../../selectors/userSelectors");

var _boothSelectors = require("../../selectors/boothSelectors");

var _userSelectors2 = require("../selectors/userSelectors");

var _WaitlistActionCreators = require("../../actions/WaitlistActionCreators");

var _drawerSelectors = require("../selectors/drawerSelectors");

var _DrawerActionCreators = require("../actions/DrawerActionCreators");

var _UsersDrawer = _interopRequireDefault(require("../components/UsersDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  currentDJ: _boothSelectors.djSelector,
  users: _userSelectors2.listenersSelector,
  waitlist: _waitlistSelectors.waitlistUsersSelector,
  open: _drawerSelectors.usersDrawerIsOpenSelector,
  userIsLoggedIn: _userSelectors.isLoggedInSelector,
  userInWaitlist: _waitlistSelectors.userInWaitlistSelector,
  isLockedWaitlist: _waitlistSelectors.isLockedSelector
});
var mapDispatchToProps = {
  onDrawerClose: function onDrawerClose() {
    return (0, _DrawerActionCreators.setUsersDrawer)(false);
  },
  onJoinWaitlist: _WaitlistActionCreators.joinWaitlist,
  onLeaveWaitlist: _WaitlistActionCreators.leaveWaitlist
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UsersDrawer.default); //# sourceMappingURL=UsersDrawer.js.map


exports.default = _default;
//# sourceMappingURL=UsersDrawer.js.map
