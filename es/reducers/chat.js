import _extends from 'babel-runtime/helpers/extends';
import except from 'except';
import { RECEIVE_MOTD, RECEIVE_MESSAGE, SEND_MESSAGE, LOG, REMOVE_MESSAGE, REMOVE_USER_MESSAGES, REMOVE_ALL_MESSAGES, MUTE_USER, UNMUTE_USER } from '../constants/ActionTypes';
import reduceNotifications from './chat/notifications';

var initialState = {
  /**
   * Message of the Day, a message shown at the very top of the Chat box. Can be
   * used for announcements, for example, or a welcome message.
   * Stored here as a parsed message, so an array of message tokens from the
   * u-wave-parse-chat-markup module.
   */
  motd: [],
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
    return (
      // keep if this message is not in flight
      !message.inFlight ||
      // or is not the message we're looking for
      message.userID !== remove.userID || message.text !== remove.text
    );
  });
}

export default function reduce() {
  var _extends2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;
  var messages = state.messages;

  switch (type) {
    case RECEIVE_MOTD:
      return _extends({}, state, {
        motd: payload
      });
    case SEND_MESSAGE:
      {
        var inFlightMessage = {
          _id: 'inflight' + Date.now(),
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
        return _extends({}, state, {
          messages: messages.concat([inFlightMessage])
        });
      }
    case RECEIVE_MESSAGE:
      {
        var message = _extends({}, payload.message, {
          type: 'chat',
          inFlight: false,
          parsedText: payload.parsed,
          isMention: payload.isMention
        });

        return _extends({}, state, {
          messages: removeInFlightMessage(messages, message).concat([message])
        });
      }
    case LOG:
      {
        var logMessage = {
          type: 'log',
          _id: 'log-' + payload._id,
          text: payload.text
        };
        return _extends({}, state, {
          messages: messages.concat([logMessage])
        });
      }

    case REMOVE_MESSAGE:
      return _extends({}, state, {
        messages: state.messages.filter(function (msg) {
          return msg._id !== payload._id;
        })
      });
    case REMOVE_USER_MESSAGES:
      return _extends({}, state, {
        messages: state.messages.filter(function (msg) {
          return msg.userID !== payload.userID;
        })
      });
    case REMOVE_ALL_MESSAGES:
      return _extends({}, state, {
        messages: []
      });

    case MUTE_USER:
      return _extends({}, state, {
        mutedUsers: _extends({}, state.mutedUsers, (_extends2 = {}, _extends2[payload.userID] = {
          mutedBy: payload.moderatorID,
          expiresAt: payload.expiresAt,
          expirationTimer: payload.expirationTimer
        }, _extends2))
      });
    case UNMUTE_USER:
      return _extends({}, state, {
        mutedUsers: except(state.mutedUsers, payload.userID)
      });

    default:
      {
        var nextMessages = reduceNotifications(messages, action);
        if (nextMessages !== messages) {
          return _extends({}, state, { messages: nextMessages });
        }
        return state;
      }
  }
}
//# sourceMappingURL=chat.js.map
