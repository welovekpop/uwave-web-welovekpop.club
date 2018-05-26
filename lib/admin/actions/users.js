"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsersStart = loadUsersStart;
exports.loadUsersComplete = loadUsersComplete;
exports.loadUsers = loadUsers;
exports.setUsersFilter = setUsersFilter;

var _RequestActionCreators = require("../../actions/RequestActionCreators");

var _ActionTypes = require("../constants/ActionTypes");

var _userSelectors = require("../selectors/userSelectors");

function loadUsersStart() {
  return {
    type: _ActionTypes.LOAD_USERS_START
  };
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

function loadUsers(pagination) {
  if (pagination === void 0) {
    pagination = null;
  }

  return function (dispatch, getState) {
    var filter = (0, _userSelectors.filterSelector)(getState());
    var qs = {};
    if (pagination) qs.page = pagination;
    if (filter) qs.filter = filter;
    return dispatch((0, _RequestActionCreators.get)('/users', {
      qs: qs,
      onStart: loadUsersStart,
      onComplete: loadUsersComplete
    }));
  };
}

function setUsersFilter(filter) {
  if (filter === void 0) {
    filter = null;
  }

  return {
    type: _ActionTypes.SET_USERS_FILTER,
    payload: {
      filter: filter
    }
  };
}
//# sourceMappingURL=users.js.map
