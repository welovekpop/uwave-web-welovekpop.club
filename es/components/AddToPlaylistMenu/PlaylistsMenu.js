import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import find from 'array-find';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CreatePlaylistIcon from 'material-ui/svg-icons/content/add';
// 😱
import RenderToLayer from 'material-ui/internal/RenderToLayer';

var MENU_HEIGHT = 320;
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

var enhance = translate();

var _ref = _jsx(CreatePlaylistIcon, {
  color: '#fff'
});

var PlaylistsMenu = function (_React$Component) {
  _inherits(PlaylistsMenu, _React$Component);

  function PlaylistsMenu() {
    var _temp, _this, _ret;

    _classCallCheck(this, PlaylistsMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleSelect = function (e, item) {
      var playlistID = item.props.value;
      if (playlistID === NEW_PLAYLIST) {
        _this.props.onCreatePlaylist();
        return;
      }
      _this.props.onClose();
      _this.props.onSelect(find(_this.props.playlists, function (pl) {
        return pl._id === playlistID;
      }));
    }, _this.renderLayer = function () {
      var _this$props = _this.props,
          playlists = _this$props.playlists,
          position = _this$props.position,
          t = _this$props.t;

      var fixedPosition = positionInsideWindow(position, (playlists.length + 1) * 48);
      return _jsx('div', {
        style: {
          position: 'absolute',
          left: fixedPosition.x,
          top: fixedPosition.y,
          width: MENU_WIDTH + RANDOM_MUI_PADDING + SCROLLBAR_WIDTH
        }
      }, void 0, _jsx(Paper, {}, void 0, _jsx(Menu, {
        style: menuStyle,
        maxHeight: MENU_HEIGHT,
        width: MENU_WIDTH,
        autoWidth: false,
        onItemClick: _this.handleSelect
      }, void 0, _jsx(MenuItem, {
        style: menuItemStyle,
        value: NEW_PLAYLIST,
        leftIcon: _ref,
        primaryText: t('playlists.new')
      }), playlists.map(function (playlist) {
        return _jsx(MenuItem, {
          style: menuItemStyle,
          value: playlist._id,
          primaryText: playlist.name,
          secondaryText: '' + (playlist.size || 0),
          checked: !!playlist.active
        }, playlist._id);
      }))));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PlaylistsMenu.prototype.render = function render() {
    var onClose = this.props.onClose;

    return _jsx(RenderToLayer, {
      open: true,
      componentClickAway: onClose,
      render: this.renderLayer
    });
  };

  return PlaylistsMenu;
}(React.Component);

PlaylistsMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCreatePlaylist: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.object),
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
} : {};


export default enhance(PlaylistsMenu);
//# sourceMappingURL=PlaylistsMenu.js.map
