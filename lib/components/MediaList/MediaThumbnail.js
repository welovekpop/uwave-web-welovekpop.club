"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaThumbnail = function MediaThumbnail(_ref) {
  var url = _ref.url;
  return (0, _jsx2.default)("div", {
    className: "MediaListRow-thumb"
  }, void 0, (0, _jsx2.default)("img", {
    className: "MediaListRow-image",
    src: url,
    alt: ""
  }));
};

MediaThumbnail.propTypes = process.env.NODE_ENV !== "production" ? {
  url: _propTypes.default.string.isRequired
} : {};
var _default = MediaThumbnail;
exports.default = _default;
//# sourceMappingURL=MediaThumbnail.js.map
