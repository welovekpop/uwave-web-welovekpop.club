'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectPanel = selectPanel;

var _panel = require('../constants/actionTypes/panel');

// eslint-disable-next-line import/prefer-default-export
function selectPanel(name) {
  return {
    type: _panel.SELECT_PANEL,
    payload: {
      panel: name
    }
  };
}
//# sourceMappingURL=PanelSelectActionCreators.js.map
//# sourceMappingURL=PanelSelectActionCreators.js.map
