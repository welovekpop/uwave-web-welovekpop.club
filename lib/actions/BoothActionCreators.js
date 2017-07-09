'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advanceToEmpty = advanceToEmpty;
exports.advance = advance;
exports.skipSelf = skipSelf;
exports.loadHistoryStart = loadHistoryStart;
exports.loadHistoryComplete = loadHistoryComplete;
exports.loadHistory = loadHistory;

var _booth = require('../constants/actionTypes/booth');

var _PlaylistActionCreators = require('./PlaylistActionCreators');

var _RequestActionCreators = require('./RequestActionCreators');

var _boothSelectors = require('../selectors/boothSelectors');

var _roomHistorySelectors = require('../selectors/roomHistorySelectors');

var _userSelectors = require('../selectors/userSelectors');

var _mergeIncludedModels = require('../utils/mergeIncludedModels');

var _mergeIncludedModels2 = _interopRequireDefault(_mergeIncludedModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function advanceToEmpty() {
  return function (dispatch, getState) {
    dispatch({
      type: _booth.ADVANCE,
      payload: null,
      meta: { previous: (0, _roomHistorySelectors.currentPlaySelector)(getState()) }
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
      type: _booth.ADVANCE,
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

function skipSelf() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var remove = !!opts.remove;
  return function (dispatch, getState) {
    if ((0, _boothSelectors.isCurrentDJSelector)(getState())) {
      return dispatch((0, _RequestActionCreators.post)('/booth/skip', { remove: remove }));
    }
    return Promise.reject(new Error('You\'re not currently playing.'));
  };
}

function loadHistoryStart() {
  return { type: _booth.LOAD_HISTORY_START };
}

function loadHistoryComplete(response) {
  return function (dispatch, getState) {
    var currentHistoryID = (0, _boothSelectors.historyIDSelector)(getState());
    var meta = response.meta;

    var playHistory = (0, _mergeIncludedModels2.default)(response);
    if (playHistory[0] && playHistory[0]._id === currentHistoryID) {
      playHistory = playHistory.slice(1);
    }
    dispatch({
      type: _booth.LOAD_HISTORY_COMPLETE,
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
//# sourceMappingURL=BoothActionCreators.js.map
