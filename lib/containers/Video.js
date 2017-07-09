'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _redux = require('redux');

var _reselect = require('reselect');

var _reactRedux = require('react-redux');

var _timed = require('../utils/timed');

var _timed2 = _interopRequireDefault(_timed);

var _PlaybackActionCreators = require('../actions/PlaybackActionCreators');

var _boothSelectors = require('../selectors/boothSelectors');

var _Video = require('../components/Video');

var _Video2 = _interopRequireDefault(_Video);

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

exports.default = (0, _compose2.default)((0, _timed2.default)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(_Video2.default);
//# sourceMappingURL=Video.js.map
//# sourceMappingURL=Video.js.map
