"use strict";

require("lie/polyfill");

require("whatwg-fetch");

var _pFinally = _interopRequireDefault(require("p-finally"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Polyfills for browsers that might not yet support Promises or the Fetch API
// (newer & better XMLHttpRequest).
if (!Promise.prototype.finally) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype.finally = function finally_(handler) {
    return (0, _pFinally.default)(this, handler);
  };
}
//# sourceMappingURL=polyfills.js.map
