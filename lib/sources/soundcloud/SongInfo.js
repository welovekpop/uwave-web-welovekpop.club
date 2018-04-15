"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Headset = _interopRequireDefault(require("@material-ui/icons/Headset"));

var _MusicNote = _interopRequireDefault(require("@material-ui/icons/MusicNote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  float: 'left',
  marginRight: 3
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Headset.default, {
  style: iconStyles
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_MusicNote.default, {
  style: iconStyles
});

var SongInfo = function SongInfo(_ref) {
  var artist = _ref.artist,
      title = _ref.title,
      artistUrl = _ref.artistUrl,
      trackUrl = _ref.trackUrl;
  return (0, _jsx2.default)("div", {
    className: "src-soundcloud-SongInfo"
  }, void 0, (0, _jsx2.default)("a", {
    className: "src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--artist",
    target: "_blank",
    rel: "noopener noreferrer",
    href: artistUrl,
    title: artist
  }, void 0, _ref2, artist), (0, _jsx2.default)("a", {
    className: "src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--track",
    target: "_blank",
    rel: "noopener noreferrer",
    href: trackUrl,
    title: title
  }, void 0, _ref3, title));
};

SongInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  artist: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  artistUrl: _propTypes.default.string.isRequired,
  trackUrl: _propTypes.default.string.isRequired
} : {};
var _default = SongInfo; //# sourceMappingURL=SongInfo.js.map

exports.default = _default;
//# sourceMappingURL=SongInfo.js.map
