import createDebug from 'debug';
import { INIT_STATE, SOCKET_CONNECT, SOCKET_RECONNECT, REGISTER_START, REGISTER_COMPLETE, LOGIN_START, LOGIN_COMPLETE, SET_TOKEN, LOGOUT_START, LOGOUT_COMPLETE, RESET_PASSWORD_COMPLETE } from '../constants/actionTypes/auth';
import { LOAD_ALL_PLAYLISTS_START } from '../constants/actionTypes/playlists';
import * as Session from '../utils/Session';
import { get, post } from './RequestActionCreators';
import { advance, loadHistory } from './BoothActionCreators';
import { receiveMotd } from './ChatActionCreators';
import { setPlaylists, selectPlaylist, activatePlaylistComplete } from './PlaylistActionCreators';
import { syncTimestamps } from './TickerActionCreators';
import { closeLoginDialog } from './DialogActionCreators';
import { setUsers } from './UserActionCreators';
import { setVoteStats } from './VoteActionCreators';
import { setWaitList } from './WaitlistActionCreators';
import { currentUserSelector, tokenSelector } from '../selectors/userSelectors';
import startTutorial from '../_wlk/startTutorial';

var debug = createDebug('uwave:actions:login');

export function socketConnect() {
  return { type: SOCKET_CONNECT };
}

export function socketReconnect() {
  return { type: SOCKET_RECONNECT };
}

export function loginComplete(_ref) {
  var jwt = _ref.jwt,
      user = _ref.user;

  return function (dispatch) {
    dispatch({
      type: LOGIN_COMPLETE,
      payload: { jwt: jwt, user: user }
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
    if (state.motd) {
      dispatch(receiveMotd(state.motd));
    }
    dispatch(setUsers(state.users || []));
    dispatch(setPlaylists(state.playlists || []));
    dispatch(setWaitList({
      waitlist: state.waitlist,
      locked: state.waitlistLocked
    }));
    if (state.booth && state.booth.historyID) {
      // TODO don't set this when logging in _after_ entering the page?
      dispatch(advance(state.booth));
      dispatch(setVoteStats(state.booth.stats));
    }
    if (state.user) {
      var token = tokenSelector(getState());
      dispatch(loginComplete({
        jwt: token,
        user: state.user
      }));
    }
    if (state.activePlaylist) {
      dispatch(activatePlaylistComplete(state.activePlaylist));
      dispatch(selectPlaylist(state.activePlaylist));
    }
  };
}

export function initState() {
  var beforeTime = Date.now();

  return get('/now', {
    onStart: function onStart() {
      return { type: LOAD_ALL_PLAYLISTS_START };
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

export function setJWT(jwt) {
  return {
    type: SET_TOKEN,
    payload: { jwt: jwt }
  };
}

function loginStart() {
  return { type: LOGIN_START };
}

export function login(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;

  return post('/auth/login', { email: email, password: password }, {
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

  return post('/auth/register', { email: email, username: username, password: password, grecaptcha: grecaptcha }, {
    onStart: function onStart() {
      return { type: REGISTER_START };
    },
    onComplete: function onComplete(res) {
      return function (dispatch) {
        var user = res.data;
        debug('registered', user);
        dispatch({
          type: REGISTER_COMPLETE,
          payload: { user: user }
        });
        dispatch(login({ email: email, password: password })).then(function () {
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
  return { type: LOGOUT_START };
}

function logoutComplete() {
  return function (dispatch) {
    dispatch({ type: LOGOUT_COMPLETE });
    dispatch(setPlaylists([]));
  };
}

export function logout() {
  return function (dispatch, getState) {
    var me = currentUserSelector(getState());
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
//# sourceMappingURL=LoginActionCreators.js.map
