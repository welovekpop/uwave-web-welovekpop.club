"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Fullscreen = _interopRequireDefault(require("@material-ui/icons/Fullscreen"));

var _FullscreenExit = _interopRequireDefault(require("@material-ui/icons/FullscreenExit"));

var _VideoSizeButton = _interopRequireDefault(require("./VideoSizeButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_FullscreenExit.default, {});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Fullscreen.default, {});

var renderFullscreenIcon = function renderFullscreenIcon(isFullscreen) {
  return isFullscreen ? _ref : _ref2;
};

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_VideoSizeButton.default, {});

var VideoToolbar = function VideoToolbar(_ref3) {
  var t = _ref3.t,
      children = _ref3.children,
      isFullscreen = _ref3.isFullscreen,
      onFullscreenEnter = _ref3.onFullscreenEnter,
      onFullscreenExit = _ref3.onFullscreenExit;
  return (0, _jsx2.default)("div", {
    className: "Video-overlay Video-toolbar"
  }, void 0, children, _ref4, (0, _jsx2.default)(_Tooltip.default, {
    title: isFullscreen ? t('settings.disableFullscreen') : t('settings.enableFullscreen'),
    placement: "bottom-end"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    onClick: isFullscreen ? onFullscreenExit : onFullscreenEnter
  }, void 0, renderFullscreenIcon(isFullscreen))));
};

VideoToolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onFullscreenEnter: _propTypes.default.func.isRequired,
  onFullscreenExit: _propTypes.default.func.isRequired,
  isFullscreen: _propTypes.default.bool,

  /**
   * Optional further video tools.
   */
  children: _propTypes.default.node
} : {};

var _default = (0, _reactI18next.translate)()(VideoToolbar); //# sourceMappingURL=VideoToolbar.js.map


exports.default = _default;
//# sourceMappingURL=VideoToolbar.js.map
