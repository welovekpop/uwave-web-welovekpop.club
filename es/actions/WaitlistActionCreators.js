import { WAITLIST_LOAD, WAITLIST_LOCK, WAITLIST_CLEAR, WAITLIST_UPDATE, WAITLIST_JOIN, WAITLIST_LEAVE, WAITLIST_MOVE, DO_JOIN_START, DO_JOIN_COMPLETE, DO_LEAVE_START, DO_LEAVE_COMPLETE, DO_LOCK_START, DO_LOCK_COMPLETE, DO_CLEAR_START, DO_CLEAR_COMPLETE } from '../constants/actionTypes/waitlist';
import { del, post, put } from './RequestActionCreators';

export function setWaitList(data) {
  return {
    type: WAITLIST_LOAD,
    payload: {
      waitlist: data.waitlist,
      locked: data.locked
    }
  };
}

export function setLocked(lock) {
  return {
    type: WAITLIST_LOCK,
    payload: {
      locked: lock
    }
  };
}

export function clearWaitlist() {
  return { type: WAITLIST_CLEAR };
}

export function updatedWaitlist(waitlist) {
  return {
    type: WAITLIST_UPDATE,
    payload: { waitlist: waitlist }
  };
}

export function joinWaitlist(user) {
  return function (dispatch) {
    if (!user) {
      return null;
    }
    // TODO don't post an object at all once the API server supports it
    return dispatch(post('/waitlist', { userID: user._id }, {
      onStart: function onStart() {
        return { type: DO_JOIN_START };
      },
      onComplete: function onComplete(_ref) {
        var data = _ref.data;
        return {
          type: DO_JOIN_COMPLETE,
          payload: { waitlist: data }
        };
      },
      onError: function onError(error) {
        return {
          type: DO_JOIN_COMPLETE,
          error: true,
          payload: error
        };
      }
    }));
  };
}

export function joinedWaitlist(_ref2) {
  var userID = _ref2.userID,
      waitlist = _ref2.waitlist;

  return {
    type: WAITLIST_JOIN,
    payload: { userID: userID, waitlist: waitlist }
  };
}

export function leaveWaitlist(user) {
  return function (dispatch) {
    if (!user) {
      return null;
    }
    return dispatch(del('/waitlist/' + user._id, {}, {
      onStart: function onStart() {
        return { type: DO_LEAVE_START };
      },
      onComplete: function onComplete(_ref3) {
        var data = _ref3.data;
        return {
          type: DO_LEAVE_COMPLETE,
          payload: { waitlist: data }
        };
      },
      onError: function onError(error) {
        return {
          type: DO_LEAVE_COMPLETE,
          error: true,
          payload: error
        };
      }
    }));
  };
}

export function leftWaitlist(_ref4) {
  var userID = _ref4.userID,
      waitlist = _ref4.waitlist;

  return {
    type: WAITLIST_LEAVE,
    payload: { userID: userID, waitlist: waitlist }
  };
}

export function movedInWaitlist(_ref5) {
  var userID = _ref5.userID,
      moderatorID = _ref5.moderatorID,
      position = _ref5.position,
      waitlist = _ref5.waitlist;

  return function (dispatch) {
    dispatch({
      type: WAITLIST_MOVE,
      payload: { userID: userID, position: position },
      meta: { moderatorID: moderatorID }
    });
    dispatch(updatedWaitlist(waitlist));
  };
}

function putLock(status) {
  return put('/waitlist/lock', { lock: status, clear: false }, {
    onStart: function onStart() {
      return {
        type: DO_LOCK_START,
        payload: { locked: status }
      };
    },
    onComplete: function onComplete(_ref6) {
      var data = _ref6.data;
      return {
        type: DO_LOCK_COMPLETE,
        payload: { locked: data.locked }
      };
    },
    onError: function onError(error) {
      return {
        type: DO_LOCK_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

export function modLockWaitlist() {
  return putLock(true);
}
export function modUnlockWaitlist() {
  return putLock(false);
}

export function modClearWaitlist() {
  return del('/waitlist', {}, {
    onStart: function onStart() {
      return { type: DO_CLEAR_START };
    },
    onComplete: function onComplete() {
      return { type: DO_CLEAR_COMPLETE };
    },
    onError: function onError(error) {
      return {
        type: DO_CLEAR_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=WaitlistActionCreators.js.map
