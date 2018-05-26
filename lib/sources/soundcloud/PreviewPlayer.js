"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _qsStringify = _interopRequireDefault(require("qs-stringify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEmbedUrl = function createEmbedUrl(sourceID) {
  return "https://w.soundcloud.com/player/?" + (0, _qsStringify.default)({
    url: "https://api.soundcloud.com/tracks/" + sourceID,
    color: '55B9FF',
    auto_play: true,
    hide_related: true,
    buying: false,
    liking: false,
    download: false,
    sharing: false,
    show_comments: false,
    visual: true
  });
};

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media;
  return (0, _jsx2.default)("iframe", {
    title: "SoundCloud Embed",
    width: "100%",
    height: "240",
    scrolling: "no",
    frameBorder: "no",
    src: createEmbedUrl(media.sourceID)
  });
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.object.isRequired
} : {};
var _default = PreviewPlayer;
exports.default = _default;
//# sourceMappingURL=PreviewPlayer.js.map
