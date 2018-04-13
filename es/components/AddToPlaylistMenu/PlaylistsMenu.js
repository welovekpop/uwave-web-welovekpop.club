import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import find from 'array-find';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Popover from "material-ui/es/Popover";
import { MenuList, MenuItem } from "material-ui/es/Menu";
import { ListItemIcon, ListItemText } from "material-ui/es/List";
import CreatePlaylistIcon from '@material-ui/icons/Add';
import ActiveIcon from '@material-ui/icons/Check';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(ListItemIcon, {}, void 0, _jsx(CreatePlaylistIcon, {}));

var _ref2 =
/*#__PURE__*/
_jsx(ListItemIcon, {}, void 0, _jsx(ActiveIcon, {}));

var PlaylistsMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PlaylistsMenu, _React$Component);

  function PlaylistsMenu() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleSelect = function (e, playlistID) {
      _this.props.onClose();

      _this.props.onSelect(find(_this.props.playlists, function (pl) {
        return pl._id === playlistID;
      }));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PlaylistsMenu.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _props = this.props,
        t = _props.t,
        playlists = _props.playlists,
        position = _props.position,
        onClose = _props.onClose,
        onCreatePlaylist = _props.onCreatePlaylist;
    return _jsx(Popover, {
      open: true,
      anchorPosition: {
        left: position.x,
        top: position.y
      },
      anchorReference: "anchorPosition",
      onClose: onClose
    }, void 0, _jsx(MenuList, {}, void 0, _jsx(MenuItem, {
      onClick: onCreatePlaylist
    }, void 0, _jsx(ListItemText, {
      primary: t('playlists.new')
    }), _ref), playlists.map(function (playlist) {
      return _jsx(MenuItem, {
        className: "AddToPlaylistMenu-playlist",
        onClick: function onClick(event) {
          return _this2.handleSelect(event, playlist._id);
        }
      }, playlist._id, !!playlist.active && _ref2, _jsx(ListItemText, {
        primary: playlist.name
      }), _jsx(ListItemText, {
        className: "AddToPlaylistMenu-smallIcon",
        primary: String(playlist.size || 0)
      }));
    })));
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
