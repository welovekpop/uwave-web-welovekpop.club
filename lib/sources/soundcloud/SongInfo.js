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

var _Headset = require('material-ui-icons/Headset');

var _Headset2 = _interopRequireDefault(_Headset);

var _MusicNote = require('material-ui-icons/MusicNote');

var _MusicNote2 = _interopRequireDefault(_MusicNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  float: 'left',
  marginRight: 3
};

var _ref2 = (0, _jsx3.default)(_Headset2.default, {
  style: iconStyles
});

var _ref3 = (0, _jsx3.default)(_MusicNote2.default, {
  style: iconStyles
});

var SongInfo = function SongInfo(_ref) {
  var artist = _ref.artist,
      title = _ref.title,
      artistUrl = _ref.artistUrl,
      trackUrl = _ref.trackUrl;
  return (0, _jsx3.default)('div', {
    className: 'src-soundcloud-SongInfo'
  }, void 0, (0, _jsx3.default)('a', {
    className: 'src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--artist',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: artistUrl,
    title: artist
  }, void 0, _ref2, artist), (0, _jsx3.default)('a', {
    className: 'src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--track',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: trackUrl,
    title: title
  }, void 0, _ref3, title));
};

SongInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  artist: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  artistUrl: _propTypes2.default.string.isRequired,
  trackUrl: _propTypes2.default.string.isRequired
} : {};

exports.default = SongInfo;
//# sourceMappingURL=SongInfo.js.map
//# sourceMappingURL=SongInfo.js.map
