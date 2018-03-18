'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppTitle = require('./AppTitle');

var _AppTitle2 = _interopRequireDefault(_AppTitle);

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _CurrentMedia = require('./CurrentMedia');

var _CurrentMedia2 = _interopRequireDefault(_CurrentMedia);

var _Volume = require('./Volume');

var _Volume2 = _interopRequireDefault(_Volume);

var _HistoryButton = require('./HistoryButton');

var _HistoryButton2 = _interopRequireDefault(_HistoryButton);

var _CurrentDJ = require('./CurrentDJ');

var _CurrentDJ2 = _interopRequireDefault(_CurrentDJ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      attrs = (0, _objectWithoutProperties3.default)(_ref, ['className', 'title', 'dj', 'media', 'mediaProgress', 'mediaTimeRemaining', 'volume', 'muted', 'hasAboutPage', 'onVolumeChange', 'onVolumeMute', 'onVolumeUnmute', 'onToggleRoomHistory', 'onToggleAboutOverlay']);

  return _react2.default.createElement('div', (0, _extends3.default)({
    className: (0, _classnames2.default)('HeaderBar', className)
  }, attrs), (0, _jsx3.default)(_AppTitle2.default, {
    className: 'HeaderBar-title',
    hasAboutPage: hasAboutPage,
    onClick: onToggleAboutOverlay
  }, void 0, title), (0, _jsx3.default)('div', {
    className: 'HeaderBar-nowPlaying'
  }, void 0, (0, _jsx3.default)(_CurrentMedia2.default, {
    className: 'HeaderBar-media',
    media: media
  }), dj && (0, _jsx3.default)(_CurrentDJ2.default, {
    className: 'HeaderBar-dj',
    dj: dj
  })), media && (0, _jsx3.default)(_Progress2.default, {
    className: 'HeaderBar-progress',
    currentProgress: mediaProgress,
    timeRemaining: mediaTimeRemaining
  }), (0, _jsx3.default)('div', {
    className: 'HeaderBar-volume'
  }, void 0, (0, _jsx3.default)(_Volume2.default, {
    volume: volume,
    muted: muted,
    onVolumeChange: onVolumeChange,
    onMute: onVolumeMute,
    onUnmute: onVolumeUnmute
  })), (0, _jsx3.default)('div', {
    className: 'HeaderBar-history'
  }, void 0, (0, _jsx3.default)(_HistoryButton2.default, {
    onClick: onToggleRoomHistory
  })));
};

HeaderBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  title: _propTypes2.default.string,

  dj: _propTypes2.default.object,
  media: _propTypes2.default.object,
  mediaProgress: _propTypes2.default.number.isRequired,
  mediaTimeRemaining: _propTypes2.default.number.isRequired,
  volume: _propTypes2.default.number,
  muted: _propTypes2.default.bool,
  hasAboutPage: _propTypes2.default.bool.isRequired,

  onVolumeChange: _propTypes2.default.func,
  onVolumeMute: _propTypes2.default.func,
  onVolumeUnmute: _propTypes2.default.func,
  onToggleRoomHistory: _propTypes2.default.func,
  onToggleAboutOverlay: _propTypes2.default.func
} : {};

exports.default = HeaderBar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
