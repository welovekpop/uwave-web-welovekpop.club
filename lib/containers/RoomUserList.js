"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _userSelectors = require("../selectors/userSelectors");

var _voteSelectors = require("../selectors/voteSelectors");

var _RoomUserList = _interopRequireDefault(require("../components/RoomUserList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userListWithVotesSelector = (0, _reselect.createSelector)(_userSelectors.userListSelector, _voteSelectors.currentVotesSelector, function (users, votes) {
  return users.map(function (user) {
    return (0, _objectSpread2.default)({}, user, {
      votes: {
        upvote: votes.upvotes.indexOf(user._id) !== -1,
        downvote: votes.downvotes.indexOf(user._id) !== -1,
        favorite: votes.favorites.indexOf(user._id) !== -1
      }
    });
  });
});
var mapStateToProps = (0, _reselect.createStructuredSelector)({
  users: userListWithVotesSelector,
  guests: _userSelectors.guestCountSelector
});

var _default = (0, _reactRedux.connect)(mapStateToProps)(_RoomUserList.default); //# sourceMappingURL=RoomUserList.js.map


exports.default = _default;
//# sourceMappingURL=RoomUserList.js.map
