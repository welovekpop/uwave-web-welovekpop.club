"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactI18next = require("react-i18next");

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _SvgIcon = _interopRequireDefault(require("material-ui/SvgIcon"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _settingSelectors = require("../../selectors/settingSelectors");

var _PlaybackActionCreators = require("../../actions/PlaybackActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// State-related imports
// Stolen from YouTube
var paths = {
  // Currently small, show "enlarge" icon:
  small: 'm 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z',
  // Currently large, show smaller icon: ("ensmall"?! 😂)
  large: 'm 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z'
};

var VideoSizeButton = function VideoSizeButton(_ref) {
  var t = _ref.t,
      videoSize = _ref.videoSize,
      onToggleVideoSize = _ref.onToggleVideoSize;
  return (0, _jsx2.default)(_Tooltip.default, {
    title: videoSize === 'large' ? t('settings.disableLargeVideo') : t('settings.enableLargeVideo'),
    placement: "bottom"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    onClick: onToggleVideoSize
  }, void 0, (0, _jsx2.default)(_SvgIcon.default, {
    viewBox: "6 6 24 24"
  }, void 0, (0, _jsx2.default)("path", {
    d: paths[videoSize],
    fillRule: "evenodd"
  }))));
};

VideoSizeButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  videoSize: _propTypes.default.oneOf(['small', 'large']).isRequired,
  onToggleVideoSize: _propTypes.default.func.isRequired
} : {};
var mapStateToProps = (0, _reselect.createStructuredSelector)({
  videoSize: _settingSelectors.videoSizeSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggleVideoSize: function onToggleVideoSize() {
      return dispatch((0, _PlaybackActionCreators.toggleVideoSize)());
    }
  };
};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(VideoSizeButton); //# sourceMappingURL=VideoSizeButton.js.map


exports.default = _default;
//# sourceMappingURL=VideoSizeButton.js.map
