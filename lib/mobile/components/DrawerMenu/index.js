"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _Drawer = _interopRequireDefault(require("material-ui/Drawer"));

var _Menu = require("material-ui/Menu");

var _List = require("material-ui/List");

var _Divider = _interopRequireDefault(require("material-ui/Divider"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _UserCard = _interopRequireDefault(require("../../../components/UserCard/UserCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _withHandlers.default)({
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

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Divider.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_List.ListItemIcon, {}, void 0, (0, _jsx2.default)(_Check.default, {}));

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
  return (0, _jsx2.default)(_Drawer.default, {
    open: open,
    onClose: onDrawerClose
  }, void 0, user && (0, _jsx2.default)(_UserCard.default, {
    user: user
  }), (0, _jsx2.default)(_Menu.MenuList, {}, void 0, hasAboutPage && (0, _jsx2.default)(_Menu.MenuItem, {
    onClick: onShowAbout
  }, void 0, t('about.about')), (0, _jsx2.default)(_Menu.MenuItem, {
    onClick: onShowServerList
  }, void 0, t('about.servers')), (0, _jsx2.default)(_Menu.MenuItem, {
    onClick: onShowSettings
  }, void 0, t('settings.title'))), _ref2, (0, _jsx2.default)(_Menu.MenuList, {
    subheader: (0, _jsx2.default)(_List.ListSubheader, {}, void 0, t('playlists.title'))
  }, void 0, playlists.map(function (playlist) {
    return (0, _jsx2.default)(_Menu.MenuItem, {
      onClick: function onClick(event) {
        event.preventDefault();
        onShowPlaylist(playlist._id);
        onDrawerClose();
      }
    }, playlist._id, playlist.active && _ref3, (0, _jsx2.default)(_List.ListItemText, {
      primary: playlist.name
    }));
  })));
};

DrawerMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  user: _propTypes.default.object,
  playlists: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired
  })),
  open: _propTypes.default.bool.isRequired,
  hasAboutPage: _propTypes.default.bool.isRequired,
  onShowAbout: _propTypes.default.func.isRequired,
  onShowServerList: _propTypes.default.func.isRequired,
  onShowSettings: _propTypes.default.func.isRequired,
  onShowPlaylist: _propTypes.default.func.isRequired,
  onDrawerClose: _propTypes.default.func.isRequired
} : {};

var _default = enhance(DrawerMenu); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
