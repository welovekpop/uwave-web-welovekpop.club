"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppTitle = _interopRequireDefault(require("./AppTitle"));

var _Progress = _interopRequireDefault(require("./Progress"));

var _CurrentMedia = _interopRequireDefault(require("./CurrentMedia"));

var _Volume = _interopRequireDefault(require("./Volume"));

var _HistoryButton = _interopRequireDefault(require("./HistoryButton"));

var _CurrentDJ = _interopRequireDefault(require("./CurrentDJ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderBar = function HeaderBar(_ref) {
  var className = _ref.className,
      title = _ref.title,
      dj = _ref.dj,
      media = _ref.media,
      mediaProgress = _ref.mediaProgress,
      mediaTimeRemaining = _ref.mediaTimeRemaining,
      volume = _ref.volume,
      muted = _ref.muted,
      onVolumeChange = _ref.onVolumeChange,
      onVolumeMute = _ref.onVolumeMute,
      onVolumeUnmute = _ref.onVolumeUnmute,
      onToggleRoomHistory = _ref.onToggleRoomHistory,
      onToggleAboutOverlay = _ref.onToggleAboutOverlay,
      attrs = (0, _objectWithoutProperties2.default)(_ref, ["className", "title", "dj", "media", "mediaProgress", "mediaTimeRemaining", "volume", "muted", "onVolumeChange", "onVolumeMute", "onVolumeUnmute", "onToggleRoomHistory", "onToggleAboutOverlay"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('HeaderBar', className)
  }, attrs), (0, _jsx2.default)(_AppTitle.default, {
    className: "HeaderBar-title",
    onClick: onToggleAboutOverlay
  }, void 0, title), (0, _jsx2.default)("div", {
    className: "HeaderBar-nowPlaying"
  }, void 0, (0, _jsx2.default)(_CurrentMedia.default, {
    className: "HeaderBar-media",
    media: media
  }), dj && (0, _jsx2.default)(_CurrentDJ.default, {
    className: "HeaderBar-dj",
    dj: dj
  })), media && (0, _jsx2.default)(_Progress.default, {
    className: "HeaderBar-progress",
    currentProgress: mediaProgress,
    timeRemaining: mediaTimeRemaining
  }), (0, _jsx2.default)("div", {
    className: "HeaderBar-volume"
  }, void 0, (0, _jsx2.default)(_Volume.default, {
    volume: volume,
    muted: muted,
    onVolumeChange: onVolumeChange,
    onMute: onVolumeMute,
    onUnmute: onVolumeUnmute
  })), (0, _jsx2.default)("div", {
    className: "HeaderBar-history"
  }, void 0, (0, _jsx2.default)(_HistoryButton.default, {
    onClick: onToggleRoomHistory
  })));
};

HeaderBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  dj: _propTypes.default.object,
  media: _propTypes.default.object,
  mediaProgress: _propTypes.default.number.isRequired,
  mediaTimeRemaining: _propTypes.default.number.isRequired,
  volume: _propTypes.default.number,
  muted: _propTypes.default.bool,
  onVolumeChange: _propTypes.default.func,
  onVolumeMute: _propTypes.default.func,
  onVolumeUnmute: _propTypes.default.func,
  onToggleRoomHistory: _propTypes.default.func,
  onToggleAboutOverlay: _propTypes.default.func
} : {};
var _default = HeaderBar; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
