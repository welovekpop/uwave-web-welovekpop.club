import _extends from 'babel-runtime/helpers/extends';
import find from 'array-find';
import ms from 'ms';
import splitargs from 'splitargs';
import parseChatMarkup from 'u-wave-parse-chat-markup';
import flashDocumentTitle from 'flash-document-title';
import playMentionSound from '../utils/playMentionSound';
import { RECEIVE_MOTD, SET_MOTD_START, SET_MOTD_COMPLETE, SEND_MESSAGE, RECEIVE_MESSAGE, LOG, REMOVE_MESSAGE, REMOVE_USER_MESSAGES, REMOVE_ALL_MESSAGES, MUTE_USER, UNMUTE_USER } from '../constants/actionTypes/chat';
import { put } from './RequestActionCreators';
import { execute } from '../utils/ChatCommands';
import { muteTimeoutsSelector, mutedUserIDsSelector, currentUserMuteSelector } from '../selectors/chatSelectors';
import { settingsSelector } from '../selectors/settingSelectors';
import { currentUserSelector, userListSelector, userHasRoleSelector, currentUserHasRoleSelector } from '../selectors/userSelectors';
import { currentTimeSelector } from '../selectors/timeSelectors';

import { getAvailableGroupMentions, resolveMentions, hasMention } from '../utils/chatMentions';

export function receiveMotd(text) {
  return {
    type: RECEIVE_MOTD,
    payload: text
  };
}

var logIdx = Date.now();
export function log(text) {
  logIdx += 1;
  return {
    type: LOG,
    payload: {
      _id: logIdx,
      text: text
    }
  };
}

export function prepareMessage(state, user, text) {
  var parseOpts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var parsed = parseChatMarkup(text, parseOpts);
  resolveMentions(parsed, state);
  return {
    type: SEND_MESSAGE,
    payload: {
      user: user,
      message: text,
      parsed: parsed
    }
  };
}

export function sendChat(text) {
  return function (dispatch, getState) {
    var state = getState();
    var sender = currentUserSelector(state);
    var hasRole = currentUserHasRoleSelector(state);
    var mute = currentUserMuteSelector(state);
    if (mute) {
      var timeLeft = ms(mute.expiresAt - Date.now(), { long: true });
      dispatch(log('You have been muted, and cannot chat for another ' + timeLeft + '.'));
      return;
    }

    var users = userListSelector(state);
    var message = prepareMessage(state, sender, text, {
      mentions: [].concat(users.map(function (user) {
        return user.username;
      }), getAvailableGroupMentions(hasRole))
    });
    dispatch(message);
  };
}

export function inputMessage(text) {
  return function (dispatch, getState) {
    if (text[0] === '/') {
      var _splitargs = splitargs(text.slice(1)),
          command = _splitargs[0],
          params = _splitargs.slice(1);

      if (command) {
        var result = execute(getState(), command, params);
        if (result) {
          dispatch(result);
        }
        return;
      }
    }
    dispatch(sendChat(text));
  };
}

function isMuted(state, userID) {
  return mutedUserIDsSelector(state).indexOf(userID) !== -1;
}

export function receive(message) {
  return function (dispatch, getState) {
    var state = getState();
    var settings = settingsSelector(state);
    var currentUser = currentUserSelector(state);
    var users = userListSelector(state);
    var sender = find(users, function (user) {
      return user._id === message.userID;
    });
    var senderHasRole = userHasRoleSelector(state)(sender);
    var mentions = [].concat(users.map(function (user) {
      return user.username;
    }), getAvailableGroupMentions(function (mention) {
      return senderHasRole('chat.mention.' + mention);
    }));

    if (isMuted(state, message.userID)) {
      return;
    }

    var parsed = parseChatMarkup(message.text, { mentions: mentions });
    resolveMentions(parsed, state);

    var isMention = currentUser ? hasMention(parsed, currentUser._id) : false;

    dispatch({
      type: RECEIVE_MESSAGE,
      payload: {
        message: _extends({}, message, {
          user: sender
        }),
        isMention: isMention,
        parsed: parsed
      }
    });

    if (isMention) {
      if (settings.mentionSound) {
        playMentionSound();
      }
      flashDocumentTitle('\uD83D\uDCAC ' + sender.username);
    }
  };
}

export function removeMessage(id) {
  return {
    type: REMOVE_MESSAGE,
    payload: { _id: id }
  };
}

export function removeMessagesByUser(userID) {
  return {
    type: REMOVE_USER_MESSAGES,
    payload: { userID: userID }
  };
}

export function removeAllMessages() {
  return {
    type: REMOVE_ALL_MESSAGES
  };
}

function expireMute(userID) {
  return {
    type: UNMUTE_USER,
    payload: { userID: userID }
  };
}

export function muteUser(userID, _ref) {
  var moderatorID = _ref.moderatorID,
      expiresAt = _ref.expiresAt;

  return function (dispatch, getState) {
    var currentTime = currentTimeSelector(getState());
    var expireIn = expiresAt - currentTime;

    dispatch({
      type: MUTE_USER,
      payload: {
        userID: userID,
        moderatorID: moderatorID,
        expiresAt: expiresAt,
        expirationTimer: expireIn > 0 ? setTimeout(function () {
          return dispatch(expireMute(userID));
        }, expireIn) : null
      }
    });
  };
}

export function unmuteUser(userID, _ref2) {
  var moderatorID = _ref2.moderatorID;

  return function (dispatch, getState) {
    var muteTimeouts = muteTimeoutsSelector(getState());
    if (muteTimeouts && muteTimeouts[userID]) {
      clearTimeout(muteTimeouts[userID]);
    }
    dispatch({
      type: UNMUTE_USER,
      payload: { userID: userID, moderatorID: moderatorID }
    });
  };
}

export function setMotdStart(motd) {
  return {
    type: SET_MOTD_START,
    payload: motd
  };
}

export function setMotdComplete(motd) {
  return {
    type: SET_MOTD_COMPLETE,
    payload: motd
  };
}

export function setMotd(text) {
  return put('/motd', { motd: text }, {
    onStart: function onStart() {
      return setMotdStart(text);
    },
    onComplete: function onComplete(_ref3) {
      var data = _ref3.data;
      return function (dispatch) {
        dispatch(setMotdComplete(data.motd));
        dispatch(log('Message of the Day is now: ' + data.motd));
      };
    },
    onError: function onError(error) {
      return {
        type: SET_MOTD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=ChatActionCreators.js.map
