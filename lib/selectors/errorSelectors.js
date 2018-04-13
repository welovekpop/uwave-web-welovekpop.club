"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstErrorSelector = void 0;

var _reselect = require("reselect");

var baseSelector = function baseSelector(state) {
  return state.errors;
}; // eslint-disable-next-line import/prefer-default-export


var firstErrorSelector = (0, _reselect.createSelector)(baseSelector, function (errors) {
  return errors[0];
}); //# sourceMappingURL=errorSelectors.js.map

exports.firstErrorSelector = firstErrorSelector;
//# sourceMappingURL=errorSelectors.js.map
