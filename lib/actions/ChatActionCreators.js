"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveMotd = receiveMotd;
exports.log = log;
exports.prepareMessage = prepareMessage;
exports.sendChat = sendChat;
exports.inputMessage = inputMessage;
exports.receive = receive;
exports.removeMessage = removeMessage;
exports.removeMessagesByUser = removeMessagesByUser;
exports.removeAllMessages = removeAllMessages;
exports.muteUser = muteUser;
exports.unmuteUser = unmuteUser;
exports.setMotdStart = setMotdStart;
exports.setMotdComplete = setMotdComplete;
exports.setMotd = setMotd;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _arrayFind = _interopRequireDefault(require("array-find"));

var _ms = _interopRequireDefault(require("ms"));

var _splitargs2 = _interopRequireDefault(require("splitargs"));

var _uWaveParseChatMarkup = _interopRequireDefault(require("u-wave-parse-chat-markup"));

var _flashDocumentTitle = _interopRequireDefault(require("flash-document-title"));

var _playMentionSound = _interopRequireDefault(require("../utils/playMentionSound"));

var _chat = require("../constants/actionTypes/chat");

var _RequestActionCreators = require("./RequestActionCreators");

var _ChatCommands = require("../utils/ChatCommands");

var _chatSelectors = require("../selectors/chatSelectors");

var _settingSelectors = require("../selectors/settingSelectors");

var _userSelectors = require("../selectors/userSelectors");

var _timeSelectors = require("../selectors/timeSelectors");

var _chatMentions = require("../utils/chatMentions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function receiveMotd(text) {
  return {
    type: _chat.RECEIVE_MOTD,
    payload: text
  };
}

var logIdx = Date.now();

function log(text) {
  logIdx += 1;
  return {
    type: _chat.LOG,
    payload: {
      _id: logIdx,
      text: text
    }
  };
}

function prepareMessage(state, user, text, parseOpts) {
  if (parseOpts === void 0) {
    parseOpts = {};
  }

  var parsed = (0, _uWaveParseChatMarkup.default)(text, parseOpts);
  (0, _chatMentions.resolveMentions)(parsed, state);
  return {
    type: _chat.SEND_MESSAGE,
    payload: {
      user: user,
      message: text,
      parsed: parsed
    }
  };
}

function sendChat(text) {
  return function (dispatch, getState) {
    var state = getState();
    var sender = (0, _userSelectors.currentUserSelector)(state);
    var hasRole = (0, _userSelectors.currentUserHasRoleSelector)(state);
    var mute = (0, _chatSelectors.currentUserMuteSelector)(state);

    if (mute) {
      var timeLeft = (0, _ms.default)(mute.expiresAt - Date.now(), {
        long: true
      });
      dispatch(log("You have been muted, and cannot chat for another " + timeLeft + "."));
      return;
    }

    var users = (0, _userSelectors.userListSelector)(state);
    var message = prepareMessage(state, sender, text, {
      mentions: users.map(function (user) {
        return user.username;
      }).concat((0, _chatMentions.getAvailableGroupMentions)(hasRole))
    });
    dispatch(message);
  };
}

function inputMessage(text) {
  return function (dispatch, getState) {
    if (text[0] === '/') {
      var _splitargs = (0, _splitargs2.default)(text.slice(1)),
          command = _splitargs[0],
          params = _splitargs.slice(1);

      if (command) {
        var result = (0, _ChatCommands.execute)(getState(), command, params);

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
  return (0, _chatSelectors.mutedUserIDsSelector)(state).indexOf(userID) !== -1;
}

function receive(message) {
  return function (dispatch, getState) {
    var state = getState();
    var settings = (0, _settingSelectors.settingsSelector)(state);
    var currentUser = (0, _userSelectors.currentUserSelector)(state);
    var users = (0, _userSelectors.userListSelector)(state);
    var sender = (0, _arrayFind.default)(users, function (user) {
      return user._id === message.userID;
    });
    var senderHasRole = (0, _userSelectors.userHasRoleSelector)(state)(sender);
    var mentions = users.map(function (user) {
      return user.username;
    }).concat((0, _chatMentions.getAvailableGroupMentions)(function (mention) {
      return senderHasRole("chat.mention." + mention);
    }));

    if (isMuted(state, message.userID)) {
      return;
    }

    var parsed = (0, _uWaveParseChatMarkup.default)(message.text, {
      mentions: mentions
    });
    (0, _chatMentions.resolveMentions)(parsed, state);
    var isMention = currentUser ? (0, _chatMentions.hasMention)(parsed, currentUser._id) : false;
    dispatch({
      type: _chat.RECEIVE_MESSAGE,
      payload: {
        message: (0, _objectSpread2.default)({}, message, {
          user: sender
        }),
        isMention: isMention,
        parsed: parsed
      }
    });

    if (isMention) {
      if (settings.mentionSound) {
        (0, _playMentionSound.default)();
      }

      (0, _flashDocumentTitle.default)("\uD83D\uDCAC " + sender.username);
    }
  };
}

function removeMessage(id) {
  return {
    type: _chat.REMOVE_MESSAGE,
    payload: {
      _id: id
    }
  };
}

function removeMessagesByUser(userID) {
  return {
    type: _chat.REMOVE_USER_MESSAGES,
    payload: {
      userID: userID
    }
  };
}

function removeAllMessages() {
  return {
    type: _chat.REMOVE_ALL_MESSAGES
  };
}

function expireMute(userID) {
  return {
    type: _chat.UNMUTE_USER,
    payload: {
      userID: userID
    }
  };
}

function muteUser(userID, _ref) {
  var moderatorID = _ref.moderatorID,
      expiresAt = _ref.expiresAt;
  return function (dispatch, getState) {
    var currentTime = (0, _timeSelectors.currentTimeSelector)(getState());
    var expireIn = expiresAt - currentTime;
    dispatch({
      type: _chat.MUTE_USER,
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

function unmuteUser(userID, _ref2) {
  var moderatorID = _ref2.moderatorID;
  return function (dispatch, getState) {
    var muteTimeouts = (0, _chatSelectors.muteTimeoutsSelector)(getState());

    if (muteTimeouts && muteTimeouts[userID]) {
      clearTimeout(muteTimeouts[userID]);
    }

    dispatch({
      type: _chat.UNMUTE_USER,
      payload: {
        userID: userID,
        moderatorID: moderatorID
      }
    });
  };
}

function setMotdStart(motd) {
  return {
    type: _chat.SET_MOTD_START,
    payload: motd
  };
}

function setMotdComplete(motd) {
  return {
    type: _chat.SET_MOTD_COMPLETE,
    payload: motd
  };
}

function setMotd(text) {
  return (0, _RequestActionCreators.put)('/motd', {
    motd: text
  }, {
    onStart: function onStart() {
      return setMotdStart(text);
    },
    onComplete: function onComplete(_ref3) {
      var data = _ref3.data;
      return function (dispatch) {
        dispatch(setMotdComplete(data.motd));
        dispatch(log("Message of the Day is now: " + data.motd));
      };
    },
    onError: function onError(error) {
      return {
        type: _chat.SET_MOTD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
} //# sourceMappingURL=ChatActionCreators.js.map
//# sourceMappingURL=ChatActionCreators.js.map
