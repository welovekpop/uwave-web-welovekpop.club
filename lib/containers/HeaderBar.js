"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _except = _interopRequireDefault(require("except"));

var _reselect = require("reselect");

var _PlaybackActionCreators = require("../actions/PlaybackActionCreators");

var _OverlayActionCreators = require("../actions/OverlayActionCreators");

var _boothSelectors = require("../selectors/boothSelectors");

var _settingSelectors = require("../selectors/settingSelectors");

var _HeaderBar = _interopRequireDefault(require("../components/HeaderBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  mediaProgress: _boothSelectors.mediaProgressSelector,
  mediaTimeRemaining: _boothSelectors.timeRemainingSelector,
  media: _boothSelectors.mediaSelector,
  dj: _boothSelectors.djSelector,
  volume: _settingSelectors.volumeSelector,
  muted: _settingSelectors.isMutedSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onVolumeChange: _PlaybackActionCreators.setVolume,
    onVolumeMute: _PlaybackActionCreators.mute,
    onVolumeUnmute: _PlaybackActionCreators.unmute,
    onToggleRoomHistory: _OverlayActionCreators.toggleRoomHistory,
    onToggleAboutOverlay: _OverlayActionCreators.toggleAbout
  }, dispatch);
};

var _default = (0, _compose.default)((0, _getContext.default)({
  uwave: _propTypes.default.object
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), // Remove the "uwave" prop—it was only necessary for the selector.
(0, _mapProps.default)(function (props) {
  return (0, _except.default)(props, 'uwave');
}))(_HeaderBar.default); //# sourceMappingURL=HeaderBar.js.map


exports.default = _default;
//# sourceMappingURL=HeaderBar.js.map
