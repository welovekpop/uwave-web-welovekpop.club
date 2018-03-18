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
  currentPage: {
    offset: 0,
    limit: 50
  },
  bans: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _ActionTypes.LOAD_BANS_START:
      return state;
    case _ActionTypes.LOAD_BANS_COMPLETE:
      return (0, _extends3.default)({}, state, {
        bans: action.payload.bans
      });
    default:
      return state;
  }
}
//# sourceMappingURL=bans.js.map
//# sourceMappingURL=bans.js.map
