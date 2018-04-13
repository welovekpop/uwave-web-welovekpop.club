"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldRandomizePlaylistsSelector = void 0;

var _reselect = require("reselect");

/* eslint-disable import/prefer-default-export */
var baseSelector = function baseSelector(state) {
  return state.wlk;
};

var shouldRandomizePlaylistsSelector = (0, _reselect.createSelector)(baseSelector, function (wlk) {
  return wlk.shouldRandomize;
}); //# sourceMappingURL=selectors.js.map

exports.shouldRandomizePlaylistsSelector = shouldRandomizePlaylistsSelector;
//# sourceMappingURL=selectors.js.map
