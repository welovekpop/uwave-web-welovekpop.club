import loadScript from 'load-script2';
import tutorialScript from 'uwave-tutorial/build';

export default function startTutorial() {
  var script = new Promise(function (resolve, reject) {
    loadScript(tutorialScript, function (err) {
      if (err) reject(err);else resolve(window.Sideshow);
    });
  });

  return Promise.all([script, import('uwave-tutorial/distr/stylesheets/sideshow.min.css'), import('uwave-tutorial/distr/fonts/sideshow-fontface.min.css')]).then(function (_ref) {
    var Sideshow = _ref[0];

    Sideshow.start({ listAll: true });
  });
}
//# sourceMappingURL=startTutorial.js.map
