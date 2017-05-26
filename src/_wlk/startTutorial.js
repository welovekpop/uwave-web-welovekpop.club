import loadScript from 'load-script2';
import tutorialScript from 'uwave-tutorial/build';

export default function startTutorial() {
  const script = new Promise((resolve, reject) => {
    loadScript(tutorialScript, (err) => {
      if (err) reject(err);
      else resolve(window.Sideshow);
    });
  });

  return Promise.all([
    script,
    import('uwave-tutorial/distr/stylesheets/sideshow.min.css'),
    import('uwave-tutorial/distr/fonts/sideshow-fontface.min.css')
  ]).then(([ Sideshow ]) => {
    Sideshow.start({ listAll: true });
  });
}
