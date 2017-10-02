import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.server;
};

// eslint-disable-next-line import/prefer-default-export
export var isConnectedSelector = createSelector(baseSelector, function (server) {
  return server.connected;
});
//# sourceMappingURL=serverSelectors.js.map
