'use strict';

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _splitargs2 = require('splitargs');

var _splitargs3 = _interopRequireDefault(_splitargs2);

var _uWaveParseChatMarkup = require('u-wave-parse-chat-markup');

var _uWaveParseChatMarkup2 = _interopRequireDefault(_uWaveParseChatMarkup);

var _playMentionSound = require('../utils/playMentionSound');

var _playMentionSound2 = _interopRequireDefault(_playMentionSound);

var _chat = require('../constants/actionTypes/chat');

var _RequestActionCreators = require('./RequestActionCreators');

var _ChatCommands = require('../utils/ChatCommands');

var _chatSelectors = require('../selectors/chatSelectors');

var _settingSelectors = require('../selectors/settingSelectors');

var _userSelectors = require('../selectors/userSelectors');

var _timeSelectors = require('../selectors/timeSelectors');

var _chatMentions = require('../utils/chatMentions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function receiveMotd(text) {
  return {
    type: _chat.RECEIVE_MOTD,
    payload: (0, _uWaveParseChatMarkup2.default)(text, {})
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

function prepareMessage(state, user, text) {
  var parseOpts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var parsed = (0, _uWaveParseChatMarkup2.default)(text, parseOpts);
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
    var mute = (0, _chatSelectors.currentUserMuteSelector)(state);
    if (mute) {
      var timeLeft = (0, _ms2.default)(mute.expiresAt - Date.now(), { long: true });
      dispatch(log('You have been muted, and cannot chat for another ' + timeLeft + '.'));
      return;
    }

    var users = (0, _userSelectors.userListSelector)(state);
    var message = prepareMessage(state, sender, text, {
      mentions: [].concat(users.map(function (user) {
        return user.username;
      }), (0, _chatMentions.getAvailableGroupMentions)(sender))
    });
    dispatch(message);
  };
}

function inputMessage(text) {
  return function (dispatch, getState) {
    if (text[0] === '/') {
      var _splitargs = (0, _splitargs3.default)(text.slice(1)),
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
    var settings = (0, _settingSelectors.settingsSelector)(getState());
    var currentUser = (0, _userSelectors.currentUserSelector)(getState());
    var users = (0, _userSelectors.userListSelector)(getState());
    var sender = (0, _arrayFind2.default)(users, function (user) {
      return user._id === message.userID;
    });
    var mentions = [].concat(users.map(function (user) {
      return user.username;
    }), (0, _chatMentions.getAvailableGroupMentions)(sender));

    if (isMuted(getState(), message.userID)) {
      return;
    }

    var parsed = (0, _uWaveParseChatMarkup2.default)(message.text, { mentions: mentions });
    (0, _chatMentions.resolveMentions)(parsed, getState());

    var isMention = currentUser ? (0, _chatMentions.hasMention)(parsed, currentUser._id) : false;

    dispatch({
      type: _chat.RECEIVE_MESSAGE,
      payload: {
        message: (0, _extends3.default)({}, message, {
          user: sender
        }),
        isMention: isMention,
        parsed: parsed
      }
    });

    if (isMention && settings.mentionSound) {
      (0, _playMentionSound2.default)();
    }
  };
}

function removeMessage(id) {
  return {
    type: _chat.REMOVE_MESSAGE,
    payload: { _id: id }
  };
}

function removeMessagesByUser(userID) {
  return {
    type: _chat.REMOVE_USER_MESSAGES,
    payload: { userID: userID }
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
    payload: { userID: userID }
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
      payload: { userID: userID, moderatorID: moderatorID }
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
  return (0, _RequestActionCreators.put)('/motd', { motd: text }, {
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
        type: _chat.SET_MOTD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=ChatActionCreators.js.map
//# sourceMappingURL=ChatActionCreators.js.map
