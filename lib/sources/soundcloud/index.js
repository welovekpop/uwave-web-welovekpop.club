"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = soundcloud;

var _PlayerWrapper = _interopRequireDefault(require("./PlayerWrapper"));

var _soundcloud = _interopRequireDefault(require("../../../assets/img/soundcloud.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function soundcloud() {
  return {
    name: 'soundcloud',
    Player: _PlayerWrapper.default,
    logo: _soundcloud.default
  };
} //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
