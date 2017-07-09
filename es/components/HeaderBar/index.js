import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import AppTitle from './AppTitle';
import Progress from './Progress';
import CurrentMedia from './CurrentMedia';
import Volume from './Volume';
import HistoryButton from './HistoryButton';
import CurrentDJ from './CurrentDJ';

var HeaderBar = function HeaderBar(_ref) {
  var className = _ref.className,
      title = _ref.title,
      dj = _ref.dj,
      media = _ref.media,
      mediaProgress = _ref.mediaProgress,
      mediaTimeRemaining = _ref.mediaTimeRemaining,
      volume = _ref.volume,
      muted = _ref.muted,
      hasAboutPage = _ref.hasAboutPage,
      onVolumeChange = _ref.onVolumeChange,
      onVolumeMute = _ref.onVolumeMute,
      onVolumeUnmute = _ref.onVolumeUnmute,
      onToggleRoomHistory = _ref.onToggleRoomHistory,
      onToggleAboutOverlay = _ref.onToggleAboutOverlay,
      attrs = _objectWithoutProperties(_ref, ['className', 'title', 'dj', 'media', 'mediaProgress', 'mediaTimeRemaining', 'volume', 'muted', 'hasAboutPage', 'onVolumeChange', 'onVolumeMute', 'onVolumeUnmute', 'onToggleRoomHistory', 'onToggleAboutOverlay']);

  return React.createElement(
    'div',
    _extends({
      className: cx('HeaderBar', className)
    }, attrs),
    _jsx(AppTitle, {
      className: 'HeaderBar-title',
      hasAboutPage: hasAboutPage,
      onClick: onToggleAboutOverlay
    }, void 0, title),
    _jsx(CurrentMedia, {
      className: 'HeaderBar-now-playing',
      media: media
    }),
    dj && _jsx(CurrentDJ, {
      className: 'HeaderBar-dj',
      dj: dj
    }),
    media && _jsx(Progress, {
      className: 'HeaderBar-progress',
      currentProgress: mediaProgress,
      timeRemaining: mediaTimeRemaining
    }),
    _jsx('div', {
      className: 'HeaderBar-volume'
    }, void 0, _jsx(Volume, {
      volume: volume,
      muted: muted,
      onVolumeChange: onVolumeChange,
      onMute: onVolumeMute,
      onUnmute: onVolumeUnmute
    })),
    _jsx('div', {
      className: 'HeaderBar-history'
    }, void 0, _jsx(HistoryButton, {
      onClick: onToggleRoomHistory
    }))
  );
};

HeaderBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  title: PropTypes.string,

  dj: PropTypes.object,
  media: PropTypes.object,
  mediaProgress: PropTypes.number.isRequired,
  mediaTimeRemaining: PropTypes.number.isRequired,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  hasAboutPage: PropTypes.bool.isRequired,

  onVolumeChange: PropTypes.func,
  onVolumeMute: PropTypes.func,
  onVolumeUnmute: PropTypes.func,
  onToggleRoomHistory: PropTypes.func,
  onToggleAboutOverlay: PropTypes.func
} : {};

export default HeaderBar;
//# sourceMappingURL=index.js.map
