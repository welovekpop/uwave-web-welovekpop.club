'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  users: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes.LOAD_USERS_START:
      return state;
    case _ActionTypes.LOAD_USERS_COMPLETE:
      return (0, _extends3.default)({}, state, {
        currentPage: action.payload.page,
        totalUsers: action.meta.total,
        totalPages: Math.ceil(action.meta.total / action.meta.pageSize),
        users: action.payload.users
      });
    default:
      return state;
  }
}
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
