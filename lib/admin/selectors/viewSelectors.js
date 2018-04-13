"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentViewSelector = void 0;

var _reselect = require("reselect");

var _baseSelector = _interopRequireDefault(require("./baseSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
var currentViewSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.view;
}); //# sourceMappingURL=viewSelectors.js.map

exports.currentViewSelector = currentViewSelector;
//# sourceMappingURL=viewSelectors.js.map
