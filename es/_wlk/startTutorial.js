export default function startTutorial() {
  return import('./tutorial'
  /* webpackChunkName: "tutorial" */
  ).then(function (_ref) {
    var Sideshow = _ref[0];
    Sideshow.start({
      listAll: true
    });
  });
}
//# sourceMappingURL=startTutorial.js.map
