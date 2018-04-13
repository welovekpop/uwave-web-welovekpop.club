"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
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
    case _ActionTypes.LOAD_USERS_START:
      return state;

    case _ActionTypes.LOAD_USERS_COMPLETE:
      return (0, _objectSpread2.default)({}, state, {
        currentPage: action.payload.page,
        totalUsers: action.meta.total,
        totalPages: Math.ceil(action.meta.total / action.meta.pageSize),
        users: action.payload.users
      });

    default:
      return state;
  }
} //# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
