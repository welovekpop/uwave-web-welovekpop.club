"use strict";

var _Uwave = _interopRequireDefault(require("./Uwave"));

var _youtube = _interopRequireDefault(require("./sources/youtube"));

var _soundcloud = _interopRequireDefault(require("./sources/soundcloud"));

var _AboutPage = _interopRequireDefault(require("./_wlk/AboutPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readApplicationConfig() {
  try {
    return JSON.parse(document.getElementById('u-wave-config').textContent);
  } catch (e) {
    return {};
  }
}

var uw = new _Uwave.default(readApplicationConfig()); // Configure the Media sources to be used by this üWave client instance.

uw.source((0, _youtube.default)());
uw.source((0, _soundcloud.default)());
uw.setAboutPageComponent(_AboutPage.default);
window.uw = uw;
uw.build().then(function () {
  uw.renderToDOM(document.querySelector('#app'));
  document.querySelector('#app-loading').innerHTML = '';
  document.querySelector('#jss').textContent = '';
}).catch(function (err) {
  document.querySelector('.LoadingScreen-notice').textContent = "Error: " + err.message;
  setTimeout(function () {
    throw err;
  }, 0);
}); //# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
