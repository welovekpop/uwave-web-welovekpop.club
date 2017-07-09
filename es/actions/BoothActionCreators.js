import { ADVANCE, LOAD_HISTORY_START, LOAD_HISTORY_COMPLETE } from '../constants/actionTypes/booth';
import { flattenPlaylistItem } from './PlaylistActionCreators';
import { get, post } from './RequestActionCreators';

import { historyIDSelector, isCurrentDJSelector } from '../selectors/boothSelectors';
import { currentPlaySelector } from '../selectors/roomHistorySelectors';
import { usersSelector } from '../selectors/userSelectors';
import mergeIncludedModels from '../utils/mergeIncludedModels';

export function advanceToEmpty() {
  return function (dispatch, getState) {
    dispatch({
      type: ADVANCE,
      payload: null,
      meta: { previous: currentPlaySelector(getState()) }
    });
  };
}

/**
 * Set the current song and DJ.
 */
export function advance(nextBooth) {
  if (!nextBooth || !nextBooth.historyID) {
    return advanceToEmpty();
  }
  var media = nextBooth.media,
      userID = nextBooth.userID,
      historyID = nextBooth.historyID,
      playlistID = nextBooth.playlistID,
      playedAt = nextBooth.playedAt;

  return function (dispatch, getState) {
    var user = usersSelector(getState())[userID];
    dispatch({
      type: ADVANCE,
      payload: {
        userID: userID,
        historyID: historyID,
        playlistID: playlistID,
        user: user,
        media: flattenPlaylistItem(media),
        timestamp: playedAt
      },
      meta: {
        previous: currentPlaySelector(getState())
      }
    });
  };
}

export function skipSelf() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var remove = !!opts.remove;
  return function (dispatch, getState) {
    if (isCurrentDJSelector(getState())) {
      return dispatch(post('/booth/skip', { remove: remove }));
    }
    return Promise.reject(new Error('You\'re not currently playing.'));
  };
}

export function loadHistoryStart() {
  return { type: LOAD_HISTORY_START };
}

export function loadHistoryComplete(response) {
  return function (dispatch, getState) {
    var currentHistoryID = historyIDSelector(getState());
    var meta = response.meta;

    var playHistory = mergeIncludedModels(response);
    if (playHistory[0] && playHistory[0]._id === currentHistoryID) {
      playHistory = playHistory.slice(1);
    }
    dispatch({
      type: LOAD_HISTORY_COMPLETE,
      payload: playHistory,
      meta: {
        page: Math.floor(meta.offset / meta.pageSize),
        size: meta.pageSize
      }
    });
  };
}

export function loadHistory() {
  return get('/booth/history', {
    onStart: loadHistoryStart,
    onComplete: loadHistoryComplete
  });
}
//# sourceMappingURL=BoothActionCreators.js.map
