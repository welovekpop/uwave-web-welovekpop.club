"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advanceToEmpty = advanceToEmpty;
exports.advance = advance;
exports.skipSelf = skipSelf;
exports.skipped = skipped;
exports.loadHistoryStart = loadHistoryStart;
exports.loadHistoryComplete = loadHistoryComplete;
exports.loadHistory = loadHistory;

var _ActionTypes = require("../constants/ActionTypes");

var _PlaylistActionCreators = require("./PlaylistActionCreators");

var _RequestActionCreators = require("./RequestActionCreators");

var _boothSelectors = require("../selectors/boothSelectors");

var _roomHistorySelectors = require("../selectors/roomHistorySelectors");

var _userSelectors = require("../selectors/userSelectors");

var _mergeIncludedModels = _interopRequireDefault(require("../utils/mergeIncludedModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function advanceToEmpty() {
  return function (dispatch, getState) {
    dispatch({
      type: _ActionTypes.ADVANCE,
      payload: null,
      meta: {
        previous: (0, _roomHistorySelectors.currentPlaySelector)(getState())
      }
    });
  };
}
/**
 * Set the current song and DJ.
 */


function advance(nextBooth) {
  if (!nextBooth || !nextBooth.historyID) {
    return advanceToEmpty();
  }

  var media = nextBooth.media,
      userID = nextBooth.userID,
      historyID = nextBooth.historyID,
      playlistID = nextBooth.playlistID,
      playedAt = nextBooth.playedAt;
  return function (dispatch, getState) {
    var user = (0, _userSelectors.usersSelector)(getState())[userID];
    dispatch({
      type: _ActionTypes.ADVANCE,
      payload: {
        userID: userID,
        historyID: historyID,
        playlistID: playlistID,
        user: user,
        media: (0, _PlaylistActionCreators.flattenPlaylistItem)(media),
        timestamp: playedAt
      },
      meta: {
        previous: (0, _roomHistorySelectors.currentPlaySelector)(getState())
      }
    });
  };
}

function skipSelf(opts) {
  if (opts === void 0) {
    opts = {};
  }

  var remove = !!opts.remove;
  return function (dispatch, getState) {
    if ((0, _boothSelectors.isCurrentDJSelector)(getState())) {
      return dispatch((0, _RequestActionCreators.post)('/booth/skip', {
        remove: remove
      }));
    }

    return Promise.reject(new Error('You\'re not currently playing.'));
  };
}

function skipped(_ref) {
  var userID = _ref.userID,
      moderatorID = _ref.moderatorID,
      reason = _ref.reason;
  return function (dispatch, getState) {
    var users = (0, _userSelectors.usersSelector)(getState());
    dispatch({
      type: _ActionTypes.BOOTH_SKIP,
      payload: {
        user: users[userID],
        moderator: users[moderatorID],
        reason: reason,
        timestamp: Date.now()
      }
    });
  };
}

function loadHistoryStart() {
  return {
    type: _ActionTypes.LOAD_HISTORY_START
  };
}

function loadHistoryComplete(response) {
  return function (dispatch, getState) {
    var currentHistoryID = (0, _boothSelectors.historyIDSelector)(getState());
    var meta = response.meta;
    var playHistory = (0, _mergeIncludedModels.default)(response);

    if (playHistory[0] && playHistory[0]._id === currentHistoryID) {
      playHistory = playHistory.slice(1);
    }

    dispatch({
      type: _ActionTypes.LOAD_HISTORY_COMPLETE,
      payload: playHistory,
      meta: {
        page: Math.floor(meta.offset / meta.pageSize),
        size: meta.pageSize
      }
    });
  };
}

function loadHistory() {
  return (0, _RequestActionCreators.get)('/booth/history', {
    onStart: loadHistoryStart,
    onComplete: loadHistoryComplete
  });
}
//# sourceMappingURL=BoothActionCreators.js.map
