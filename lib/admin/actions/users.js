'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsersStart = loadUsersStart;
exports.loadUsersComplete = loadUsersComplete;
exports.loadUsers = loadUsers;

var _RequestActionCreators = require('../../actions/RequestActionCreators');

var _ActionTypes = require('../constants/ActionTypes');

function loadUsersStart() {
  return { type: _ActionTypes.LOAD_USERS_START };
}

function loadUsersComplete(response) {
  return {
    type: _ActionTypes.LOAD_USERS_COMPLETE,
    payload: {
      users: response.data,
      page: Math.floor(response.meta.offset / response.meta.pageSize)
    },
    meta: response.meta
  };
}

function loadUsers() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return (0, _RequestActionCreators.get)('/users', {
    qs: pagination ? { page: pagination } : null,
    onStart: loadUsersStart,
    onComplete: loadUsersComplete
  });
}
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
