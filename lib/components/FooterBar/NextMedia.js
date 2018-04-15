"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _SongTitle = _interopRequireDefault(require("../SongTitle"));

var _Eta = _interopRequireDefault(require("./Eta"));

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
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('NextMedia', className)
    }, void 0, t('playlists.noPlaylistsCreate'));
  }

  var key = 'eta.empty';

  if (userIsDJ) {
    key = 'eta.playingNow';
  } else if (userInWaitlist) {
    key = 'eta.eta';
  }

  var mediaEl = nextMedia ? _react.default.createElement(_SongTitle.default, nextMedia) : (0, _jsx2.default)("div", {
    className: "SongTitle"
  }, void 0, t('playlists.empty'));
  var playlistEl = (0, _jsx2.default)("span", {
    className: "NextMedia-playlist"
  }, void 0, playlist.name);
  var etaEl = (0, _jsx2.default)(_Eta.default, {
    className: "NextMedia-eta",
    base: baseEta,
    endTime: mediaEndTime
  });
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('NextMedia', className)
  }, void 0, mediaEl, (0, _jsx2.default)(_reactI18next.Interpolate, {
    i18nKey: key,
    playlist: playlistEl,
    eta: etaEl
  }));
};

NextMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  playlist: _propTypes.default.object,
  nextMedia: _propTypes.default.object,
  userInWaitlist: _propTypes.default.bool.isRequired,
  userIsDJ: _propTypes.default.bool.isRequired,
  baseEta: _propTypes.default.number,
  mediaEndTime: _propTypes.default.number
} : {};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default)(NextMedia); //# sourceMappingURL=NextMedia.js.map


exports.default = _default;
//# sourceMappingURL=NextMedia.js.map
