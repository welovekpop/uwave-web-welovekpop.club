import { get } from './RequestActionCreators';

import { SET_TIMER, OFFSET } from '../constants/actionTypes/time';
import { timerSelector } from '../selectors/timeSelectors';

export function syncTimestamps(clientTimeBefore, serverTime) {
  var clientTimeAfter = Date.now();
  return {
    type: OFFSET,
    payload: Math.round((serverTime - clientTimeBefore + (serverTime - clientTimeAfter)) / 2)
  };
}

export function sync() {
  var before = Date.now();
  return get('/now', {
    onComplete: function onComplete(now) {
      return syncTimestamps(before, now.time);
    }
  });
}

/**
 * Create an auto-syncing timer that ticks once each second.
 *
 * When dispatched, the action returns an array. Functions pushed
 * to this array will be called on each tick.
 */
export function createTimer(cb) {
  return function (dispatch) {
    var last = Date.now();
    var syncing = false;

    function finishedSync() {
      syncing = false;
      cb();
    }

    var intv = setInterval(function () {
      // Resync if one 1000ms interval skipped over more than 5s of time.
      // This most likely means the user's computer's time changed.
      var now = Date.now();
      if (Math.abs(last - now) > 5000) {
        syncing = true;
        dispatch(sync()).then(finishedSync, finishedSync);
      } else if (!syncing) {
        // If we're currently syncing we don't update timed elements for
        // a while, to prevent weird back and forth jumps.
        cb();
      }
      last = now;
    }, 1000);

    dispatch({
      type: SET_TIMER,
      payload: intv
    });
  };
}

export function stopTimer() {
  return function (dispatch, getState) {
    var timer = timerSelector(getState());
    clearInterval(timer);
    dispatch({
      type: SET_TIMER,
      payload: null
    });
  };
}
//# sourceMappingURL=TickerActionCreators.js.map
