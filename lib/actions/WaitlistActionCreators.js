'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWaitList = setWaitList;
exports.setLocked = setLocked;
exports.clearWaitlist = clearWaitlist;
exports.updatedWaitlist = updatedWaitlist;
exports.joinWaitlist = joinWaitlist;
exports.joinedWaitlist = joinedWaitlist;
exports.leaveWaitlist = leaveWaitlist;
exports.leftWaitlist = leftWaitlist;
exports.movedInWaitlist = movedInWaitlist;
exports.modLockWaitlist = modLockWaitlist;
exports.modUnlockWaitlist = modUnlockWaitlist;
exports.modClearWaitlist = modClearWaitlist;

var _waitlist = require('../constants/actionTypes/waitlist');

var _RequestActionCreators = require('./RequestActionCreators');

function setWaitList(data) {
  return {
    type: _waitlist.WAITLIST_LOAD,
    payload: {
      waitlist: data.waitlist,
      locked: data.locked
    }
  };
}

function setLocked(lock) {
  return {
    type: _waitlist.WAITLIST_LOCK,
    payload: {
      locked: lock
    }
  };
}

function clearWaitlist() {
  return { type: _waitlist.WAITLIST_CLEAR };
}

function updatedWaitlist(waitlist) {
  return {
    type: _waitlist.WAITLIST_UPDATE,
    payload: { waitlist: waitlist }
  };
}

function joinWaitlist(user) {
  return function (dispatch) {
    if (!user) {
      return null;
    }
    // TODO don't post an object at all once the API server supports it
    return dispatch((0, _RequestActionCreators.post)('/waitlist', { userID: user._id }, {
      onStart: function onStart() {
        return { type: _waitlist.DO_JOIN_START };
      },
      onComplete: function onComplete(_ref) {
        var data = _ref.data;
        return {
          type: _waitlist.DO_JOIN_COMPLETE,
          payload: { waitlist: data }
        };
      },
      onError: function onError(error) {
        return {
          type: _waitlist.DO_JOIN_COMPLETE,
          error: true,
          payload: error
        };
      }
    }));
  };
}

function joinedWaitlist(_ref2) {
  var userID = _ref2.userID,
      waitlist = _ref2.waitlist;

  return {
    type: _waitlist.WAITLIST_JOIN,
    payload: { userID: userID, waitlist: waitlist }
  };
}

function leaveWaitlist(user) {
  return function (dispatch) {
    if (!user) {
      return null;
    }
    return dispatch((0, _RequestActionCreators.del)('/waitlist/' + user._id, {}, {
      onStart: function onStart() {
        return { type: _waitlist.DO_LEAVE_START };
      },
      onComplete: function onComplete(_ref3) {
        var data = _ref3.data;
        return {
          type: _waitlist.DO_LEAVE_COMPLETE,
          payload: { waitlist: data }
        };
      },
      onError: function onError(error) {
        return {
          type: _waitlist.DO_LEAVE_COMPLETE,
          error: true,
          payload: error
        };
      }
    }));
  };
}

function leftWaitlist(_ref4) {
  var userID = _ref4.userID,
      waitlist = _ref4.waitlist;

  return {
    type: _waitlist.WAITLIST_LEAVE,
    payload: { userID: userID, waitlist: waitlist }
  };
}

function movedInWaitlist(_ref5) {
  var userID = _ref5.userID,
      moderatorID = _ref5.moderatorID,
      position = _ref5.position,
      waitlist = _ref5.waitlist;

  return function (dispatch) {
    dispatch({
      type: _waitlist.WAITLIST_MOVE,
      payload: { userID: userID, position: position },
      meta: { moderatorID: moderatorID }
    });
    dispatch(updatedWaitlist(waitlist));
  };
}

function putLock(status) {
  return (0, _RequestActionCreators.put)('/waitlist/lock', { lock: status, clear: false }, {
    onStart: function onStart() {
      return {
        type: _waitlist.DO_LOCK_START,
        payload: { locked: status }
      };
    },
    onComplete: function onComplete(_ref6) {
      var data = _ref6.data;
      return {
        type: _waitlist.DO_LOCK_COMPLETE,
        payload: { locked: data.locked }
      };
    },
    onError: function onError(error) {
      return {
        type: _waitlist.DO_LOCK_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function modLockWaitlist() {
  return putLock(true);
}
function modUnlockWaitlist() {
  return putLock(false);
}

function modClearWaitlist() {
  return (0, _RequestActionCreators.del)('/waitlist', {}, {
    onStart: function onStart() {
      return { type: _waitlist.DO_CLEAR_START };
    },
    onComplete: function onComplete() {
      return { type: _waitlist.DO_CLEAR_COMPLETE };
    },
    onError: function onError(error) {
      return {
        type: _waitlist.DO_CLEAR_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=WaitlistActionCreators.js.map
//# sourceMappingURL=WaitlistActionCreators.js.map
