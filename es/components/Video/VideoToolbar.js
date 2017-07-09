import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import IconButton from 'material-ui/IconButton';
import EnterFullscreenIcon from 'material-ui/svg-icons/navigation/fullscreen';
import ExitFullscreenIcon from 'material-ui/svg-icons/navigation/fullscreen-exit';

import VideoSizeButton from './VideoSizeButton';

var _ref = _jsx(ExitFullscreenIcon, {});

var _ref2 = _jsx(EnterFullscreenIcon, {});

var renderFullscreenIcon = function renderFullscreenIcon(isFullscreen) {
  return isFullscreen ? _ref : _ref2;
};

var _ref4 = _jsx(VideoSizeButton, {});

var VideoToolbar = function VideoToolbar(_ref3) {
  var t = _ref3.t,
      children = _ref3.children,
      isFullscreen = _ref3.isFullscreen,
      onFullscreenEnter = _ref3.onFullscreenEnter,
      onFullscreenExit = _ref3.onFullscreenExit;
  return _jsx('div', {
    className: 'Video-overlay Video-toolbar'
  }, void 0, children, _ref4, _jsx(IconButton, {
    onClick: isFullscreen ? onFullscreenExit : onFullscreenEnter,
    tooltip: isFullscreen ? t('settings.disableFullscreen') : t('settings.enableFullscreen'),
    tooltipPosition: 'bottom-left'
  }, void 0, renderFullscreenIcon(isFullscreen)));
};

VideoToolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onFullscreenEnter: PropTypes.func.isRequired,
  onFullscreenExit: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
  /**
   * Optional further video tools.
   */
  children: PropTypes.node
} : {};

export default translate()(VideoToolbar);
//# sourceMappingURL=VideoToolbar.js.map
