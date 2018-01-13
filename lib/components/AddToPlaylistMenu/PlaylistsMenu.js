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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _RenderToLayer = require('material-ui/internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENU_HEIGHT = 320;
// 😱

var MENU_WIDTH = 280;

var RANDOM_MUI_PADDING = 8;
var SCROLLBAR_WIDTH = 7;

var NEW_PLAYLIST = {};

var positionInsideWindow = function positionInsideWindow(position, expectedHeight) {
  var constrained = { x: position.x, y: position.y };
  var h = Math.min(expectedHeight, MENU_HEIGHT);
  var w = MENU_WIDTH;
  if (position.y + h >= window.innerHeight) {
    // position at the bottom of the screen
    constrained.y = window.innerHeight - h;
  }
  if (position.x + w >= window.innerWidth) {
    // position to the left-hand side of the anchor, instead of the right-hand side
    constrained.x -= w;
  }
  return constrained;
};

var menuStyle = {
  textAlign: 'left',
  zIndex: 30
};
var menuItemStyle = {
  WebkitAppearance: 'initial'
};

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_add2.default, {
  color: '#fff'
});

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
      if (playlistID === NEW_PLAYLIST) {
        _this.props.onCreatePlaylist();
        return;
      }
      _this.props.onClose();
      _this.props.onSelect((0, _arrayFind2.default)(_this.props.playlists, function (pl) {
        return pl._id === playlistID;
      }));
    }, _this.renderLayer = function () {
      var _this$props = _this.props,
          playlists = _this$props.playlists,
          position = _this$props.position,
          t = _this$props.t;

      var fixedPosition = positionInsideWindow(position, (playlists.length + 1) * 48);
      return (0, _jsx3.default)('div', {
        style: {
          position: 'absolute',
          left: fixedPosition.x,
          top: fixedPosition.y,
          width: MENU_WIDTH + RANDOM_MUI_PADDING + SCROLLBAR_WIDTH
        }
      }, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, (0, _jsx3.default)(_Menu2.default, {
        style: menuStyle,
        maxHeight: MENU_HEIGHT,
        width: MENU_WIDTH,
        autoWidth: false,
        onItemClick: _this.handleSelect
      }, void 0, (0, _jsx3.default)(_MenuItem2.default, {
        style: menuItemStyle,
        value: NEW_PLAYLIST,
        leftIcon: _ref,
        primaryText: t('playlists.new')
      }), playlists.map(function (playlist) {
        return (0, _jsx3.default)(_MenuItem2.default, {
          style: menuItemStyle,
          value: playlist._id,
          primaryText: playlist.name,
          secondaryText: '' + (playlist.size || 0),
          checked: !!playlist.active
        }, playlist._id);
      }))));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PlaylistsMenu.prototype.render = function render() {
    var onClose = this.props.onClose;

    return (0, _jsx3.default)(_RenderToLayer2.default, {
      open: true,
      componentClickAway: onClose,
      render: this.renderLayer
    });
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
