'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _reactI18next = require('react-i18next');

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _settingSelectors = require('../../selectors/settingSelectors');

var _PlaybackActionCreators = require('../../actions/PlaybackActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stolen from YouTube

// State-related imports
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
  return (0, _jsx3.default)(_Tooltip2.default, {
    title: videoSize === 'large' ? t('settings.disableLargeVideo') : t('settings.enableLargeVideo'),
    placement: 'bottom'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    onClick: onToggleVideoSize
  }, void 0, (0, _jsx3.default)(_SvgIcon2.default, {
    viewBox: '6 6 24 24'
  }, void 0, (0, _jsx3.default)('path', {
    d: paths[videoSize],
    fillRule: 'evenodd'
  }))));
};

VideoSizeButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  videoSize: _propTypes2.default.oneOf(['small', 'large']).isRequired,
  onToggleVideoSize: _propTypes2.default.func.isRequired
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

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(VideoSizeButton);
//# sourceMappingURL=VideoSizeButton.js.map
//# sourceMappingURL=VideoSizeButton.js.map
