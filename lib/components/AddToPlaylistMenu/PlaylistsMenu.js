'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = require('material-ui/Menu');

var _List = require('material-ui/List');

var _Add = require('material-ui-icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Check = require('material-ui-icons/Check');

var _Check2 = _interopRequireDefault(_Check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_List.ListItemIcon, {}, void 0, (0, _jsx3.default)(_Add2.default, {}));

var _ref2 = (0, _jsx3.default)(_List.ListItemIcon, {}, void 0, (0, _jsx3.default)(_Check2.default, {}));

var PlaylistsMenu = function (_React$Component) {
  (0, _inherits3.default)(PlaylistsMenu, _React$Component);

  function PlaylistsMenu() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PlaylistsMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleSelect = function (e, item) {
      var playlistID = item.props.value;
      _this.props.onClose();
      _this.props.onSelect((0, _arrayFind2.default)(_this.props.playlists, function (pl) {
        return pl._id === playlistID;
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PlaylistsMenu.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        t = _props.t,
        playlists = _props.playlists,
        position = _props.position,
        onClose = _props.onClose,
        onCreatePlaylist = _props.onCreatePlaylist;

    return (0, _jsx3.default)(_Popover2.default, {
      open: true,
      anchorPosition: { left: position.x, top: position.y },
      anchorReference: 'anchorPosition',
      onClose: onClose
    }, void 0, (0, _jsx3.default)(_Menu.MenuList, {}, void 0, (0, _jsx3.default)(_Menu.MenuItem, {
      onClick: onCreatePlaylist
    }, void 0, (0, _jsx3.default)(_List.ListItemText, {
      primary: t('playlists.new')
    }), _ref), playlists.map(function (playlist) {
      return (0, _jsx3.default)(_Menu.MenuItem, {
        className: 'AddToPlaylistMenu-playlist',
        onClick: _this2.handleSelect
      }, playlist._id, !!playlist.active && _ref2, (0, _jsx3.default)(_List.ListItemText, {
        primary: playlist.name
      }), (0, _jsx3.default)(_List.ListItemText, {
        className: 'AddToPlaylistMenu-smallIcon',
        primary: String(playlist.size || 0)
      }));
    })));
  };

  return PlaylistsMenu;
}(_react2.default.Component);

PlaylistsMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onSelect: _propTypes2.default.func.isRequired,
  onCreatePlaylist: _propTypes2.default.func.isRequired,
  playlists: _propTypes2.default.arrayOf(_propTypes2.default.object),
  position: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  })
} : {};

exports.default = enhance(PlaylistsMenu);
//# sourceMappingURL=PlaylistsMenu.js.map
//# sourceMappingURL=PlaylistsMenu.js.map
