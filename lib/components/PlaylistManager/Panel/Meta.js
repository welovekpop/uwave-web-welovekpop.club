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

var _Checkbox = _interopRequireDefault(require("material-ui/Checkbox"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _RenamePlaylistButton = _interopRequireDefault(require("./RenamePlaylistButton"));

var _DeletePlaylistButton = _interopRequireDefault(require("./DeletePlaylistButton"));

var _ShufflePlaylistButton = _interopRequireDefault(require("./ShufflePlaylistButton"));

var _PlaylistFilter = _interopRequireDefault(require("./PlaylistFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_CheckBoxOutlineBlank.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_CheckBox.default, {
  nativeColor: "#fff"
});

var PlaylistMeta = function PlaylistMeta(_ref) {
  var t = _ref.t,
      className = _ref.className,
      active = _ref.active,
      name = _ref.name,
      onShufflePlaylist = _ref.onShufflePlaylist,
      onActivatePlaylist = _ref.onActivatePlaylist,
      onRenamePlaylist = _ref.onRenamePlaylist,
      onDeletePlaylist = _ref.onDeletePlaylist,
      onNotDeletable = _ref.onNotDeletable,
      onFilter = _ref.onFilter;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistMeta', className, active ? 'PlaylistMeta--active' : '')
  }, void 0, (0, _jsx2.default)("div", {
    className: "PlaylistMeta-name"
  }, void 0, name), (0, _jsx2.default)("div", {
    className: "PlaylistMeta-active"
  }, void 0, (0, _jsx2.default)(_Checkbox.default, {
    checked: active,
    onChange: active ? null : onActivatePlaylist,
    icon: _ref2,
    checkedIcon: _ref3
  }), (0, _jsx2.default)("span", {}, void 0, active ? t('playlists.active') : t('playlists.activate'))), (0, _jsx2.default)(_PlaylistFilter.default, {
    onFilter: onFilter
  }), (0, _jsx2.default)(_ShufflePlaylistButton.default, {
    onShuffle: onShufflePlaylist
  }), (0, _jsx2.default)(_RenamePlaylistButton.default, {
    initialName: name,
    onRename: onRenamePlaylist
  }), (0, _jsx2.default)(_DeletePlaylistButton.default, {
    active: active,
    onNotDeletable: onNotDeletable,
    onDelete: onDeletePlaylist
  }));
};

PlaylistMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  active: _propTypes.default.bool.isRequired,
  name: _propTypes.default.string.isRequired,
  onShufflePlaylist: _propTypes.default.func.isRequired,
  onActivatePlaylist: _propTypes.default.func.isRequired,
  onRenamePlaylist: _propTypes.default.func.isRequired,
  onDeletePlaylist: _propTypes.default.func.isRequired,
  onNotDeletable: _propTypes.default.func.isRequired,
  onFilter: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PlaylistMeta); //# sourceMappingURL=Meta.js.map


exports.default = _default;
//# sourceMappingURL=Meta.js.map
