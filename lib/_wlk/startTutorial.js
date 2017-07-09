'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startTutorial;

var _loadScript = require('load-script2');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _build = require('uwave-tutorial/build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startTutorial() {
  var script = new Promise(function (resolve, reject) {
    (0, _loadScript2.default)(_build2.default, function (err) {
      if (err) reject(err);else resolve(window.Sideshow);
    });
  });

  return Promise.all([script, System.import('uwave-tutorial/distr/stylesheets/sideshow.min.css'), System.import('uwave-tutorial/distr/fonts/sideshow-fontface.min.css')]).then(function (_ref) {
    var Sideshow = _ref[0];

    Sideshow.start({ listAll: true });
  });
}
//# sourceMappingURL=startTutorial.js.map
//# sourceMappingURL=startTutorial.js.map
