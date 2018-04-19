"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  currentPage: {
    offset: 0,
    limit: 50
  },
  bans: []
};

function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case _ActionTypes.LOAD_BANS_START:
      return state;

    case _ActionTypes.LOAD_BANS_COMPLETE:
      return (0, _extends2.default)({}, state, {
        bans: action.payload.bans
      });

    default:
      return state;
  }
} //# sourceMappingURL=bans.js.map
//# sourceMappingURL=bans.js.map
