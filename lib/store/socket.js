"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middleware;

var _debug = _interopRequireDefault(require("debug"));

var _reconnectingWebsocket = _interopRequireDefault(require("reconnecting-websocket"));

var _ActionTypes = require("../constants/ActionTypes");

var _constants = require("../_wlk/constants");

var _LoginActionCreators = require("../actions/LoginActionCreators");

var _BoothActionCreators = require("../actions/BoothActionCreators");

var _ChatActionCreators = require("../actions/ChatActionCreators");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _UserActionCreators = require("../actions/UserActionCreators");

var _WaitlistActionCreators = require("../actions/WaitlistActionCreators");

var _VoteActionCreators = require("../actions/VoteActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug.default)('uwave:websocket');

function defaultUrl() {
  var loc = window.location;
  var port = loc.port || (loc.protocol === 'https:' ? 443 : 80);
  var protocol = loc.protocol === 'https:' ? 'wss:' : 'ws:';
  return protocol + "//" + loc.hostname + ":" + port;
}

var actions = {
  chatMessage: function chatMessage(_ref) {
    var id = _ref.id,
        userID = _ref.userID,
        message = _ref.message,
        timestamp = _ref.timestamp;
    return (0, _ChatActionCreators.receive)({
      _id: id,
      userID: userID,
      text: message,
      timestamp: timestamp
    });
  },
  chatDelete: function chatDelete() {
    return (0, _ChatActionCreators.removeAllMessages)();
  },
  chatDeleteByID: function chatDeleteByID(_ref2) {
    var _id = _ref2._id;
    return (0, _ChatActionCreators.removeMessage)(_id);
  },
  chatDeleteByUser: function chatDeleteByUser(_ref3) {
    var userID = _ref3.userID;
    return (0, _ChatActionCreators.removeMessagesByUser)(userID);
  },
  chatMute: function chatMute(_ref4) {
    var userID = _ref4.userID,
        expiresAt = _ref4.expiresAt,
        moderatorID = _ref4.moderatorID;
    return (0, _ChatActionCreators.muteUser)(userID, {
      moderatorID: moderatorID,
      expiresAt: expiresAt
    });
  },
  chatUnmute: function chatUnmute(_ref5) {
    var userID = _ref5.userID,
        moderatorID = _ref5.moderatorID;
    return (0, _ChatActionCreators.unmuteUser)(userID, {
      moderatorID: moderatorID
    });
  },
  advance: function advance(booth) {
    return (0, _BoothActionCreators.advance)(booth);
  },
  skip: function skip(_ref6) {
    var userID = _ref6.userID,
        moderatorID = _ref6.moderatorID,
        reason = _ref6.reason;
    return (0, _BoothActionCreators.skipped)({
      userID: userID,
      moderatorID: moderatorID,
      reason: reason
    });
  },
  favorite: function favorite(_ref7) {
    var userID = _ref7.userID,
        historyID = _ref7.historyID;
    return (0, _VoteActionCreators.favorited)({
      userID: userID,
      historyID: historyID
    });
  },
  vote: function vote(_ref8) {
    var _id = _ref8._id,
        value = _ref8.value;
    return (0, _VoteActionCreators.receiveVote)({
      userID: _id,
      vote: value
    });
  },
  waitlistJoin: function waitlistJoin(_ref9) {
    var userID = _ref9.userID,
        waitlist = _ref9.waitlist;
    return (0, _WaitlistActionCreators.joinedWaitlist)({
      userID: userID,
      waitlist: waitlist
    });
  },
  waitlistLeave: function waitlistLeave(_ref10) {
    var userID = _ref10.userID,
        waitlist = _ref10.waitlist;
    return (0, _WaitlistActionCreators.leftWaitlist)({
      userID: userID,
      waitlist: waitlist
    });
  },
  waitlistUpdate: function waitlistUpdate(waitlist) {
    return (0, _WaitlistActionCreators.updatedWaitlist)(waitlist);
  },
  waitlistLock: function waitlistLock(_ref11) {
    var locked = _ref11.locked;
    return (0, _WaitlistActionCreators.setLocked)(locked);
  },
  waitlistMove: function waitlistMove(_ref12) {
    var userID = _ref12.userID,
        moderatorID = _ref12.moderatorID,
        position = _ref12.position,
        waitlist = _ref12.waitlist;
    return (0, _WaitlistActionCreators.movedInWaitlist)({
      userID: userID,
      moderatorID: moderatorID,
      position: position,
      waitlist: waitlist
    });
  },
  // TODO Treat moderator force-add and force-remove differently from voluntary
  // joins and leaves.
  waitlistAdd: function waitlistAdd(_ref13) {
    var userID = _ref13.userID,
        waitlist = _ref13.waitlist;
    return (0, _WaitlistActionCreators.joinedWaitlist)({
      userID: userID,
      waitlist: waitlist
    });
  },
  waitlistRemove: function waitlistRemove(_ref14) {
    var userID = _ref14.userID,
        waitlist = _ref14.waitlist;
    return (0, _WaitlistActionCreators.leftWaitlist)({
      userID: userID,
      waitlist: waitlist
    });
  },
  waitlistClear: function waitlistClear() {
    return (0, _WaitlistActionCreators.clearWaitlist)();
  },
  playlistCycle: function playlistCycle(_ref15) {
    var playlistID = _ref15.playlistID;
    return (0, _PlaylistActionCreators.cyclePlaylist)(playlistID);
  },
  join: function join(user) {
    return (0, _UserActionCreators.join)(user);
  },
  leave: function leave(userID) {
    return (0, _UserActionCreators.leave)(userID);
  },
  nameChange: function nameChange(_ref16) {
    var userID = _ref16.userID,
        username = _ref16.username;
    return (0, _UserActionCreators.changeUsername)(userID, username);
  },
  guests: _UserActionCreators.receiveGuestCount,
  'acl:allow': function aclAllow(_ref17) {
    var userID = _ref17.userID,
        roles = _ref17.roles;
    return (0, _UserActionCreators.addUserRoles)(userID, roles);
  },
  'acl:disallow': function aclDisallow(_ref18) {
    var userID = _ref18.userID,
        roles = _ref18.roles;
    return (0, _UserActionCreators.removeUserRoles)(userID, roles);
  },
  'wlk:shouldRandomize': function wlkShouldRandomize(_ref19) {
    var value = _ref19.value;
    return {
      type: _constants.SHOULD_RANDOMIZE,
      payload: value
    };
  }
};

function middleware(_temp) {
  var _ref20 = _temp === void 0 ? {} : _temp,
      _ref20$url = _ref20.url,
      url = _ref20$url === void 0 ? defaultUrl() : _ref20$url;

  return function (_ref21) {
    var dispatch = _ref21.dispatch,
        getState = _ref21.getState;
    var socket;
    var queue = [];
    var sentAuthToken = false;
    var opened = false;

    function isOpen() {
      return socket && opened;
    }

    function sendAuthToken(tokne) {
      socket.send(tokne);
      sentAuthToken = true;
    }

    function maybeAuthenticateOnConnect(state) {
      var user = state.auth.user;
      if (!user) return;
      debug('open', user.id);
      dispatch((0, _LoginActionCreators.getSocketAuthToken)()).then(function (_ref22) {
        var socketToken = _ref22.socketToken;

        if (socketToken) {
          sendAuthToken(socketToken);
        } else {
          sentAuthToken = false;
        }
      });
    }

    function send(command, data) {
      if (isOpen()) {
        socket.send(JSON.stringify({
          command: command,
          data: data
        }));
      } else {
        queue.push({
          command: command,
          data: data
        });
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
      dispatch({
        type: _ActionTypes.SOCKET_CONNECTED
      });
      maybeAuthenticateOnConnect(getState());
    }

    function onClose() {
      opened = false;
      dispatch({
        type: _ActionTypes.SOCKET_DISCONNECTED
      });
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
            payload = action.payload,
            error = action.error;

        if (error) {
          next(action);
          return;
        }

        switch (type) {
          case _ActionTypes.SOCKET_RECONNECT:
            if (socket) {
              socket.close(undefined, undefined, {
                keepClosed: true
              });
            }

          // fall through

          case _ActionTypes.SOCKET_CONNECT:
            socket = new _reconnectingWebsocket.default(url);
            socket.addEventListener('message', onMessage);
            socket.addEventListener('open', onOpen);
            socket.addEventListener('close', onClose);
            socket.addEventListener('connecting', onClose);
            break;

          case _ActionTypes.SEND_MESSAGE:
            send('sendChat', payload.message);
            break;

          case _ActionTypes.DO_UPVOTE:
            send('vote', 1);
            break;

          case _ActionTypes.DO_DOWNVOTE:
            send('vote', -1);
            break;

          case _ActionTypes.LOGIN_COMPLETE:
            if (!sentAuthToken && isOpen()) {
              sendAuthToken(payload.socketToken);
            }

            break;

          case _ActionTypes.LOGOUT_START:
            sentAuthToken = false;
            send('logout', null);
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
