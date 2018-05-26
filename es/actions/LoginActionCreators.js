import createDebug from 'debug';
import { INIT_STATE, SOCKET_CONNECT, SOCKET_RECONNECT, AUTH_STRATEGIES, REGISTER_START, REGISTER_COMPLETE, LOGIN_START, LOGIN_COMPLETE, SET_TOKEN, LOGOUT_START, LOGOUT_COMPLETE, RESET_PASSWORD_COMPLETE, LOAD_ALL_PLAYLISTS_START } from '../constants/ActionTypes';
import * as Session from '../utils/Session';
import { get, post, del } from './RequestActionCreators';
import { advance, loadHistory } from './BoothActionCreators';
import { setPlaylists, loadPlaylist } from './PlaylistActionCreators';
import { syncTimestamps } from './TickerActionCreators';
import { closeLoginDialog } from './DialogActionCreators';
import { tokenSelector } from '../selectors/userSelectors';
import startTutorial from '../_wlk/startTutorial';
var debug = createDebug('uwave:actions:login');
export function socketConnect() {
  return {
    type: SOCKET_CONNECT
  };
}
export function socketReconnect() {
  return {
    type: SOCKET_RECONNECT
  };
}
export function setAuthenticationStrategies(strategies) {
  return {
    type: AUTH_STRATEGIES,
    payload: {
      strategies: strategies
    }
  };
}
export function loginComplete(_ref) {
  var token = _ref.token,
      socketToken = _ref.socketToken,
      user = _ref.user;
  return function (dispatch) {
    dispatch({
      type: LOGIN_COMPLETE,
      payload: {
        token: token,
        socketToken: socketToken,
        user: user
      }
    });
    dispatch(closeLoginDialog());
  };
}
export function loadedState(state) {
  return function (dispatch, getState) {
    dispatch({
      type: INIT_STATE,
      payload: state
    });

    if (state.booth && state.booth.historyID) {
      // TODO don't set this when logging in _after_ entering the page?
      dispatch(advance(state.booth));
    }

    if (state.user) {
      var token = tokenSelector(getState());
      dispatch(loginComplete({
        token: token,
        socketToken: state.socketToken,
        user: state.user
      }));
    }

    if (state.activePlaylist) {
      dispatch(loadPlaylist(state.activePlaylist));
    }
  };
}
export function initState() {
  var beforeTime = Date.now();
  return get('/now', {
    onStart: function onStart() {
      return {
        type: LOAD_ALL_PLAYLISTS_START
      };
    },
    onComplete: function onComplete(state) {
      return function (dispatch) {
        dispatch(syncTimestamps(beforeTime, state.time));
        dispatch(loadedState(state));
        dispatch(loadHistory());
      };
    }
  });
}
export function setSessionToken(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token: token
    }
  };
}

function loginStart() {
  return {
    type: LOGIN_START
  };
}

export function login(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;
  var sessionType = Session.preferredSessionType();
  return post("/auth/login?session=" + sessionType, {
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
        type: LOGIN_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function register(_ref3) {
  var email = _ref3.email,
      username = _ref3.username,
      password = _ref3.password,
      grecaptcha = _ref3.grecaptcha;
  return post('/auth/register', {
    email: email,
    username: username,
    password: password,
    grecaptcha: grecaptcha
  }, {
    onStart: function onStart() {
      return {
        type: REGISTER_START
      };
    },
    onComplete: function onComplete(res) {
      return function (dispatch) {
        var user = res.data;
        debug('registered', user);
        dispatch({
          type: REGISTER_COMPLETE,
          payload: {
            user: user
          }
        });
        dispatch(login({
          email: email,
          password: password
        })).then(function () {
          if (matchMedia('(min-width: 769px)').matches) {
            return startTutorial();
          }

          return null;
        });
      };
    },
    onError: function onError(error) {
      return {
        type: REGISTER_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function logoutStart() {
  return {
    type: LOGOUT_START
  };
}

function logoutComplete() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_COMPLETE
    });
    dispatch(setPlaylists([]));
  };
}

export function logout() {
  return del('/auth', {}, {
    onStart: function onStart() {
      return function (dispatch) {
        dispatch(logoutStart());
        Session.unset();
      };
    },
    onComplete: logoutComplete
  });
}
export function resetPassword(email) {
  return post('/auth/password/reset', email, {
    onComplete: function onComplete() {
      return {
        type: RESET_PASSWORD_COMPLETE,
        payload: 'Successfully sent password reset email'
      };
    },
    onError: function onError(error) {
      return {
        type: RESET_PASSWORD_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function getSocketAuthToken() {
  return get('/auth/socket', {
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

export function loginWithGoogle() {
  return socialLogin('google');
}
//# sourceMappingURL=LoginActionCreators.js.map
