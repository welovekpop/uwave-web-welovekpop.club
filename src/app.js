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

const uw = new Uwave(readApplicationConfig());

// Configure the Media sources to be used by this üWave client instance.
uw.source('youtube', youTubeSource);
uw.source('soundcloud', soundCloudSource);

uw.setAboutPageComponent(AboutPage);

window.uw = uw;
