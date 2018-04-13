"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("recompose/compose"));

var _redux = require("redux");

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _timed = _interopRequireDefault(require("../utils/timed"));

var _PlaybackActionCreators = require("../actions/PlaybackActionCreators");

var _boothSelectors = require("../selectors/boothSelectors");

var _Video = _interopRequireDefault(require("../components/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  historyID: _boothSelectors.historyIDSelector,
  media: _boothSelectors.mediaSelector,
  seek: _boothSelectors.timeElapsedSelector,
  volume: _boothSelectors.playbackVolumeSelector,
  isFullscreen: function isFullscreen(state) {
    return state.booth.isFullscreen;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onFullscreenEnter: _PlaybackActionCreators.enterFullscreen,
    onFullscreenExit: _PlaybackActionCreators.exitFullscreen
  }, dispatch);
};

var _default = (0, _compose.default)((0, _timed.default)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(_Video.default); //# sourceMappingURL=Video.js.map


exports.default = _default;
//# sourceMappingURL=Video.js.map
