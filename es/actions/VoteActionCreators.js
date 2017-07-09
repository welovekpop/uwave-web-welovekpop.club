import { post } from './RequestActionCreators';
import { historyIDSelector } from '../selectors/boothSelectors';
import { playlistsSelector } from '../selectors/playlistSelectors';

import { OPEN_ADD_MEDIA_MENU } from '../constants/actionTypes/playlists';
import { LOAD_VOTES, FAVORITE, UPVOTE, DOWNVOTE, DO_FAVORITE_START, DO_FAVORITE_COMPLETE, DO_UPVOTE, DO_DOWNVOTE } from '../constants/actionTypes/votes';
import mergeIncludedModels from '../utils/mergeIncludedModels';

import { flattenPlaylistItem } from './PlaylistActionCreators';

export function setVoteStats(voteStats) {
  return {
    type: LOAD_VOTES,
    payload: voteStats
  };
}

export function favorited(_ref) {
  var userID = _ref.userID,
      historyID = _ref.historyID;

  return {
    type: FAVORITE,
    payload: { userID: userID, historyID: historyID }
  };
}

export function receiveVote(_ref2) {
  var userID = _ref2.userID,
      vote = _ref2.vote;

  var type = vote > 0 ? UPVOTE : DOWNVOTE;
  return {
    type: type,
    payload: { userID: userID }
  };
}

export function doUpvote() {
  return { type: DO_UPVOTE };
}

export function doDownvote() {
  return { type: DO_DOWNVOTE };
}

export function openFavoriteMenu(position) {
  return function (dispatch, getState) {
    var playlists = playlistsSelector(getState());
    var historyID = historyIDSelector(getState());
    dispatch({
      type: OPEN_ADD_MEDIA_MENU,
      payload: { historyID: historyID },
      meta: {
        playlists: playlists,
        position: position,
        type: 'favorite'
      }
    });
  };
}

export function favoriteMediaStart(playlistID, historyID) {
  return {
    type: DO_FAVORITE_START,
    payload: { historyID: historyID, playlistID: playlistID }
  };
}

export function favoriteMediaComplete(playlistID, historyID, changes) {
  return {
    type: DO_FAVORITE_COMPLETE,
    payload: {
      historyID: historyID,
      playlistID: playlistID,
      added: changes.added.map(flattenPlaylistItem),
      newSize: changes.playlistSize
    }
  };
}

export function favoriteMedia(playlist, historyID) {
  var playlistID = playlist._id;
  return post('/booth/favorite', { historyID: historyID, playlistID: playlistID }, {
    onStart: function onStart() {
      return favoriteMediaStart(playlistID, historyID);
    },
    onComplete: function onComplete(res) {
      return favoriteMediaComplete(playlistID, historyID, {
        added: mergeIncludedModels(res),
        playlistSize: res.meta.playlistSize
      });
    },
    onError: function onError(error) {
      return {
        type: DO_FAVORITE_COMPLETE,
        error: true,
        payload: error,
        meta: { historyID: historyID, playlistID: playlistID }
      };
    }
  });
}
//# sourceMappingURL=VoteActionCreators.js.map
