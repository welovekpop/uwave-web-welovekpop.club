'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wlkReducer;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  shouldRandomize: false
};

function wlkReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.SHOULD_RANDOMIZE:
      return (0, _extends3.default)({}, state, {
        shouldRandomize: action.payload
      });
    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
//# sourceMappingURL=reducer.js.map
