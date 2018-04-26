"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preloadDesktop;

var _onIdle = _interopRequireDefault(require("on-idle"));

var _PlaylistManager = _interopRequireDefault(require("../containers/PlaylistManager"));

var _SettingsManager = _interopRequireDefault(require("../containers/SettingsManager"));

var _RoomHistory = _interopRequireDefault(require("../containers/RoomHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loaded() {
  return new Promise(function (resolve) {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });
}

function preloadDesktop() {
  loaded().then(function () {
    (0, _onIdle.default)(function () {
      _PlaylistManager.default.preload();

      _SettingsManager.default.preload();

      _RoomHistory.default.preload();
    });
  });
} //# sourceMappingURL=preloadDesktop.js.map
//# sourceMappingURL=preloadDesktop.js.map
