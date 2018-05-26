import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import Drawer from "@material-ui/core/es/Drawer";
import MenuList from "@material-ui/core/es/MenuList";
import MenuItem from "@material-ui/core/es/MenuItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText";
import ListSubheader from "@material-ui/core/es/ListSubheader";
import Divider from "@material-ui/core/es/Divider";
import Typography from "@material-ui/core/es/Typography";
import ActiveIcon from "@material-ui/icons/es/Check";
import UserCard from '../../../components/UserCard/UserCard';
var enhance = compose(translate(), withHandlers({
  // Prevent defaults for react-tap-event-plugin:
  // https://github.com/zilverline/react-tap-event-plugin/issues/77
  onShowAbout: function onShowAbout(props) {
    return function (event) {
      event.preventDefault();
      props.onShowAbout();
      props.onDrawerClose();
    };
  },
  onShowServerList: function onShowServerList(props) {
    return function (event) {
      event.preventDefault();
      props.onShowServerList();
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
}));
var classes = {
  paper: 'DrawerMenu'
};

var _ref2 =
/*#__PURE__*/
_jsx(Divider, {});

var _ref3 =
/*#__PURE__*/
_jsx(ListItemIcon, {}, void 0, _jsx(ActiveIcon, {}));

var DrawerMenu = function DrawerMenu(_ref) {
  var t = _ref.t,
      user = _ref.user,
      playlists = _ref.playlists,
      open = _ref.open,
      hasAboutPage = _ref.hasAboutPage,
      onShowAbout = _ref.onShowAbout,
      onShowServerList = _ref.onShowServerList,
      onShowSettings = _ref.onShowSettings,
      onShowPlaylist = _ref.onShowPlaylist,
      onDrawerClose = _ref.onDrawerClose;
  return _jsx(Drawer, {
    open: open,
    onClose: onDrawerClose,
    classes: classes
  }, void 0, user && _jsx(UserCard, {
    user: user
  }), _jsx(MenuList, {}, void 0, hasAboutPage && _jsx(MenuItem, {
    onClick: onShowAbout
  }, void 0, t('about.about')), _jsx(MenuItem, {
    onClick: onShowServerList
  }, void 0, t('about.servers')), _jsx(MenuItem, {
    onClick: onShowSettings
  }, void 0, t('settings.title'))), _ref2, _jsx(MenuList, {
    subheader: _jsx(ListSubheader, {}, void 0, t('playlists.title'))
  }, void 0, playlists.map(function (playlist) {
    return _jsx(MenuItem, {
      onClick: function onClick(event) {
        event.preventDefault();
        onShowPlaylist(playlist._id);
        onDrawerClose();
      }
    }, playlist._id, playlist.active && _ref3, _jsx(ListItemText, {
      disableTypography: true
    }, void 0, _jsx(Typography, {
      noWrap: true,
      variant: "subheading"
    }, void 0, playlist.name)));
  })));
};

DrawerMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  user: PropTypes.object,
  playlists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  open: PropTypes.bool.isRequired,
  hasAboutPage: PropTypes.bool.isRequired,
  onShowAbout: PropTypes.func.isRequired,
  onShowServerList: PropTypes.func.isRequired,
  onShowSettings: PropTypes.func.isRequired,
  onShowPlaylist: PropTypes.func.isRequired,
  onDrawerClose: PropTypes.func.isRequired
} : {};
export default enhance(DrawerMenu);
//# sourceMappingURL=index.js.map
