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

var _reactI18next = require('react-i18next');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _fullscreen = require('material-ui/svg-icons/navigation/fullscreen');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _fullscreenExit = require('material-ui/svg-icons/navigation/fullscreen-exit');

var _fullscreenExit2 = _interopRequireDefault(_fullscreenExit);

var _VideoSizeButton = require('./VideoSizeButton');

var _VideoSizeButton2 = _interopRequireDefault(_VideoSizeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fullscreenExit2.default, {});

var _ref2 = (0, _jsx3.default)(_fullscreen2.default, {});

var renderFullscreenIcon = function renderFullscreenIcon(isFullscreen) {
  return isFullscreen ? _ref : _ref2;
};

var _ref4 = (0, _jsx3.default)(_VideoSizeButton2.default, {});

var VideoToolbar = function VideoToolbar(_ref3) {
  var t = _ref3.t,
      children = _ref3.children,
      isFullscreen = _ref3.isFullscreen,
      onFullscreenEnter = _ref3.onFullscreenEnter,
      onFullscreenExit = _ref3.onFullscreenExit;
  return (0, _jsx3.default)('div', {
    className: 'Video-overlay Video-toolbar'
  }, void 0, children, _ref4, (0, _jsx3.default)(_IconButton2.default, {
    onClick: isFullscreen ? onFullscreenExit : onFullscreenEnter,
    tooltip: isFullscreen ? t('settings.disableFullscreen') : t('settings.enableFullscreen'),
    tooltipPosition: 'bottom-left'
  }, void 0, renderFullscreenIcon(isFullscreen)));
};

VideoToolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onFullscreenEnter: _propTypes2.default.func.isRequired,
  onFullscreenExit: _propTypes2.default.func.isRequired,
  isFullscreen: _propTypes2.default.bool,
  /**
   * Optional further video tools.
   */
  children: _propTypes2.default.node
} : {};

exports.default = (0, _reactI18next.translate)()(VideoToolbar);
//# sourceMappingURL=VideoToolbar.js.map
//# sourceMappingURL=VideoToolbar.js.map
