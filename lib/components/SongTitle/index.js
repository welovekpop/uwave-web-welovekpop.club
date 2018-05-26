"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("span", {
  className: "SongTitle-separator"
}, void 0, " \u2013 ");

var SongTitle = function SongTitle(_ref) {
  var className = _ref.className,
      artist = _ref.artist,
      title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('SongTitle', "SongTitle--" + size, className),
    title: artist + " \u2013 " + title
  }, void 0, (0, _jsx2.default)("span", {
    className: "SongTitle-artist"
  }, void 0, artist), _ref2, (0, _jsx2.default)("span", {
    className: "SongTitle-title"
  }, void 0, title));
};

SongTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  artist: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  size: _propTypes.default.string
} : {};

var _default = (0, _pure.default)(SongTitle);

exports.default = _default;
//# sourceMappingURL=index.js.map
