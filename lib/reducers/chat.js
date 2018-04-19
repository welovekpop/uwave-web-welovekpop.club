"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _except = _interopRequireDefault(require("except"));

var _ActionTypes = require("../constants/ActionTypes");

var _notifications = _interopRequireDefault(require("./chat/notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  /**
   * Message of the Day, a message shown at the very top of the Chat box. Can be
   * used for announcements, for example, or a welcome message.
   */
  motd: '',

  /**
   * All messages, including log messages and in-flight messages.
   */
  messages: [],

  /**
   * Mutes and their expiration times.
   */
  mutedUsers: {}
};

function removeInFlightMessage(messages, remove) {
  return messages.filter(function (message) {
    return (// keep if this message is not in flight
      !message.inFlight || // or is not the message we're looking for
      message.userID !== remove.userID || message.text !== remove.text
    );
  });
}

function reduce(state, action) {
  var _extends2;

  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;
  var _state = state,
      messages = _state.messages;

  switch (type) {
    case _ActionTypes.RECEIVE_MOTD:
      return (0, _extends3.default)({}, state, {
        motd: payload
      });

    case _ActionTypes.SEND_MESSAGE:
      {
        var inFlightMessage = {
          _id: "inflight" + Date.now(),
          type: 'chat',
          user: payload.user,
          userID: payload.user._id,
          text: payload.message,
          parsedText: payload.parsed,
          timestamp: Date.now(),
          inFlight: true,
          // Will be resolved when the message is received instead.
          isMention: false
        };
        return (0, _extends3.default)({}, state, {
          messages: messages.concat([inFlightMessage])
        });
      }

    case _ActionTypes.RECEIVE_MESSAGE:
      {
        var message = (0, _extends3.default)({}, payload.message, {
          type: 'chat',
          inFlight: false,
          parsedText: payload.parsed,
          isMention: payload.isMention
        });
        return (0, _extends3.default)({}, state, {
          messages: removeInFlightMessage(messages, message).concat([message])
        });
      }

    case _ActionTypes.LOG:
      {
        var logMessage = {
          type: 'log',
          _id: "log-" + payload._id,
          text: payload.text
        };
        return (0, _extends3.default)({}, state, {
          messages: messages.concat([logMessage])
        });
      }

    case _ActionTypes.REMOVE_MESSAGE:
      return (0, _extends3.default)({}, state, {
        messages: state.messages.filter(function (msg) {
          return msg._id !== payload._id;
        })
      });

    case _ActionTypes.REMOVE_USER_MESSAGES:
      return (0, _extends3.default)({}, state, {
        messages: state.messages.filter(function (msg) {
          return msg.userID !== payload.userID;
        })
      });

    case _ActionTypes.REMOVE_ALL_MESSAGES:
      return (0, _extends3.default)({}, state, {
        messages: []
      });

    case _ActionTypes.MUTE_USER:
      return (0, _extends3.default)({}, state, {
        mutedUsers: (0, _extends3.default)({}, state.mutedUsers, (_extends2 = {}, _extends2[payload.userID] = {
          mutedBy: payload.moderatorID,
          expiresAt: payload.expiresAt,
          expirationTimer: payload.expirationTimer
        }, _extends2))
      });

    case _ActionTypes.UNMUTE_USER:
      return (0, _extends3.default)({}, state, {
        mutedUsers: (0, _except.default)(state.mutedUsers, payload.userID)
      });

    default:
      {
        var nextMessages = (0, _notifications.default)(messages, action);

        if (nextMessages !== messages) {
          return (0, _extends3.default)({}, state, {
            messages: nextMessages
          });
        }

        return state;
      }
  }
} //# sourceMappingURL=chat.js.map
//# sourceMappingURL=chat.js.map
