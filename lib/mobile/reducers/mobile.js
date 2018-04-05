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
  drawer: false,
  usersDrawer: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _ActionTypes.SET_DRAWER_OPEN:
      return (0, _extends3.default)({}, state, {
        drawer: action.payload
      });
    case _ActionTypes.SET_USERS_DRAWER_OPEN:
      return (0, _extends3.default)({}, state, {
        usersDrawer: action.payload
      });
    case _ActionTypes.TOGGLE_DRAWER_OPEN:
      return (0, _extends3.default)({}, state, {
        drawer: !state.drawer
      });
    default:
      return state;
  }
}
//# sourceMappingURL=mobile.js.map
//# sourceMappingURL=mobile.js.map
