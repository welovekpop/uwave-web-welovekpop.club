'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnectedSelector = undefined;

var _reselect = require('reselect');

var baseSelector = function baseSelector(state) {
  return state.server;
};

// eslint-disable-next-line import/prefer-default-export
var isConnectedSelector = exports.isConnectedSelector = (0, _reselect.createSelector)(baseSelector, function (server) {
  return server.connected;
});
//# sourceMappingURL=serverSelectors.js.map
//# sourceMappingURL=serverSelectors.js.map
