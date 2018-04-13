/**
 * Create a vendor-prefixed inline CSS object for a "transform" property.
 *
 * @param {string} transform CSS transform value.
 * @return {Object}
 */
export default function transformStyle(transform) {
  return {
    transform: transform,
    WebkitTransform: transform
  };
}
//# sourceMappingURL=transformStyle.js.map
