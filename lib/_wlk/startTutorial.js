"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startTutorial;

function startTutorial() {
  return Promise.resolve().then(() => require('./tutorial')).then(function (_ref) {
    var Sideshow = _ref[0];
    Sideshow.start({
      listAll: true
    });
  });
}
//# sourceMappingURL=startTutorial.js.map
