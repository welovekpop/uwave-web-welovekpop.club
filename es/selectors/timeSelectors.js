import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.time;
};

var timeSelector = function timeSelector() {
  return Date.now();
};
var offsetSelector = createSelector(baseSelector, function (time) {
  return time.offset;
});
export var timerSelector = createSelector(baseSelector, function (time) {
  return time.timer;
});

export var currentTimeSelector = createSelector(timeSelector, offsetSelector, function (time, offset) {
  return time + offset;
});
//# sourceMappingURL=timeSelectors.js.map
