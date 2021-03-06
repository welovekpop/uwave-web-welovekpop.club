"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _ModerationActionCreators = require("../actions/ModerationActionCreators");

var _waitlistSelectors = require("../selectors/waitlistSelectors");

var _userSelectors = require("../selectors/userSelectors");

var _WaitList = _interopRequireDefault(require("../components/WaitList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  users: _waitlistSelectors.waitlistUsersSelector,
  canMoveUsers: (0, _userSelectors.createRoleCheckSelector)('waitlist.move')
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onMoveUser: _ModerationActionCreators.moveWaitlistUser,
    onRemoveUser: _ModerationActionCreators.removeWaitlistUser
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_WaitList.default);

exports.default = _default;
//# sourceMappingURL=WaitList.js.map
