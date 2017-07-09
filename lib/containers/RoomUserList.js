'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _userSelectors = require('../selectors/userSelectors');

var _voteSelectors = require('../selectors/voteSelectors');

var _RoomUserList = require('../components/RoomUserList');

var _RoomUserList2 = _interopRequireDefault(_RoomUserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userListWithVotesSelector = (0, _reselect.createSelector)(_userSelectors.userListSelector, _voteSelectors.currentVotesSelector, function (users, votes) {
  return users.map(function (user) {
    return (0, _extends3.default)({}, user, {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_RoomUserList2.default);
//# sourceMappingURL=RoomUserList.js.map
//# sourceMappingURL=RoomUserList.js.map
