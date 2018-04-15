"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _SongTitle = _interopRequireDefault(require("../SongTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentMedia = function CurrentMedia(_ref) {
  var t = _ref.t,
      className = _ref.className,
      media = _ref.media;
  return (0, _jsx2.default)("div", {
    className: className
  }, void 0, media ? (0, _jsx2.default)(_SongTitle.default, {
    artist: media.artist,
    title: media.title
  }) : t('booth.empty'));
};

CurrentMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  media: _propTypes.default.shape({
    artist: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired
  })
} : {};

var _default = (0, _reactI18next.translate)()(CurrentMedia); //# sourceMappingURL=CurrentMedia.js.map


exports.default = _default;
//# sourceMappingURL=CurrentMedia.js.map
