"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showImportPanel = showImportPanel;
exports.hideImportPanel = hideImportPanel;
exports.showImportSourcePanel = showImportSourcePanel;
exports.hideImportSourcePanel = hideImportSourcePanel;

var _imports = require("../constants/actionTypes/imports");

function showImportPanel() {
  return {
    type: _imports.SHOW_IMPORT_PANEL
  };
}

function hideImportPanel() {
  return {
    type: _imports.HIDE_IMPORT_PANEL
  };
}

function showImportSourcePanel(sourceType) {
  return {
    type: _imports.SHOW_IMPORT_SOURCE_PANEL,
    payload: {
      sourceType: sourceType
    }
  };
}

function hideImportSourcePanel() {
  return {
    type: _imports.HIDE_IMPORT_SOURCE_PANEL
  };
} //# sourceMappingURL=ImportActionCreators.js.map
//# sourceMappingURL=ImportActionCreators.js.map
