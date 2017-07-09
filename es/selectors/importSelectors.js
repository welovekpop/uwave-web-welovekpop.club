import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.imports;
};

export var selectedSourceTypeSelector = createSelector(baseSelector, function (imports) {
  return imports.sourceType;
});

export var showImportPanelSelector = createSelector(baseSelector, function (imports) {
  return imports.showPanel;
});
//# sourceMappingURL=importSelectors.js.map
