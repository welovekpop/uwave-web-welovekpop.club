'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDuration;
var padZero = function padZero(n) {
  return n < 10 ? '0' + n : n;
};

function formatDuration(duration) {
  var h = Math.floor(duration / 3600);
  var m = Math.floor(duration % 3600 / 60);
  var s = padZero(Math.floor(duration % 60));
  return (h > 0 ? [h, padZero(m), s] : [m, s]).join(':');
}
//# sourceMappingURL=formatDuration.js.map
//# sourceMappingURL=formatDuration.js.map
