"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Header = _interopRequireDefault(require("../../Overlay/Header"));

var _MediaSearchBar = _interopRequireDefault(require("../../../containers/MediaSearchBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MediaSearchBar.default, {
  className: "PlaylistHeader-search"
});

var PlaylistManagerHeader = function PlaylistManagerHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx2.default)(_Header.default, {
    className: (0, _classnames.default)('PlaylistHeader', className),
    title: t('playlists.title'),
    onCloseOverlay: onCloseOverlay
  }, void 0, _ref2);
};

PlaylistManagerHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  t: _propTypes.default.func.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PlaylistManagerHeader); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
