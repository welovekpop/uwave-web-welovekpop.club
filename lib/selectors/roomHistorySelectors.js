"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roomHistoryWithVotesSelector = exports.currentPlaySelector = exports.roomHistorySelector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _reselect = require("reselect");

var _boothSelectors = require("./boothSelectors");

var _userSelectors = require("./userSelectors");

var _voteSelectors = require("./voteSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byTimestamp = function byTimestamp(a, b) {
  return a.timestamp < b.timestamp ? 1 : -1;
};

var baseSelector = function baseSelector(state) {
  return state.roomHistory;
};

var roomHistorySelector = (0, _reselect.createSelector)(baseSelector, function (history) {
  return history.slice().sort(byTimestamp);
});
exports.roomHistorySelector = roomHistorySelector;

var addOwnVoteProps = function addOwnVoteProps(id) {
  return function (entry) {
    return (0, _extends2.default)({}, entry, {
      stats: (0, _extends2.default)({}, entry.stats, {
        // No ID is provided for guest users.
        isDownvote: !!id && entry.stats.downvotes.indexOf(id) > -1,
        isFavorite: !!id && entry.stats.favorites.indexOf(id) > -1,
        isUpvote: !!id && entry.stats.upvotes.indexOf(id) > -1
      })
    });
  };
};

var currentPlaySelector = (0, _reselect.createSelector)(_userSelectors.currentUserSelector, _boothSelectors.historyIDSelector, _boothSelectors.mediaSelector, _boothSelectors.startTimeSelector, _boothSelectors.djSelector, _voteSelectors.currentVotesSelector, function (user, historyID, media, timestamp, dj, stats) {
  if (!historyID) {
    return null;
  }

  var entry = {
    _id: historyID,
    user: dj,
    media: media,
    timestamp: timestamp,
    stats: stats
  };
  return addOwnVoteProps(user ? user._id : null)(entry);
});
exports.currentPlaySelector = currentPlaySelector;
var roomHistoryWithVotesSelector = (0, _reselect.createSelector)(roomHistorySelector, _userSelectors.currentUserSelector, currentPlaySelector, function (history, user, current) {
  var roomHistory = history.map(addOwnVoteProps(user ? user._id : null));

  if (current) {
    roomHistory.unshift(current);
  }

  return roomHistory;
}); //# sourceMappingURL=roomHistorySelectors.js.map

exports.roomHistoryWithVotesSelector = roomHistoryWithVotesSelector;
//# sourceMappingURL=roomHistorySelectors.js.map
