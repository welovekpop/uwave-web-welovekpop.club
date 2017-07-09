'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipCurrentDJ = skipCurrentDJ;
exports.removeCurrentDJ = removeCurrentDJ;
exports.removeWaitlistUserStart = removeWaitlistUserStart;
exports.removeWaitlistUserComplete = removeWaitlistUserComplete;
exports.removeWaitlistUser = removeWaitlistUser;
exports.moveWaitlistUserStart = moveWaitlistUserStart;
exports.moveWaitlistUserComplete = moveWaitlistUserComplete;
exports.moveWaitlistUser = moveWaitlistUser;
exports.setUserRoleStart = setUserRoleStart;
exports.setUserRoleComplete = setUserRoleComplete;
exports.setUserRole = setUserRole;
exports.deleteChatMessage = deleteChatMessage;
exports.deleteChatMessagesByUser = deleteChatMessagesByUser;
exports.deleteAllChatMessages = deleteAllChatMessages;
exports.muteUserStart = muteUserStart;
exports.muteUserComplete = muteUserComplete;
exports.muteUser = muteUser;
exports.unmuteUserStart = unmuteUserStart;
exports.unmuteUserComplete = unmuteUserComplete;
exports.unmuteUser = unmuteUser;
exports.banUserStart = banUserStart;
exports.banUserComplete = banUserComplete;
exports.banUser = banUser;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _boothSelectors = require('../selectors/boothSelectors');

var _moderation = require('../constants/actionTypes/moderation');

var _ChatActionCreators = require('./ChatActionCreators');

var _RequestActionCreators = require('./RequestActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function skipCurrentDJ() {
  var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var shouldRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return function (dispatch, getState) {
    var dj = (0, _boothSelectors.djSelector)(getState());
    if (!dj) {
      return null;
    }
    var payload = {
      userID: dj._id,
      reason: reason,
      remove: shouldRemove
    };
    return dispatch((0, _RequestActionCreators.post)('/booth/skip', payload, {
      onStart: function onStart() {
        return { type: _moderation.SKIP_DJ_START, payload: payload };
      },
      onComplete: function onComplete() {
        return { type: _moderation.SKIP_DJ_COMPLETE, payload: payload };
      },
      onError: function onError(error) {
        return {
          type: _moderation.SKIP_DJ_COMPLETE,
          error: true,
          payload: error,
          meta: payload
        };
      }
    }));
  };
}

function removeCurrentDJ() {
  var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return skipCurrentDJ(reason, true);
}

function removeWaitlistUserStart(user) {
  return {
    type: _moderation.REMOVE_USER_START,
    payload: { user: user }
  };
}

function removeWaitlistUserComplete(user) {
  return {
    type: _moderation.REMOVE_USER_COMPLETE,
    payload: { user: user }
  };
}

function removeWaitlistUser(user) {
  return function (dispatch, getState) {
    dispatch(removeWaitlistUserStart(user));

    var currentDJ = (0, _boothSelectors.djSelector)(getState());
    var promise = void 0;
    if (currentDJ && currentDJ._id === user._id) {
      promise = dispatch(removeCurrentDJ());
    } else {
      promise = dispatch((0, _RequestActionCreators.del)('/waitlist/' + user._id));
    }

    return promise.then(function () {
      return dispatch(removeWaitlistUserComplete(user));
    }).catch(function (error) {
      return dispatch({
        type: _moderation.REMOVE_USER_COMPLETE,
        error: true,
        payload: error
      });
    });
  };
}

function moveWaitlistUserStart(user, position) {
  return {
    type: _moderation.MOVE_USER_START,
    payload: { user: user, position: position }
  };
}

function moveWaitlistUserComplete(user, position) {
  return {
    type: _moderation.MOVE_USER_COMPLETE,
    payload: { user: user, position: position }
  };
}

function moveWaitlistUser(user, position) {
  return (0, _RequestActionCreators.put)('/waitlist/move', { userID: user._id, position: position }, {
    onStart: function onStart() {
      return moveWaitlistUserStart(user, position);
    },
    onComplete: function onComplete() {
      return moveWaitlistUserComplete(user, position);
    },
    onError: function onError(error) {
      return {
        type: _moderation.MOVE_USER_COMPLETE,
        error: true,
        payload: error,
        meta: { user: user, position: position }
      };
    }
  });
}

function setUserRoleStart(user, role) {
  return {
    type: _moderation.SET_USER_ROLE_START,
    payload: { user: user, role: role }
  };
}

function setUserRoleComplete(user, role) {
  return {
    type: _moderation.SET_USER_ROLE_COMPLETE,
    payload: { user: user, role: role }
  };
}

function setUserRole(user, role) {
  var userID = (typeof user === 'undefined' ? 'undefined' : (0, _typeof3.default)(user)) === 'object' ? user._id : user;
  return (0, _RequestActionCreators.put)('/users/' + userID + '/role', { role: role }, {
    onStart: function onStart() {
      return setUserRoleStart(user, role);
    },
    onComplete: function onComplete() {
      return setUserRoleComplete(user, role);
    },
    onError: function onError(error) {
      return {
        type: _moderation.SET_USER_ROLE_COMPLETE,
        error: true,
        payload: error,
        meta: { user: user, role: role }
      };
    }
  });
}

function deleteChatMessage(id) {
  return (0, _RequestActionCreators.del)('/chat/' + id, {}, {
    onStart: function onStart() {
      return (0, _ChatActionCreators.removeMessage)(id);
    },
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error,
        meta: { id: id }
      };
    }
  });
}

function deleteChatMessagesByUser(userID) {
  return (0, _RequestActionCreators.del)('/chat/user/' + userID, {}, {
    onComplete: function onComplete() {
      return (0, _ChatActionCreators.removeMessagesByUser)(userID);
    },
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error,
        meta: { userID: userID }
      };
    }
  });
}

function deleteAllChatMessages() {
  return (0, _RequestActionCreators.del)('/chat', {}, {
    onComplete: _ChatActionCreators.removeAllMessages,
    onError: function onError(error) {
      return {
        type: undefined,
        error: true,
        payload: error
      };
    }
  });
}

function muteUserStart(userID, duration) {
  return {
    type: _moderation.MUTE_USER_START,
    payload: { userID: userID, duration: duration }
  };
}

function muteUserComplete(userID, duration) {
  return {
    type: _moderation.MUTE_USER_COMPLETE,
    payload: { userID: userID, duration: duration }
  };
}

/**
 * Mute a user in the chat. Defaults to 10 minutes.
 */
function muteUser(user) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10 * 60 * 1000;

  var userID = (typeof user === 'undefined' ? 'undefined' : (0, _typeof3.default)(user)) === 'object' ? user._id : user;
  return (0, _RequestActionCreators.post)('/users/' + userID + '/mute', { time: duration }, {
    onStart: function onStart() {
      return muteUserStart(userID, duration);
    },
    onComplete: function onComplete() {
      return muteUserComplete(userID, duration);
    },
    onError: function onError(error) {
      return {
        type: _moderation.MUTE_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function unmuteUserStart(userID) {
  return {
    type: _moderation.UNMUTE_USER_START,
    payload: { userID: userID }
  };
}

function unmuteUserComplete(userID) {
  return {
    type: _moderation.UNMUTE_USER_COMPLETE,
    payload: { userID: userID }
  };
}

function unmuteUser(user) {
  var userID = (typeof user === 'undefined' ? 'undefined' : (0, _typeof3.default)(user)) === 'object' ? user._id : user;
  return (0, _RequestActionCreators.del)('/users/' + userID + '/mute', {}, {
    onStart: function onStart() {
      return unmuteUserStart(userID);
    },
    onComplete: function onComplete() {
      return unmuteUserComplete(userID);
    },
    onError: function onError(error) {
      return {
        type: _moderation.UNMUTE_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function banUserStart(userID, duration, permanent) {
  return {
    type: _moderation.BAN_USER_START,
    payload: { userID: userID, duration: duration, permanent: permanent }
  };
}

function banUserComplete(ban) {
  return {
    type: _moderation.BAN_USER_COMPLETE,
    payload: ban
  };
}

/**
 * Ban a user. Defaults to 24 hours.
 */
function banUser(user, _ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 24 * 60 * 60 * 1000 : _ref$duration,
      _ref$permanent = _ref.permanent,
      permanent = _ref$permanent === undefined ? false : _ref$permanent;

  var userID = (typeof user === 'undefined' ? 'undefined' : (0, _typeof3.default)(user)) === 'object' ? user._id : user;
  return (0, _RequestActionCreators.post)('/bans', { userID: userID, duration: duration, permanent: permanent }, {
    onStart: function onStart() {
      return banUserStart(userID, duration, permanent);
    },
    onComplete: function onComplete(_ref2) {
      var data = _ref2.data;
      return banUserComplete(data);
    },
    onError: function onError(error) {
      return {
        type: _moderation.BAN_USER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=ModerationActionCreators.js.map
//# sourceMappingURL=ModerationActionCreators.js.map
