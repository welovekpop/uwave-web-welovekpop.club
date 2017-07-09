import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import SongTitle from '../SongTitle';
import Eta from './Eta';

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
    return _jsx('div', {
      className: cx('NextMedia', className)
    }, void 0, t('playlists.noPlaylistsCreate'));
  }

  var key = 'eta.empty';
  if (userIsDJ) {
    key = 'eta.playingNow';
  } else if (userInWaitlist) {
    key = 'eta.eta';
  }

  var mediaEl = nextMedia ? React.createElement(SongTitle, nextMedia) : _jsx('div', {
    className: 'SongTitle'
  }, void 0, t('playlists.empty'));
  var playlistEl = _jsx('span', {
    className: 'NextMedia-playlist'
  }, void 0, playlist.name);
  var etaEl = _jsx(Eta, {
    className: 'NextMedia-eta',
    base: baseEta,
    endTime: mediaEndTime
  });
  return _jsx('div', {
    className: cx('NextMedia', className)
  }, void 0, mediaEl, _jsx(Interpolate, {
    i18nKey: key,
    playlist: playlistEl,
    eta: etaEl
  }));
};

NextMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  playlist: PropTypes.object,
  nextMedia: PropTypes.object,
  userInWaitlist: PropTypes.bool.isRequired,
  userIsDJ: PropTypes.bool.isRequired,
  baseEta: PropTypes.number,
  mediaEndTime: PropTypes.number
} : {};

export default compose(translate(), pure)(NextMedia);
//# sourceMappingURL=NextMedia.js.map
