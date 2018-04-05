'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'üWave',
  short_name: 'üWave',
  start_url: '.',
  theme_color: _theme2.default.palette.main,
  background_color: '#151515',
  display: 'standalone',
  icons: [{
    type: 'image/png',
    src: _path2.default.join(__dirname, '../assets/icon-white.png'),
    sizes: [96, 144]
  }]
};
//# sourceMappingURL=manifest.js.map
//# sourceMappingURL=manifest.js.map
