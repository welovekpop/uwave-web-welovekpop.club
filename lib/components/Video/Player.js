"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _injectMediaSources = _interopRequireDefault(require("../../utils/injectMediaSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media,
      _ref$seek = _ref.seek,
      seek = _ref$seek === void 0 ? 0 : _ref$seek,
      getMediaSource = _ref.getMediaSource,
      props = (0, _objectWithoutProperties2.default)(_ref, ["media", "seek", "getMediaSource"]);

  var _getMediaSource = getMediaSource(media.sourceType),
      Player = _getMediaSource.Player;

  return _react.default.createElement(Player, (0, _extends2.default)({
    enabled: true,
    active: true,
    seek: seek,
    media: media
  }, props));
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.object.isRequired,
  seek: _propTypes.default.number,
  getMediaSource: _propTypes.default.func.isRequired
} : {};

var _default = (0, _injectMediaSources.default)()(PreviewPlayer);

exports.default = _default;
//# sourceMappingURL=Player.js.map
