"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _arrayFind = _interopRequireDefault(require("array-find"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_ListItemIcon.default, {}, void 0, (0, _jsx2.default)(_Add.default, {}));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ListItemIcon.default, {}, void 0, (0, _jsx2.default)(_Check.default, {}));

var PlaylistsMenu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PlaylistsMenu, _React$Component);

  function PlaylistsMenu() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleSelect = function (e, playlistID) {
      _this.props.onClose();

      _this.props.onSelect((0, _arrayFind.default)(_this.props.playlists, function (pl) {
        return pl._id === playlistID;
      }));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = PlaylistsMenu.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        t = _this$props.t,
        playlists = _this$props.playlists,
        position = _this$props.position,
        onClose = _this$props.onClose,
        onCreatePlaylist = _this$props.onCreatePlaylist;
    return (0, _jsx2.default)(_Popover.default, {
      open: true,
      anchorPosition: {
        left: position.x,
        top: position.y
      },
      anchorReference: "anchorPosition",
      onClose: onClose
    }, void 0, (0, _jsx2.default)(_MenuList.default, {}, void 0, (0, _jsx2.default)(_MenuItem.default, {
      onClick: onCreatePlaylist
    }, void 0, (0, _jsx2.default)(_ListItemText.default, {
      primary: t('playlists.new')
    }), _ref), playlists.map(function (playlist) {
      return (0, _jsx2.default)(_MenuItem.default, {
        className: "AddToPlaylistMenu-playlist",
        onClick: function onClick(event) {
          return _this2.handleSelect(event, playlist._id);
        }
      }, playlist._id, !!playlist.active && _ref2, (0, _jsx2.default)(_ListItemText.default, {
        disableTypography: true,
        className: "AddToPlaylistMenu-playlistName"
      }, void 0, (0, _jsx2.default)(_Typography.default, {
        noWrap: true,
        variant: "subheading"
      }, void 0, playlist.name)), (0, _jsx2.default)(_ListItemText.default, {
        className: "AddToPlaylistMenu-smallIcon",
        primary: String(playlist.size || 0)
      }));
    })));
  };

  return PlaylistsMenu;
}(_react.default.Component);

PlaylistsMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  onCreatePlaylist: _propTypes.default.func.isRequired,
  playlists: _propTypes.default.arrayOf(_propTypes.default.object),
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })
} : {};

var _default = enhance(PlaylistsMenu);

exports.default = _default;
//# sourceMappingURL=PlaylistsMenu.js.map
