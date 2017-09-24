import createDebug from 'debug';
import WebSocket from 'reconnecting-websocket';

import { LOGIN_COMPLETE, SOCKET_CONNECT, SOCKET_RECONNECT, SOCKET_DISCONNECTED, SOCKET_CONNECTED } from '../constants/actionTypes/auth';
import { SEND_MESSAGE } from '../constants/actionTypes/chat';
import { DO_UPVOTE, DO_DOWNVOTE } from '../constants/actionTypes/votes';
import { SHOULD_RANDOMIZE } from '../_wlk/constants';

import { advance as _advance } from '../actions/BoothActionCreators';
import { receive as chatReceive, removeMessage, removeMessagesByUser, removeAllMessages, muteUser as _chatMute, unmuteUser as _chatUnmute } from '../actions/ChatActionCreators';
import { cyclePlaylist } from '../actions/PlaylistActionCreators';
import { join as userJoin, leave as userLeave, changeUsername, changeUserRole, receiveGuestCount } from '../actions/UserActionCreators';
import { clearWaitlist, joinedWaitlist, leftWaitlist, updatedWaitlist, movedInWaitlist, setLocked as setWaitlistLocked } from '../actions/WaitlistActionCreators';
import { favorited, receiveVote } from '../actions/VoteActionCreators';

var debug = createDebug('uwave:websocket');

function defaultUrl() {
  var port = location.port || (location.protocol === 'https:' ? 443 : 80);
  var protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  return protocol + '//' + location.hostname + ':' + port;
}

var actions = {
  chatMessage: function chatMessage(_ref) {
    var id = _ref.id,
        userID = _ref.userID,
        message = _ref.message,
        timestamp = _ref.timestamp;

    return chatReceive({
      _id: id,
      userID: userID,
      text: message,
      timestamp: timestamp
    });
  },
  chatDelete: function chatDelete() {
    return removeAllMessages();
  },
  chatDeleteByID: function chatDeleteByID(_ref2) {
    var _id = _ref2._id;

    return removeMessage(_id);
  },
  chatDeleteByUser: function chatDeleteByUser(_ref3) {
    var userID = _ref3.userID;

    return removeMessagesByUser(userID);
  },
  chatMute: function chatMute(_ref4) {
    var userID = _ref4.userID,
        expiresAt = _ref4.expiresAt,
        moderatorID = _ref4.moderatorID;

    return _chatMute(userID, { moderatorID: moderatorID, expiresAt: expiresAt });
  },
  chatUnmute: function chatUnmute(_ref5) {
    var userID = _ref5.userID,
        moderatorID = _ref5.moderatorID;

    return _chatUnmute(userID, { moderatorID: moderatorID });
  },
  advance: function advance(booth) {
    return _advance(booth);
  },
  favorite: function favorite(_ref6) {
    var userID = _ref6.userID,
        historyID = _ref6.historyID;

    return favorited({ userID: userID, historyID: historyID });
  },
  vote: function vote(_ref7) {
    var _id = _ref7._id,
        value = _ref7.value;

    return receiveVote({ userID: _id, vote: value });
  },
  waitlistJoin: function waitlistJoin(_ref8) {
    var userID = _ref8.userID,
        waitlist = _ref8.waitlist;

    return joinedWaitlist({ userID: userID, waitlist: waitlist });
  },
  waitlistLeave: function waitlistLeave(_ref9) {
    var userID = _ref9.userID,
        waitlist = _ref9.waitlist;

    return leftWaitlist({ userID: userID, waitlist: waitlist });
  },
  waitlistUpdate: function waitlistUpdate(waitlist) {
    return updatedWaitlist(waitlist);
  },
  waitlistLock: function waitlistLock(_ref10) {
    var locked = _ref10.locked;

    return setWaitlistLocked(locked);
  },
  waitlistMove: function waitlistMove(_ref11) {
    var userID = _ref11.userID,
        moderatorID = _ref11.moderatorID,
        position = _ref11.position,
        waitlist = _ref11.waitlist;

    return movedInWaitlist({ userID: userID, moderatorID: moderatorID, position: position, waitlist: waitlist });
  },

  // TODO Treat moderator force-add and force-remove differently from voluntary
  // joins and leaves.
  waitlistAdd: function waitlistAdd(_ref12) {
    var userID = _ref12.userID,
        waitlist = _ref12.waitlist;

    return joinedWaitlist({ userID: userID, waitlist: waitlist });
  },
  waitlistRemove: function waitlistRemove(_ref13) {
    var userID = _ref13.userID,
        waitlist = _ref13.waitlist;

    return leftWaitlist({ userID: userID, waitlist: waitlist });
  },
  waitlistClear: function waitlistClear() {
    return clearWaitlist();
  },
  playlistCycle: function playlistCycle(_ref14) {
    var playlistID = _ref14.playlistID;

    return cyclePlaylist(playlistID);
  },
  join: function join(user) {
    return userJoin(user);
  },
  leave: function leave(userID) {
    return userLeave(userID);
  },
  nameChange: function nameChange(_ref15) {
    var userID = _ref15.userID,
        username = _ref15.username;

    return changeUsername(userID, username);
  },
  roleChange: function roleChange(_ref16) {
    var userID = _ref16.userID,
        role = _ref16.role;

    return changeUserRole(userID, role);
  },

  guests: receiveGuestCount,

  'wlk:shouldRandomize': function wlkShouldRandomize(_ref17) {
    var value = _ref17.value;
    return {
      type: SHOULD_RANDOMIZE,
      payload: value
    };
  }
};

export default function middleware() {
  var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref18$url = _ref18.url,
      url = _ref18$url === undefined ? defaultUrl() : _ref18$url;

  return function (_ref19) {
    var dispatch = _ref19.dispatch,
        getState = _ref19.getState;

    var socket = void 0;
    var queue = [];
    var sentJWT = false;
    var opened = false;

    function isOpen() {
      return socket && opened;
    }

    function sendJWT(jwt) {
      socket.send(jwt);
      sentJWT = true;
    }

    function maybeAuthenticateOnConnect(state) {
      var jwt = state.auth.jwt;
      debug('open', jwt);
      if (jwt) {
        sendJWT(jwt);
      } else {
        sentJWT = false;
      }
    }

    function send(command, data) {
      if (isOpen()) {
        socket.send(JSON.stringify({ command: command, data: data }));
      } else {
        queue.push({ command: command, data: data });
      }
    }

    function drainQueuedMessages() {
      var messages = queue;
      queue = [];
      messages.forEach(function (msg) {
        send(msg.command, msg.data);
      });
    }

    function onOpen() {
      opened = true;
      dispatch({ type: SOCKET_CONNECTED });
      maybeAuthenticateOnConnect(getState());
    }

    function onClose() {
      opened = false;
      dispatch({ type: SOCKET_DISCONNECTED });
    }

    function onMessage(pack) {
      // Ignore keepalive messages.
      if (pack.data === '-') return;

      var _JSON$parse = JSON.parse(pack.data),
          command = _JSON$parse.command,
          data = _JSON$parse.data;

      debug(command, data);

      if (command === 'authenticated') {
        drainQueuedMessages();
        return;
      }

      if (typeof actions[command] === 'function') {
        var action = actions[command](data);
        if (action) {
          dispatch(action);
          return;
        }
      }
      debug('!unknown socket message type');
    }

    return function (next) {
      return function (action) {
        var type = action.type,
            payload = action.payload;

        switch (type) {
          case SOCKET_RECONNECT:
            if (socket) {
              socket.close(undefined, undefined, { keepClosed: true });
            }
          // fall through
          case SOCKET_CONNECT:
            socket = new WebSocket(url);
            socket.addEventListener('message', onMessage);
            socket.addEventListener('open', onOpen);
            socket.addEventListener('close', onClose);
            socket.addEventListener('connecting', onClose);
            break;
          case SEND_MESSAGE:
            send('sendChat', payload.message);
            break;
          case DO_UPVOTE:
            send('vote', 1);
            break;
          case DO_DOWNVOTE:
            send('vote', -1);
            break;
          case LOGIN_COMPLETE:
            if (!sentJWT && isOpen()) {
              sendJWT(payload.jwt);
            }
            break;
          default:
            break;
        }
        next(action);
      };
    };
  };
}
//# sourceMappingURL=socket.js.map
