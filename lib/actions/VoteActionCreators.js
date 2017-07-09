'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVoteStats = setVoteStats;
exports.favorited = favorited;
exports.receiveVote = receiveVote;
exports.doUpvote = doUpvote;
exports.doDownvote = doDownvote;
exports.openFavoriteMenu = openFavoriteMenu;
exports.favoriteMediaStart = favoriteMediaStart;
exports.favoriteMediaComplete = favoriteMediaComplete;
exports.favoriteMedia = favoriteMedia;

var _RequestActionCreators = require('./RequestActionCreators');

var _boothSelectors = require('../selectors/boothSelectors');

var _playlistSelectors = require('../selectors/playlistSelectors');

var _playlists = require('../constants/actionTypes/playlists');

var _votes = require('../constants/actionTypes/votes');

var _mergeIncludedModels = require('../utils/mergeIncludedModels');

var _mergeIncludedModels2 = _interopRequireDefault(_mergeIncludedModels);

var _PlaylistActionCreators = require('./PlaylistActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setVoteStats(voteStats) {
  return {
    type: _votes.LOAD_VOTES,
    payload: voteStats
  };
}

function favorited(_ref) {
  var userID = _ref.userID,
      historyID = _ref.historyID;

  return {
    type: _votes.FAVORITE,
    payload: { userID: userID, historyID: historyID }
  };
}

function receiveVote(_ref2) {
  var userID = _ref2.userID,
      vote = _ref2.vote;

  var type = vote > 0 ? _votes.UPVOTE : _votes.DOWNVOTE;
  return {
    type: type,
    payload: { userID: userID }
  };
}

function doUpvote() {
  return { type: _votes.DO_UPVOTE };
}

function doDownvote() {
  return { type: _votes.DO_DOWNVOTE };
}

function openFavoriteMenu(position) {
  return function (dispatch, getState) {
    var playlists = (0, _playlistSelectors.playlistsSelector)(getState());
    var historyID = (0, _boothSelectors.historyIDSelector)(getState());
    dispatch({
      type: _playlists.OPEN_ADD_MEDIA_MENU,
      payload: { historyID: historyID },
      meta: {
        playlists: playlists,
        position: position,
        type: 'favorite'
      }
    });
  };
}

function favoriteMediaStart(playlistID, historyID) {
  return {
    type: _votes.DO_FAVORITE_START,
    payload: { historyID: historyID, playlistID: playlistID }
  };
}

function favoriteMediaComplete(playlistID, historyID, changes) {
  return {
    type: _votes.DO_FAVORITE_COMPLETE,
    payload: {
      historyID: historyID,
      playlistID: playlistID,
      added: changes.added.map(_PlaylistActionCreators.flattenPlaylistItem),
      newSize: changes.playlistSize
    }
  };
}

function favoriteMedia(playlist, historyID) {
  var playlistID = playlist._id;
  return (0, _RequestActionCreators.post)('/booth/favorite', { historyID: historyID, playlistID: playlistID }, {
    onStart: function onStart() {
      return favoriteMediaStart(playlistID, historyID);
    },
    onComplete: function onComplete(res) {
      return favoriteMediaComplete(playlistID, historyID, {
        added: (0, _mergeIncludedModels2.default)(res),
        playlistSize: res.meta.playlistSize
      });
    },
    onError: function onError(error) {
      return {
        type: _votes.DO_FAVORITE_COMPLETE,
        error: true,
        payload: error,
        meta: { historyID: historyID, playlistID: playlistID }
      };
    }
  });
}
//# sourceMappingURL=VoteActionCreators.js.map
//# sourceMappingURL=VoteActionCreators.js.map
