'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckBox = require('material-ui-icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxOutlineBlank = require('material-ui-icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _RenamePlaylistButton = require('./RenamePlaylistButton');

var _RenamePlaylistButton2 = _interopRequireDefault(_RenamePlaylistButton);

var _DeletePlaylistButton = require('./DeletePlaylistButton');

var _DeletePlaylistButton2 = _interopRequireDefault(_DeletePlaylistButton);

var _ShufflePlaylistButton = require('./ShufflePlaylistButton');

var _ShufflePlaylistButton2 = _interopRequireDefault(_ShufflePlaylistButton);

var _PlaylistFilter = require('./PlaylistFilter');

var _PlaylistFilter2 = _interopRequireDefault(_PlaylistFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 = (0, _jsx3.default)(_CheckBoxOutlineBlank2.default, {});

var _ref3 = (0, _jsx3.default)(_CheckBox2.default, {
  nativeColor: '#fff'
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
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('PlaylistMeta', className, active ? 'PlaylistMeta--active' : '')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMeta-name'
  }, void 0, name), (0, _jsx3.default)('div', {
    className: 'PlaylistMeta-active'
  }, void 0, (0, _jsx3.default)(_Checkbox2.default, {
    checked: active,
    onChange: active ? null : onActivatePlaylist,
    icon: _ref2,
    checkedIcon: _ref3
  }), (0, _jsx3.default)('span', {}, void 0, active ? t('playlists.active') : t('playlists.activate'))), (0, _jsx3.default)(_PlaylistFilter2.default, {
    onFilter: onFilter
  }), (0, _jsx3.default)(_ShufflePlaylistButton2.default, {
    onShuffle: onShufflePlaylist
  }), (0, _jsx3.default)(_RenamePlaylistButton2.default, {
    initialName: name,
    onRename: onRenamePlaylist
  }), (0, _jsx3.default)(_DeletePlaylistButton2.default, {
    active: active,
    onNotDeletable: onNotDeletable,
    onDelete: onDeletePlaylist
  }));
};

PlaylistMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool.isRequired,
  name: _propTypes2.default.string.isRequired,
  onShufflePlaylist: _propTypes2.default.func.isRequired,
  onActivatePlaylist: _propTypes2.default.func.isRequired,
  onRenamePlaylist: _propTypes2.default.func.isRequired,
  onDeletePlaylist: _propTypes2.default.func.isRequired,
  onNotDeletable: _propTypes2.default.func.isRequired,
  onFilter: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(PlaylistMeta);
//# sourceMappingURL=Meta.js.map
//# sourceMappingURL=Meta.js.map
