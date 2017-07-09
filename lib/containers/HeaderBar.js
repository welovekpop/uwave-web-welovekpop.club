'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

var _reselect = require('reselect');

var _PlaybackActionCreators = require('../actions/PlaybackActionCreators');

var _OverlayActionCreators = require('../actions/OverlayActionCreators');

var _boothSelectors = require('../selectors/boothSelectors');

var _settingSelectors = require('../selectors/settingSelectors');

var _HeaderBar = require('../components/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  mediaProgress: _boothSelectors.mediaProgressSelector,
  mediaTimeRemaining: _boothSelectors.timeRemainingSelector,
  media: _boothSelectors.mediaSelector,
  dj: _boothSelectors.djSelector,
  volume: _settingSelectors.volumeSelector,
  muted: _settingSelectors.isMutedSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    return props.uwave.getAboutPageComponent() !== null;
  }
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

exports.default = (0, _compose2.default)((0, _getContext2.default)({ uwave: _propTypes2.default.object }), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps),
// Remove the "uwave" prop—it was only necessary for the selector.
(0, _mapProps2.default)(function (props) {
  return (0, _except2.default)(props, 'uwave');
}))(_HeaderBar2.default);
//# sourceMappingURL=HeaderBar.js.map
//# sourceMappingURL=HeaderBar.js.map
