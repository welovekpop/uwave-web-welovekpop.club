import Uwave from './Uwave';
import * as youTubeSource from './sources/youtube';
import * as soundCloudSource from './sources/soundcloud';

import AboutPage from './_wlk/AboutPage';

function readApplicationConfig() {
  try {
    return JSON.parse(document.getElementById('u-wave-config').textContent);
  } catch (e) {
    return {};
  }
}

var uw = new Uwave(readApplicationConfig());

// Configure the Media sources to be used by this üWave client instance.
uw.source('youtube', youTubeSource);
uw.source('soundcloud', soundCloudSource);

uw.setAboutPageComponent(AboutPage);

window.uw = uw;

uw.build().then(function () {
  uw.renderToDOM(document.querySelector('#app'));
  document.querySelector('#app-loading').innerHTML = '';
}).catch(function (err) {
  document.querySelector('.LoadingScreen-notice').textContent = 'Error: ' + err.message;
});
//# sourceMappingURL=app.js.map
