"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentTimeSelector = exports.timerSelector = void 0;

var _reselect = require("reselect");

var baseSelector = function baseSelector(state) {
  return state.time;
};

var timeSelector = function timeSelector() {
  return Date.now();
};

var offsetSelector = (0, _reselect.createSelector)(baseSelector, function (time) {
  return time.offset;
});
var timerSelector = (0, _reselect.createSelector)(baseSelector, function (time) {
  return time.timer;
});
exports.timerSelector = timerSelector;
var currentTimeSelector = (0, _reselect.createSelector)(timeSelector, offsetSelector, function (time, offset) {
  return time + offset;
});
exports.currentTimeSelector = currentTimeSelector;
//# sourceMappingURL=timeSelectors.js.map
