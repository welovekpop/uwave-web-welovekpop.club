"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSourcesReducer;

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

// A reducer that calls each known Media Source's reducer.
function reduceSources() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var sources = arguments[2];

  return Object.keys(sources).reduce(function (newState, sourceName) {
    var _extends2;

    var source = sources[sourceName];
    if (!source.reducer) {
      return newState;
    }
    return (0, _extends4.default)({}, newState, (_extends2 = {}, _extends2[sourceName] = source.reducer(newState[sourceName], action), _extends2));
  }, state);
}

function createSourcesReducer(options) {
  var mediaSources = options.mediaSources || {};
  return function reducer(state, action) {
    return reduceSources(state, action, mediaSources);
  };
}
//# sourceMappingURL=createSourcesReducer.js.map
//# sourceMappingURL=createSourcesReducer.js.map
