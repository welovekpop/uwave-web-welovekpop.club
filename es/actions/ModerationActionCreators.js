import { djSelector } from '../selectors/boothSelectors';
import { SKIP_DJ_START, SKIP_DJ_COMPLETE, MOVE_USER_START, MOVE_USER_COMPLETE, REMOVE_USER_START, REMOVE_USER_COMPLETE, MUTE_USER_START, MUTE_USER_COMPLETE, UNMUTE_USER_START, UNMUTE_USER_COMPLETE, BAN_USER_START, BAN_USER_COMPLETE, ADD_USER_ROLES_START, ADD_USER_ROLES_COMPLETE, REMOVE_USER_ROLES_START, REMOVE_USER_ROLES_COMPLETE } from '../constants/actionTypes/moderation';
import { removeMessage, removeMessagesByUser, removeAllMessages } from './ChatActionCreators';
import { del, post, put } from './RequestActionCreators';
export function skipCurrentDJ(reason, shouldRemove) {
  if (reason === void 0) {
    reason = '';
  }

  if (shouldRemove === void 0) {
    shouldRemove = false;
  }

  return function (dispatch, getState) {
    var dj = djSelector(getState());

    if (!dj) {
      return null;
    }

    var payload = {
      userID: dj._id,
      reason: reason,
      remove: shouldRemove
    };
    return dispatch(post('/booth/skip', payload, {
      onStart: function onStart() {
        return {
          type: SKIP_DJ_START,
          payload: payload
        };
      },
      onComplete: function onComplete() {
        return {
          type: SKIP_DJ_COMPLETE,
          payload: payload
        };
      },
      onError: function onError(error) {
        return {
          type: SKIP_DJ_COMPLETE,
          error: true,
          payload: error,
          meta: payload
        };
      }
    }));
  };
}
export function removeCurrentDJ(reason) {
  if (reason === void 0) {
    reason = '';
  }

  return skipCurrentDJ(reason, true);
}
export function removeWaitlistUserStart(user) {
  return {
    type: REMOVE_USER_START,
    payload: {
      user: user
    }
  };
}
export function removeWaitlistUserComplete(user) {
  return {
    type: REMOVE_USER_COMPLETE,
    payload: {
      user: user
    }
  };
}
export function removeWaitlistUser(user) {
  return function (dispatch, getState) {
    dispatch(removeWaitlistUserStart(user));
    var currentDJ = djSelector(getState());
    var promise;

    if (currentDJ && currentDJ._id === user._id) {
      promise = dispatch(removeCurrentDJ());
    } else {
      promise = dispatch(del("/waitlist/" + user._id));
    }

    return promise.then(function () {
      return dispatch(removeWaitlistUserComplete(user));
    }).catch(function (error) {
      return dispatch({
        type: REMOVE_USER_COMPLETE,
        error: true,
        payload: error
      });
    });
  };
}
export function moveWaitlistUserStart(user, position) {
  return {
    type: MOVE_USER_START,
    payload: {
      user: user,
      position: position
    }
  };
}
export function moveWaitlistUserComplete(user, position) {
  return {
    type: MOVE_USER_COMPLETE,
    payload: {
      user: user,
      position: position
    }
  };
}
export function moveWaitlistUser(user, position) {
  return put('/waitlist/move', {
    userID: user._id,
    position: position
  }, {
    onStart: function onStart() {
      return moveWaitlistUserStart(user, position);
    },
    onComplete: function onComplete() {
      return moveWaitlistUserComplete(user, position);
    },
    onError: function onError(error) {
      return {
        type: MOVE_USER_COMPLETE,
        error: true,
        payload: error,
        meta: {
          user: user,
          position: position
        }
      };
    }
  });
}
export function addUserRole(user, role) {
  var userID = typeof user === 'object' ? user._id : user;
  return put("/users/" + userID + "/roles/" + role, {}, {
    onStart: function onStart() {
      return {
        type: ADD_USER_ROLES_START,
        payload: {
          user: user,
          roles: [role]
        }
      };
    },
    onComplete: function onComplete() {
      return {
        type: ADD_USER_ROLES_COMPLETE,
        payload: {
          user: user,
          roles: [role]
        }
      };
    },
    onError: function onError(error) {
      return {
        type: ADD_USER_ROLES_COMPLETE,
        error: true,
        payload: error,
        meta: {
          user: user,
          roles: [role]
        }
      };
    }
  });
}
export function removeUserRole(user, role) {
  var userID = typeof user === 'object' ? user._id : user;
  return del("/users/" + userID + "/roles/" + role, {}, {
    onStart: function onStart() {
      return {
        type: REMOVE_USER_ROLES_START,
        payload: {
          user: user,
          roles: [role]
        }
      };
    },
    onComplete: function onComplete() {
      return {
        type: REMOVE_USER_ROLES_COMPLETE,
        payload: {
          user: user,
          roles: [role]
        }
      };
    },
    onError: function onError(error) {
      return {
        type: REMOVE_USER_ROLES_COMPLETE,
        error: true,
        payload: error,
        meta: {
          user: user,
          roles: [role]
        }
      };
    }
  });
}
export function deleteChatMessage(id) {
  return del("/chat/" + id, {}, {
    onStart: function onStart() {
      return removeMessage(id);
    },
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error,
        meta: {
          id: id
        }
      };
    }
  });
}
export function deleteChatMessagesByUser(userID) {
  return del("/chat/user/" + userID, {}, {
    onComplete: function onComplete() {
      return removeMessagesByUser(userID);
    },
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error,
        meta: {
          userID: userID
        }
      };
    }
  });
}
export function deleteAllChatMessages() {
  return del('/chat', {}, {
    onComplete: removeAllMessages,
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error
      };
    }
  });
}
export function muteUserStart(userID, duration) {
  return {
    type: MUTE_USER_START,
    payload: {
      userID: userID,
      duration: duration
    }
  };
}
export function muteUserComplete(userID, duration) {
  return {
    type: MUTE_USER_COMPLETE,
    payload: {
      userID: userID,
      duration: duration
    }
  };
}
/**
 * Mute a user in the chat. Defaults to 10 minutes.
 */

export function muteUser(user, duration) {
  if (duration === void 0) {
    duration = 10 * 60 * 1000;
  }

  var userID = typeof user === 'object' ? user._id : user;
  return post("/users/" + userID + "/mute", {
    time: duration
  }, {
    onStart: function onStart() {
      return muteUserStart(userID, duration);
    },
    onComplete: function onComplete() {
      return muteUserComplete(userID, duration);
    },
    onError: function onError(error) {
      return {
        type: MUTE_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function unmuteUserStart(userID) {
  return {
    type: UNMUTE_USER_START,
    payload: {
      userID: userID
    }
  };
}
export function unmuteUserComplete(userID) {
  return {
    type: UNMUTE_USER_COMPLETE,
    payload: {
      userID: userID
    }
  };
}
export function unmuteUser(user) {
  var userID = typeof user === 'object' ? user._id : user;
  return del("/users/" + userID + "/mute", {}, {
    onStart: function onStart() {
      return unmuteUserStart(userID);
    },
    onComplete: function onComplete() {
      return unmuteUserComplete(userID);
    },
    onError: function onError(error) {
      return {
        type: UNMUTE_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function banUserStart(userID, duration, permanent) {
  return {
    type: BAN_USER_START,
    payload: {
      userID: userID,
      duration: duration,
      permanent: permanent
    }
  };
}
export function banUserComplete(ban) {
  return {
    type: BAN_USER_COMPLETE,
    payload: ban
  };
}
/**
 * Ban a user. Defaults to 24 hours.
 */

export function banUser(user, _ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 24 * 60 * 60 * 1000 : _ref$duration,
      _ref$permanent = _ref.permanent,
      permanent = _ref$permanent === void 0 ? false : _ref$permanent;
  var userID = typeof user === 'object' ? user._id : user;
  return post('/bans', {
    userID: userID,
    duration: duration,
    permanent: permanent
  }, {
    onStart: function onStart() {
      return banUserStart(userID, duration, permanent);
    },
    onComplete: function onComplete(_ref2) {
      var data = _ref2.data;
      return banUserComplete(data);
    },
    onError: function onError(error) {
      return {
        type: BAN_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=ModerationActionCreators.js.map
