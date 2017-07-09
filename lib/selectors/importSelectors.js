'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showImportPanelSelector = exports.selectedSourceTypeSelector = undefined;

var _reselect = require('reselect');

var baseSelector = function baseSelector(state) {
  return state.imports;
};

var selectedSourceTypeSelector = exports.selectedSourceTypeSelector = (0, _reselect.createSelector)(baseSelector, function (imports) {
  return imports.sourceType;
});

var showImportPanelSelector = exports.showImportPanelSelector = (0, _reselect.createSelector)(baseSelector, function (imports) {
  return imports.showPanel;
});
//# sourceMappingURL=importSelectors.js.map
//# sourceMappingURL=importSelectors.js.map
