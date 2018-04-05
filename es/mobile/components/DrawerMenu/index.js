import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import Drawer from 'material-ui/es/Drawer';
import { MenuList, MenuItem } from 'material-ui/es/Menu';
import { ListItemIcon, ListSubheader, ListItemText } from 'material-ui/es/List';
import Divider from 'material-ui/es/Divider';
import ActiveIcon from 'material-ui-icons/Check';
import UserCard from '../../../components/UserCard/UserCard';

var enhance = withHandlers({
  // Prevent defaults for react-tap-event-plugin:
  // https://github.com/zilverline/react-tap-event-plugin/issues/77
  onShowAbout: function onShowAbout(props) {
    return function (event) {
      event.preventDefault();
      props.onShowAbout();
      props.onDrawerClose();
    };
  },
  onShowSettings: function onShowSettings(props) {
    return function (event) {
      event.preventDefault();
      props.onShowSettings();
      props.onDrawerClose();
    };
  }
});

var _ref2 = _jsx(Divider, {});

var _ref3 = _jsx(ListSubheader, {}, void 0, 'Playlists');

var _ref4 = _jsx(ListItemIcon, {}, void 0, _jsx(ActiveIcon, {}));

var DrawerMenu = function DrawerMenu(_ref) {
  var user = _ref.user,
      playlists = _ref.playlists,
      open = _ref.open,
      onShowAbout = _ref.onShowAbout,
      onShowSettings = _ref.onShowSettings,
      onShowPlaylist = _ref.onShowPlaylist,
      onDrawerClose = _ref.onDrawerClose;
  return _jsx(Drawer, {
    open: open,
    onClose: onDrawerClose
  }, void 0, user && _jsx(UserCard, {
    user: user
  }), _jsx(MenuList, {}, void 0, _jsx(MenuItem, {
    onClick: onShowAbout
  }, void 0, 'About'), _jsx(MenuItem, {
    onClick: onShowSettings
  }, void 0, 'Settings')), _ref2, _jsx(MenuList, {
    subheader: _ref3
  }, void 0, playlists.map(function (playlist) {
    return _jsx(MenuItem, {
      onClick: function onClick(event) {
        event.preventDefault();
        onShowPlaylist(playlist._id);
        onDrawerClose();
      }
    }, playlist._id, playlist.active && _ref4, _jsx(ListItemText, {
      primary: playlist.name
    }));
  })));
};

DrawerMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object,
  playlists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })),
  open: PropTypes.bool.isRequired,
  onShowAbout: PropTypes.func.isRequired,
  onShowSettings: PropTypes.func.isRequired,
  onShowPlaylist: PropTypes.func.isRequired,
  onDrawerClose: PropTypes.func.isRequired
} : {};

export default enhance(DrawerMenu);
//# sourceMappingURL=index.js.map
