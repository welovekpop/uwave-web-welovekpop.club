'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketConnect = socketConnect;
exports.socketReconnect = socketReconnect;
exports.loginComplete = loginComplete;
exports.loadedState = loadedState;
exports.initState = initState;
exports.setJWT = setJWT;
exports.login = login;
exports.register = register;
exports.logout = logout;
exports.resetPassword = resetPassword;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _auth = require('../constants/actionTypes/auth');

var _playlists = require('../constants/actionTypes/playlists');

var _Session = require('../utils/Session');

var Session = _interopRequireWildcard(_Session);

var _RequestActionCreators = require('./RequestActionCreators');

var _BoothActionCreators = require('./BoothActionCreators');

var _ChatActionCreators = require('./ChatActionCreators');

var _PlaylistActionCreators = require('./PlaylistActionCreators');

var _TickerActionCreators = require('./TickerActionCreators');

var _DialogActionCreators = require('./DialogActionCreators');

var _UserActionCreators = require('./UserActionCreators');

var _VoteActionCreators = require('./VoteActionCreators');

var _WaitlistActionCreators = require('./WaitlistActionCreators');

var _userSelectors = require('../selectors/userSelectors');

var _startTutorial = require('../_wlk/startTutorial');

var _startTutorial2 = _interopRequireDefault(_startTutorial);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('uwave:actions:login');

function socketConnect() {
  return { type: _auth.SOCKET_CONNECT };
}

function socketReconnect() {
  return { type: _auth.SOCKET_RECONNECT };
}

function loginComplete(_ref) {
  var jwt = _ref.jwt,
      user = _ref.user;

  return function (dispatch) {
    dispatch({
      type: _auth.LOGIN_COMPLETE,
      payload: { jwt: jwt, user: user }
    });
    dispatch((0, _DialogActionCreators.closeLoginDialog)());
  };
}

function loadedState(state) {
  return function (dispatch, getState) {
    dispatch({
      type: _auth.INIT_STATE,
      payload: state
    });
    if (state.motd) {
      dispatch((0, _ChatActionCreators.receiveMotd)(state.motd));
    }
    dispatch((0, _UserActionCreators.setUsers)(state.users || []));
    dispatch((0, _PlaylistActionCreators.setPlaylists)(state.playlists || []));
    dispatch((0, _WaitlistActionCreators.setWaitList)({
      waitlist: state.waitlist,
      locked: state.waitlistLocked
    }));
    if (state.booth && state.booth.historyID) {
      // TODO don't set this when logging in _after_ entering the page?
      dispatch((0, _BoothActionCreators.advance)(state.booth));
      dispatch((0, _VoteActionCreators.setVoteStats)(state.booth.stats));
    }
    if (state.user) {
      var token = (0, _userSelectors.tokenSelector)(getState());
      dispatch(loginComplete({
        jwt: token,
        user: state.user
      }));
    }
    if (state.activePlaylist) {
      dispatch((0, _PlaylistActionCreators.activatePlaylistComplete)(state.activePlaylist));
      dispatch((0, _PlaylistActionCreators.selectPlaylist)(state.activePlaylist));
    }
  };
}

function initState() {
  var beforeTime = Date.now();

  return (0, _RequestActionCreators.get)('/now', {
    onStart: function onStart() {
      return { type: _playlists.LOAD_ALL_PLAYLISTS_START };
    },
    onComplete: function onComplete(state) {
      return function (dispatch) {
        dispatch((0, _TickerActionCreators.syncTimestamps)(beforeTime, state.time));
        dispatch(loadedState(state));
        dispatch((0, _BoothActionCreators.loadHistory)());
      };
    }
  });
}

function setJWT(jwt) {
  return {
    type: _auth.SET_TOKEN,
    payload: { jwt: jwt }
  };
}

function loginStart() {
  return { type: _auth.LOGIN_START };
}

function login(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;

  return (0, _RequestActionCreators.post)('/auth/login', { email: email, password: password }, {
    onStart: loginStart,
    onComplete: function onComplete(res) {
      return function (dispatch) {
        Session.set(res.meta.jwt);
        dispatch(setJWT(res.meta.jwt));
        dispatch(initState());
      };
    },
    onError: function onError(error) {
      return {
        type: _auth.LOGIN_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function register(_ref3) {
  var email = _ref3.email,
      username = _ref3.username,
      password = _ref3.password,
      grecaptcha = _ref3.grecaptcha;

  return (0, _RequestActionCreators.post)('/auth/register', { email: email, username: username, password: password, grecaptcha: grecaptcha }, {
    onStart: function onStart() {
      return { type: _auth.REGISTER_START };
    },
    onComplete: function onComplete(res) {
      return function (dispatch) {
        var user = res.data;
        debug('registered', user);
        dispatch({
          type: _auth.REGISTER_COMPLETE,
          payload: { user: user }
        });
        dispatch(login({ email: email, password: password })).then(function () {
          if (matchMedia('(min-width: 769px)').matches) {
            return (0, _startTutorial2.default)();
          }
        });
      };
    },
    onError: function onError(error) {
      return {
        type: _auth.REGISTER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function logoutStart() {
  return { type: _auth.LOGOUT_START };
}

function logoutComplete() {
  return function (dispatch) {
    dispatch({ type: _auth.LOGOUT_COMPLETE });
    dispatch((0, _PlaylistActionCreators.setPlaylists)([]));
  };
}

function logout() {
  return function (dispatch, getState) {
    var me = (0, _userSelectors.currentUserSelector)(getState());
    dispatch(logoutStart());
    Session.unset();
    if (me) {
      dispatch(logoutComplete());
      dispatch(socketReconnect());
    } else {
      dispatch(logoutComplete());
    }
  };
}

function resetPassword(email) {
  return (0, _RequestActionCreators.post)('/auth/password/reset', email, {
    onComplete: function onComplete() {
      return {
        type: _auth.RESET_PASSWORD_COMPLETE,
        payload: 'Successfully sent password reset email'
      };
    },
    onError: function onError(error) {
      return {
        type: _auth.RESET_PASSWORD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=LoginActionCreators.js.map
//# sourceMappingURL=LoginActionCreators.js.map
