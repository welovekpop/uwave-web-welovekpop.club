"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _injectMediaSources = _interopRequireDefault(require("../../../utils/injectMediaSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportSourceBlock = function ImportSourceBlock(_ref) {
  var getMediaSource = _ref.getMediaSource,
      sourceType = _ref.sourceType,
      title = _ref.title,
      children = _ref.children;
  return (0, _jsx2.default)("div", {
    className: "ImportSourceBlock PlaylistImport-source"
  }, void 0, (0, _jsx2.default)("img", {
    className: "ImportSourceBlock-image",
    alt: title,
    title: title,
    src: getMediaSource(sourceType).logo
  }), children);
};

ImportSourceBlock.propTypes = process.env.NODE_ENV !== "production" ? {
  getMediaSource: _propTypes.default.func.isRequired,
  sourceType: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
} : {};

var _default = (0, _injectMediaSources.default)()(ImportSourceBlock); //# sourceMappingURL=ImportSourceBlock.js.map


exports.default = _default;
//# sourceMappingURL=ImportSourceBlock.js.map
