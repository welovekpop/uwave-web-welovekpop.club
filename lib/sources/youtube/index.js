"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtube;

var _Player = _interopRequireDefault(require("./Player"));

var _youtube = _interopRequireDefault(require("../../../assets/img/youtube.png"));

var _ImportForm = _interopRequireDefault(require("./ImportForm"));

var _ImportPanel = _interopRequireDefault(require("./ImportPanel"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function youtube() {
  return {
    name: 'youtube',
    Player: _Player.default,
    logo: _youtube.default,
    ImportForm: _ImportForm.default,
    ImportPanel: _ImportPanel.default,
    reducer: _reducer.default
  };
}
//# sourceMappingURL=index.js.map
