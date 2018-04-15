"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSourcesReducer;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {}; // A reducer that calls each known Media Source's reducer.

function reduceSources(state, action, sources) {
  if (state === void 0) {
    state = initialState;
  }

  return Object.keys(sources).reduce(function (newState, sourceName) {
    var _objectSpread2;

    var source = sources[sourceName];

    if (!source.reducer) {
      return newState;
    }

    return (0, _objectSpread3.default)({}, newState, (_objectSpread2 = {}, _objectSpread2[sourceName] = source.reducer(newState[sourceName], action), _objectSpread2));
  }, state);
}

function createSourcesReducer(options) {
  var mediaSources = options.mediaSources || {};
  return function reducer(state, action) {
    return reduceSources(state, action, mediaSources);
  };
} //# sourceMappingURL=createSourcesReducer.js.map
//# sourceMappingURL=createSourcesReducer.js.map
