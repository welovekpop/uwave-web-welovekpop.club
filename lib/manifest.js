"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'üWave',
  short_name: 'üWave',
  start_url: '.',
  theme_color: _theme.default.palette.main,
  background_color: '#151515',
  display: 'standalone',
  icons: [{
    type: 'image/png',
    src: _path.default.join(__dirname, '../assets/icon-white.png'),
    sizes: [96, 144]
  }]
};
exports.default = _default;
//# sourceMappingURL=manifest.js.map
