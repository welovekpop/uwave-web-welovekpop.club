import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Checkbox from "material-ui/es/Checkbox";
import ActiveIcon from '@material-ui/icons/CheckBox';
import ActivateIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RenamePlaylistButton from './RenamePlaylistButton';
import DeletePlaylistButton from './DeletePlaylistButton';
import ShufflePlaylistButton from './ShufflePlaylistButton';
import PlaylistFilter from './PlaylistFilter';
var enhance = translate();
var ID = 'playlist-meta-active';

var _ref2 =
/*#__PURE__*/
_jsx(ActivateIcon, {});

var _ref3 =
/*#__PURE__*/
_jsx(ActiveIcon, {
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
  return _jsx("div", {
    className: cx('PlaylistMeta', className, active && 'PlaylistMeta--active')
  }, void 0, _jsx("div", {
    className: "PlaylistMeta-name"
  }, void 0, name), _jsx("label", {
    htmlFor: ID,
    className: cx('PlaylistMeta-active', active && 'is-active')
  }, void 0, _jsx(Checkbox, {
    id: ID,
    checked: active,
    disabled: active,
    onChange: active ? null : onActivatePlaylist,
    icon: _ref2,
    checkedIcon: _ref3
  }), _jsx("span", {}, void 0, active ? t('playlists.active') : t('playlists.activate'))), _jsx(PlaylistFilter, {
    onFilter: onFilter
  }), _jsx(ShufflePlaylistButton, {
    onShuffle: onShufflePlaylist
  }), _jsx(RenamePlaylistButton, {
    initialName: name,
    onRename: onRenamePlaylist
  }), _jsx(DeletePlaylistButton, {
    active: active,
    onNotDeletable: onNotDeletable,
    onDelete: onDeletePlaylist
  }));
};

PlaylistMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onShufflePlaylist: PropTypes.func.isRequired,
  onActivatePlaylist: PropTypes.func.isRequired,
  onRenamePlaylist: PropTypes.func.isRequired,
  onDeletePlaylist: PropTypes.func.isRequired,
  onNotDeletable: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired
} : {};
export default enhance(PlaylistMeta);
//# sourceMappingURL=Meta.js.map
