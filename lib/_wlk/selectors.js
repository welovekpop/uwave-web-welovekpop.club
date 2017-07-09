'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldRandomizePlaylistsSelector = undefined;

var _reselect = require('reselect');

var baseSelector = function baseSelector(state) {
  return state.wlk;
}; /* eslint-disable import/prefer-default-export */
var shouldRandomizePlaylistsSelector = exports.shouldRandomizePlaylistsSelector = (0, _reselect.createSelector)(baseSelector, function (wlk) {
  return wlk.shouldRandomize;
});
//# sourceMappingURL=selectors.js.map
//# sourceMappingURL=selectors.js.map
