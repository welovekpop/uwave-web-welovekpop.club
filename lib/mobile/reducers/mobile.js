"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  drawer: false,
  usersDrawer: false
};

function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case _ActionTypes.SET_DRAWER_OPEN:
      return (0, _extends2.default)({}, state, {
        drawer: action.payload
      });

    case _ActionTypes.SET_USERS_DRAWER_OPEN:
      return (0, _extends2.default)({}, state, {
        usersDrawer: action.payload
      });

    case _ActionTypes.TOGGLE_DRAWER_OPEN:
      return (0, _extends2.default)({}, state, {
        drawer: !state.drawer
      });

    default:
      return state;
  }
} //# sourceMappingURL=mobile.js.map
//# sourceMappingURL=mobile.js.map
