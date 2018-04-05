'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Menu = require('material-ui/Menu');

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Check = require('material-ui-icons/Check');

var _Check2 = _interopRequireDefault(_Check);

var _UserCard = require('../../../components/UserCard/UserCard');

var _UserCard2 = _interopRequireDefault(_UserCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _withHandlers2.default)({
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

var _ref2 = (0, _jsx3.default)(_Divider2.default, {});

var _ref3 = (0, _jsx3.default)(_List.ListSubheader, {}, void 0, 'Playlists');

var _ref4 = (0, _jsx3.default)(_List.ListItemIcon, {}, void 0, (0, _jsx3.default)(_Check2.default, {}));

var DrawerMenu = function DrawerMenu(_ref) {
  var user = _ref.user,
      playlists = _ref.playlists,
      open = _ref.open,
      onShowAbout = _ref.onShowAbout,
      onShowSettings = _ref.onShowSettings,
      onShowPlaylist = _ref.onShowPlaylist,
      onDrawerClose = _ref.onDrawerClose;
  return (0, _jsx3.default)(_Drawer2.default, {
    open: open,
    onClose: onDrawerClose
  }, void 0, user && (0, _jsx3.default)(_UserCard2.default, {
    user: user
  }), (0, _jsx3.default)(_Menu.MenuList, {}, void 0, (0, _jsx3.default)(_Menu.MenuItem, {
    onClick: onShowAbout
  }, void 0, 'About'), (0, _jsx3.default)(_Menu.MenuItem, {
    onClick: onShowSettings
  }, void 0, 'Settings')), _ref2, (0, _jsx3.default)(_Menu.MenuList, {
    subheader: _ref3
  }, void 0, playlists.map(function (playlist) {
    return (0, _jsx3.default)(_Menu.MenuItem, {
      onClick: function onClick(event) {
        event.preventDefault();
        onShowPlaylist(playlist._id);
        onDrawerClose();
      }
    }, playlist._id, playlist.active && _ref4, (0, _jsx3.default)(_List.ListItemText, {
      primary: playlist.name
    }));
  })));
};

DrawerMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object,
  playlists: _propTypes2.default.arrayOf(_propTypes2.default.shape({ name: _propTypes2.default.string.isRequired })),
  open: _propTypes2.default.bool.isRequired,
  onShowAbout: _propTypes2.default.func.isRequired,
  onShowSettings: _propTypes2.default.func.isRequired,
  onShowPlaylist: _propTypes2.default.func.isRequired,
  onDrawerClose: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(DrawerMenu);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
