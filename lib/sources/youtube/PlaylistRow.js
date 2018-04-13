"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistAdd.default, {});

var PlaylistRow = function PlaylistRow(_ref) {
  var className = _ref.className,
      playlist = _ref.playlist,
      onImport = _ref.onImport,
      attrs = (0, _objectWithoutProperties2.default)(_ref, ["className", "playlist", "onImport"]);
  var thumbnail = (0, _jsx2.default)("div", {
    className: "MediaListRow-thumb"
  }, void 0, (0, _jsx2.default)("img", {
    className: "MediaListRow-image",
    src: playlist.thumbnail,
    alt: ""
  }, playlist.id));
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('MediaListRow', 'src-youtube-PlaylistRow', className)
  }, attrs), thumbnail, (0, _jsx2.default)("div", {
    className: "src-youtube-PlaylistRow-info",
    title: playlist.description
  }, void 0, (0, _jsx2.default)("div", {
    className: "src-youtube-PlaylistRow-name"
  }, void 0, playlist.name), (0, _jsx2.default)("div", {
    className: "src-youtube-PlaylistRow-size"
  }, void 0, "Items: ", playlist.size)), (0, _jsx2.default)(_IconButton.default, {
    className: "src-youtube-PlaylistRow-import",
    onClick: onImport
  }, void 0, _ref2));
};

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  playlist: _propTypes.default.object.isRequired,
  onImport: _propTypes.default.func.isRequired
} : {};
var _default = PlaylistRow; //# sourceMappingURL=PlaylistRow.js.map

exports.default = _default;
//# sourceMappingURL=PlaylistRow.js.map
