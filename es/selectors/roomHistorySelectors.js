import _extends from 'babel-runtime/helpers/extends';
import { createSelector } from 'reselect';
import { historyIDSelector, mediaSelector, startTimeSelector, djSelector } from './boothSelectors';
import { currentUserSelector } from './userSelectors';
import { currentVotesSelector } from './voteSelectors';

var byTimestamp = function byTimestamp(a, b) {
  return a.timestamp < b.timestamp ? 1 : -1;
};

var baseSelector = function baseSelector(state) {
  return state.roomHistory;
};

export var roomHistorySelector = createSelector(baseSelector, function (history) {
  return history.slice().sort(byTimestamp);
});

var addOwnVoteProps = function addOwnVoteProps(id) {
  return function (entry) {
    return _extends({}, entry, {
      stats: _extends({}, entry.stats, {
        // No ID is provided for guest users.
        isDownvote: !!id && entry.stats.downvotes.indexOf(id) > -1,
        isFavorite: !!id && entry.stats.favorites.indexOf(id) > -1,
        isUpvote: !!id && entry.stats.upvotes.indexOf(id) > -1
      })
    });
  };
};

export var currentPlaySelector = createSelector(currentUserSelector, historyIDSelector, mediaSelector, startTimeSelector, djSelector, currentVotesSelector, function (user, historyID, media, timestamp, dj, stats) {
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

export var roomHistoryWithVotesSelector = createSelector(roomHistorySelector, currentUserSelector, currentPlaySelector, function (history, user, current) {
  var roomHistory = history.map(addOwnVoteProps(user ? user._id : null));
  if (current) {
    roomHistory.unshift(current);
  }
  return roomHistory;
});
//# sourceMappingURL=roomHistorySelectors.js.map
