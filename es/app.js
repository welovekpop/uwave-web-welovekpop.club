import Uwave from './Uwave';
import youTubeSource from './sources/youtube';
import soundCloudSource from './sources/soundcloud';
import AboutPage from './_wlk/AboutPage';

function readApplicationConfig() {
  try {
    return JSON.parse(document.getElementById('u-wave-config').textContent);
  } catch (e) {
    return {};
  }
}

var uw = new Uwave(readApplicationConfig()); // Configure the Media sources to be used by this üWave client instance.

uw.source(youTubeSource());
uw.source(soundCloudSource());
uw.setAboutPageComponent(AboutPage);
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
});
//# sourceMappingURL=app.js.map
