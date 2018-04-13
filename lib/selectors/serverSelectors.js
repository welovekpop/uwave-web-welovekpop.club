"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnectedSelector = void 0;

var _reselect = require("reselect");

var baseSelector = function baseSelector(state) {
  return state.server;
}; // eslint-disable-next-line import/prefer-default-export


var isConnectedSelector = (0, _reselect.createSelector)(baseSelector, function (server) {
  return server.connected;
}); //# sourceMappingURL=serverSelectors.js.map

exports.isConnectedSelector = isConnectedSelector;
//# sourceMappingURL=serverSelectors.js.map
