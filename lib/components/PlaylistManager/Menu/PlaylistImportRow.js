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

var _Progress = require("material-ui/Progress");

var _Input = _interopRequireDefault(require("@material-ui/icons/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, (0, _jsx2.default)(_Input.default, {}));

var PlaylistImportRow = function PlaylistImportRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      importing = _ref.importing,
      onClick = _ref.onClick;
  var icon;

  if (importing) {
    icon = _ref2;
  } else {
    icon = _ref3;
  }

  return (0, _jsx2.default)("button", {
    role: "menuitem",
    className: (0, _classnames.default)('PlaylistMenuRow', 'PlaylistMenuRow--import', className),
    onClick: onClick
  }, void 0, (0, _jsx2.default)("div", {
    className: "PlaylistMenuRow-content"
  }, void 0, (0, _jsx2.default)("div", {
    className: "PlaylistMenuRow-title"
  }, void 0, icon, t('playlists.import.title'))));
};

PlaylistImportRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  importing: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PlaylistImportRow); //# sourceMappingURL=PlaylistImportRow.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistImportRow.js.map
