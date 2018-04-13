"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformStyle;

/**
 * Create a vendor-prefixed inline CSS object for a "transform" property.
 *
 * @param {string} transform CSS transform value.
 * @return {Object}
 */
function transformStyle(transform) {
  return {
    transform: transform,
    WebkitTransform: transform
  };
} //# sourceMappingURL=transformStyle.js.map
//# sourceMappingURL=transformStyle.js.map
