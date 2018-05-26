import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import CircularProgress from "@material-ui/core/es/CircularProgress";
import MenuItem from "@material-ui/core/es/MenuItem";
import ActiveIcon from "@material-ui/icons/es/Check";
import { MEDIA } from '../../../constants/DDItemTypes';
var playlistTarget = {
  drop: function drop(_ref, monitor) {
    var playlist = _ref.playlist,
        onAddToPlaylist = _ref.onAddToPlaylist;

    var _monitor$getItem = monitor.getItem(),
        media = _monitor$getItem.media;

    onAddToPlaylist(playlist, media);
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var enhance = DropTarget(MEDIA, playlistTarget, collect);
var itemClasses = {
  root: 'PlaylistMenuRow',
  selected: 'is-selected'
};

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var _ref3 =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, _jsx(ActiveIcon, {}));

var PlaylistRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PlaylistRow, _React$Component);

  function PlaylistRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PlaylistRow.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        playlist = _this$props.playlist,
        selected = _this$props.selected,
        onClick = _this$props.onClick,
        connectDropTarget = _this$props.connectDropTarget,
        isOver = _this$props.isOver;
    var activeClass = playlist.active && 'is-active';
    var droppableClass = isOver && 'is-droppable';
    var icon;

    if (playlist.creating) {
      icon = _ref2;
    } else if (playlist.active) {
      icon = _ref3;
    }

    return connectDropTarget(_jsx("div", {}, void 0, _jsx(MenuItem, {
      selected: selected,
      className: cx(activeClass, droppableClass),
      classes: itemClasses,
      onClick: onClick
    }, void 0, _jsx("div", {
      className: "PlaylistMenuRow-title"
    }, void 0, icon, playlist.name), _jsx("div", {
      className: "PlaylistMenuRow-count"
    }, void 0, playlist.size))));
  };

  return PlaylistRow;
}(React.Component);

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  playlist: PropTypes.object,
  selected: PropTypes.bool,
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onAddToPlaylist: PropTypes.func
} : {};
export default enhance(PlaylistRow);
//# sourceMappingURL=Row.js.map
