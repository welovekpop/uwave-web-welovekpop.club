"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showImportPanel = showImportPanel;
exports.hideImportPanel = hideImportPanel;
exports.showImportSourcePanel = showImportSourcePanel;
exports.hideImportSourcePanel = hideImportSourcePanel;

var _ActionTypes = require("../constants/ActionTypes");

function showImportPanel() {
  return {
    type: _ActionTypes.SHOW_IMPORT_PANEL
  };
}

function hideImportPanel() {
  return {
    type: _ActionTypes.HIDE_IMPORT_PANEL
  };
}

function showImportSourcePanel(sourceType) {
  return {
    type: _ActionTypes.SHOW_IMPORT_SOURCE_PANEL,
    payload: {
      sourceType: sourceType
    }
  };
}

function hideImportSourcePanel() {
  return {
    type: _ActionTypes.HIDE_IMPORT_SOURCE_PANEL
  };
}
//# sourceMappingURL=ImportActionCreators.js.map
