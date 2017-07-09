'use strict';

var _Uwave = require('./Uwave');

var _Uwave2 = _interopRequireDefault(_Uwave);

var _youtube = require('./sources/youtube');

var youTubeSource = _interopRequireWildcard(_youtube);

var _soundcloud = require('./sources/soundcloud');

var soundCloudSource = _interopRequireWildcard(_soundcloud);

var _AboutPage = require('./_wlk/AboutPage');

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readApplicationConfig() {
  try {
    return JSON.parse(document.getElementById('u-wave-config').textContent);
  } catch (e) {
    return {};
  }
}

var uw = new _Uwave2.default(readApplicationConfig());

// Configure the Media sources to be used by this üWave client instance.
uw.source('youtube', youTubeSource);
uw.source('soundcloud', soundCloudSource);

uw.setAboutPageComponent(_AboutPage2.default);

window.uw = uw;

uw.build().then(function () {
  uw.renderToDOM(document.querySelector('#app'));
  document.querySelector('#app-loading').innerHTML = '';
}).catch(function (err) {
  document.querySelector('.LoadingScreen-notice').textContent = 'Error: ' + err.message;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
