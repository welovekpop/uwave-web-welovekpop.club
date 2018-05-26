"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketConnect = socketConnect;
exports.socketReconnect = socketReconnect;
exports.setAuthenticationStrategies = setAuthenticationStrategies;
exports.loginComplete = loginComplete;
exports.loadedState = loadedState;
exports.initState = initState;
exports.setSessionToken = setSessionToken;
exports.login = login;
exports.register = register;
exports.logout = logout;
exports.resetPassword = resetPassword;
exports.getSocketAuthToken = getSocketAuthToken;
exports.loginWithGoogle = loginWithGoogle;

var _debug = _interopRequireDefault(require("debug"));

var _ActionTypes = require("../constants/ActionTypes");

var Session = _interopRequireWildcard(require("../utils/Session"));

var _RequestActionCreators = require("./RequestActionCreators");

var _BoothActionCreators = require("./BoothActionCreators");

var _PlaylistActionCreators = require("./PlaylistActionCreators");

var _TickerActionCreators = require("./TickerActionCreators");

var _DialogActionCreators = require("./DialogActionCreators");

var _userSelectors = require("../selectors/userSelectors");

var _startTutorial = _interopRequireDefault(require("../_wlk/startTutorial"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug.default)('uwave:actions:login');

function socketConnect() {
  return {
    type: _ActionTypes.SOCKET_CONNECT
  };
}

function socketReconnect() {
  return {
    type: _ActionTypes.SOCKET_RECONNECT
  };
}

function setAuthenticationStrategies(strategies) {
  return {
    type: _ActionTypes.AUTH_STRATEGIES,
    payload: {
      strategies: strategies
    }
  };
}

function loginComplete(_ref) {
  var token = _ref.token,
      socketToken = _ref.socketToken,
      user = _ref.user;
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.LOGIN_COMPLETE,
      payload: {
        token: token,
        socketToken: socketToken,
        user: user
      }
    });
    dispatch((0, _DialogActionCreators.closeLoginDialog)());
  };
}

function loadedState(state) {
  return function (dispatch, getState) {
    dispatch({
      type: _ActionTypes.INIT_STATE,
      payload: state
    });

    if (state.booth && state.booth.historyID) {
      // TODO don't set this when logging in _after_ entering the page?
      dispatch((0, _BoothActionCreators.advance)(state.booth));
    }

    if (state.user) {
      var token = (0, _userSelectors.tokenSelector)(getState());
      dispatch(loginComplete({
        token: token,
        socketToken: state.socketToken,
        user: state.user
      }));
    }

    if (state.activePlaylist) {
      dispatch((0, _PlaylistActionCreators.loadPlaylist)(state.activePlaylist));
    }
  };
}

function initState() {
  var beforeTime = Date.now();
  return (0, _RequestActionCreators.get)('/now', {
    onStart: function onStart() {
      return {
        type: _ActionTypes.LOAD_ALL_PLAYLISTS_START
      };
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

function setSessionToken(token) {
  return {
    type: _ActionTypes.SET_TOKEN,
    payload: {
      token: token
    }
  };
}

function loginStart() {
  return {
    type: _ActionTypes.LOGIN_START
  };
}

function login(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;
  var sessionType = Session.preferredSessionType();
  return (0, _RequestActionCreators.post)("/auth/login?session=" + sessionType, {
    email: email,
    password: password
  }, {
    onStart: loginStart,
    onComplete: function onComplete(res) {
      return function (dispatch) {
        Session.set(res.meta.jwt);
        dispatch(setSessionToken(res.meta.jwt));
        dispatch(initState());
      };
    },
    onError: function onError(error) {
      return {
        type: _ActionTypes.LOGIN_COMPLETE,
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
  return (0, _RequestActionCreators.post)('/auth/register', {
    email: email,
    username: username,
    password: password,
    grecaptcha: grecaptcha
  }, {
    onStart: function onStart() {
      return {
        type: _ActionTypes.REGISTER_START
      };
    },
    onComplete: function onComplete(res) {
      return function (dispatch) {
        var user = res.data;
        debug('registered', user);
        dispatch({
          type: _ActionTypes.REGISTER_COMPLETE,
          payload: {
            user: user
          }
        });
        dispatch(login({
          email: email,
          password: password
        })).then(function () {
          if (matchMedia('(min-width: 769px)').matches) {
            return (0, _startTutorial.default)();
          }

          return null;
        });
      };
    },
    onError: function onError(error) {
      return {
        type: _ActionTypes.REGISTER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function logoutStart() {
  return {
    type: _ActionTypes.LOGOUT_START
  };
}

function logoutComplete() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.LOGOUT_COMPLETE
    });
    dispatch((0, _PlaylistActionCreators.setPlaylists)([]));
  };
}

function logout() {
  return (0, _RequestActionCreators.del)('/auth', {}, {
    onStart: function onStart() {
      return function (dispatch) {
        dispatch(logoutStart());
        Session.unset();
      };
    },
    onComplete: logoutComplete
  });
}

function resetPassword(email) {
  return (0, _RequestActionCreators.post)('/auth/password/reset', email, {
    onComplete: function onComplete() {
      return {
        type: _ActionTypes.RESET_PASSWORD_COMPLETE,
        payload: 'Successfully sent password reset email'
      };
    },
    onError: function onError(error) {
      return {
        type: _ActionTypes.RESET_PASSWORD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function getSocketAuthToken() {
  return (0, _RequestActionCreators.get)('/auth/socket', {
    onComplete: function onComplete(res) {
      return function () {
        return {
          socketToken: res.data.socketToken
        };
      };
    }
  });
}

function whenWindowClosed(window) {
  return new Promise(function (resolve) {
    var i = setInterval(function () {
      if (window.closed) {
        clearInterval(i);
        resolve();
      }
    }, 50);
  });
}

function socialLogin(service) {
  return function (dispatch, getState) {
    var apiUrl = getState().config.apiUrl;
    var loginWindow = window.open(apiUrl + "/auth/service/" + service);
    return whenWindowClosed(loginWindow).then(function () {
      // Check login state after the window closed.
      dispatch(initState());
    });
  };
}

function loginWithGoogle() {
  return socialLogin('google');
}
//# sourceMappingURL=LoginActionCreators.js.map
