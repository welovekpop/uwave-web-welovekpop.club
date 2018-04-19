import _extends from "@babel/runtime/helpers/builtin/extends";
var initialState = {}; // A reducer that calls each known Media Source's reducer.

function reduceSources(state, action, sources) {
  if (state === void 0) {
    state = initialState;
  }

  return Object.keys(sources).reduce(function (newState, sourceName) {
    var _extends2;

    var source = sources[sourceName];

    if (!source.reducer) {
      return newState;
    }

    return _extends({}, newState, (_extends2 = {}, _extends2[sourceName] = source.reducer(newState[sourceName], action), _extends2));
  }, state);
}

export default function createSourcesReducer(options) {
  var mediaSources = options.mediaSources || {};
  return function reducer(state, action) {
    return reduceSources(state, action, mediaSources);
  };
}
//# sourceMappingURL=createSourcesReducer.js.map
