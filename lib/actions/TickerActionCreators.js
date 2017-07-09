'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncTimestamps = syncTimestamps;
exports.sync = sync;
exports.createTimer = createTimer;
exports.stopTimer = stopTimer;

var _RequestActionCreators = require('./RequestActionCreators');

var _time = require('../constants/actionTypes/time');

var _timeSelectors = require('../selectors/timeSelectors');

function syncTimestamps(clientTimeBefore, serverTime) {
  var clientTimeAfter = Date.now();
  return {
    type: _time.OFFSET,
    payload: Math.round((serverTime - clientTimeBefore + (serverTime - clientTimeAfter)) / 2)
  };
}

function sync() {
  var before = Date.now();
  return (0, _RequestActionCreators.get)('/now', {
    onComplete: function onComplete(now) {
      return syncTimestamps(before, now.time);
    }
  });
}

function createTimer() {
  return function (dispatch) {
    var callbacks = [];
    var last = Date.now();
    var syncing = false;

    function notifyListeners() {
      callbacks.forEach(function (cb) {
        return cb();
      });
    }
    function finishedSync() {
      syncing = false;
      notifyListeners();
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
        notifyListeners();
      }
      last = now;
    }, 1000);

    dispatch({
      type: _time.SET_TIMER,
      payload: intv
    });

    return callbacks;
  };
}

function stopTimer() {
  return function (dispatch, getState) {
    var timer = (0, _timeSelectors.timerSelector)(getState());
    clearInterval(timer);
    dispatch({
      type: _time.SET_TIMER,
      payload: null
    });
  };
}
//# sourceMappingURL=TickerActionCreators.js.map
//# sourceMappingURL=TickerActionCreators.js.map
