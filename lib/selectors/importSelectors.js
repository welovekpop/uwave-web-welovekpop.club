"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showImportPanelSelector = exports.selectedSourceTypeSelector = void 0;

var _reselect = require("reselect");

var baseSelector = function baseSelector(state) {
  return state.imports;
};

var selectedSourceTypeSelector = (0, _reselect.createSelector)(baseSelector, function (imports) {
  return imports.sourceType;
});
exports.selectedSourceTypeSelector = selectedSourceTypeSelector;
var showImportPanelSelector = (0, _reselect.createSelector)(baseSelector, function (imports) {
  return imports.showPanel;
});
exports.showImportPanelSelector = showImportPanelSelector;
//# sourceMappingURL=importSelectors.js.map
