"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  filter: null,
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  users: []
};

function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _ActionTypes.SET_USERS_FILTER:
      return (0, _extends2.default)({}, state, {
        filter: action.payload.filter
      });

    case _ActionTypes.LOAD_USERS_START:
      return state;

    case _ActionTypes.LOAD_USERS_COMPLETE:
      return (0, _extends2.default)({}, state, {
        currentPage: action.payload.page,
        totalUsers: action.meta.results,
        totalPages: Math.ceil(action.meta.results / action.meta.pageSize),
        users: action.payload.users
      });

    default:
      return state;
  }
} //# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
