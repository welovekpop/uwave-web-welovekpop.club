"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectPanel = selectPanel;

var _ActionTypes = require("../constants/ActionTypes");

// eslint-disable-next-line import/prefer-default-export
function selectPanel(name) {
  return {
    type: _ActionTypes.SELECT_PANEL,
    payload: {
      panel: name
    }
  };
}
//# sourceMappingURL=PanelSelectActionCreators.js.map
