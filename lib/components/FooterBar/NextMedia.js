'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SongTitle = require('../SongTitle');

var _SongTitle2 = _interopRequireDefault(_SongTitle);

var _Eta = require('./Eta');

var _Eta2 = _interopRequireDefault(_Eta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextMedia = function NextMedia(_ref) {
  var t = _ref.t,
      className = _ref.className,
      playlist = _ref.playlist,
      nextMedia = _ref.nextMedia,
      userInWaitlist = _ref.userInWaitlist,
      userIsDJ = _ref.userIsDJ,
      baseEta = _ref.baseEta,
      mediaEndTime = _ref.mediaEndTime;

  if (!playlist) {
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('NextMedia', className)
    }, void 0, t('playlists.noPlaylistsCreate'));
  }

  var key = 'eta.empty';
  if (userIsDJ) {
    key = 'eta.playingNow';
  } else if (userInWaitlist) {
    key = 'eta.eta';
  }

  var mediaEl = nextMedia ? _react2.default.createElement(_SongTitle2.default, nextMedia) : (0, _jsx3.default)('div', {
    className: 'SongTitle'
  }, void 0, t('playlists.empty'));
  var playlistEl = (0, _jsx3.default)('span', {
    className: 'NextMedia-playlist'
  }, void 0, playlist.name);
  var etaEl = (0, _jsx3.default)(_Eta2.default, {
    className: 'NextMedia-eta',
    base: baseEta,
    endTime: mediaEndTime
  });
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('NextMedia', className)
  }, void 0, mediaEl, (0, _jsx3.default)(_reactI18next.Interpolate, {
    i18nKey: key,
    playlist: playlistEl,
    eta: etaEl
  }));
};

NextMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  playlist: _propTypes2.default.object,
  nextMedia: _propTypes2.default.object,
  userInWaitlist: _propTypes2.default.bool.isRequired,
  userIsDJ: _propTypes2.default.bool.isRequired,
  baseEta: _propTypes2.default.number,
  mediaEndTime: _propTypes2.default.number
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default)(NextMedia);
//# sourceMappingURL=NextMedia.js.map
//# sourceMappingURL=NextMedia.js.map
