import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { CircularProgress } from 'material-ui/es/Progress';
import ActiveIcon from 'material-ui-icons/Check';
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

var _ref2 = _jsx('div', {
  className: 'PlaylistMenuRow-loading'
}, void 0, _jsx(CircularProgress, {
  size: '100%'
}));

var _ref3 = _jsx('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, _jsx(ActiveIcon, {}));

var PlaylistRow = function (_React$Component) {
  _inherits(PlaylistRow, _React$Component);

  function PlaylistRow() {
    _classCallCheck(this, PlaylistRow);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PlaylistRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        playlist = _props.playlist,
        selected = _props.selected,
        onClick = _props.onClick,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver;

    var activeClass = playlist.active && 'is-active';
    var selectedClass = selected && 'is-selected';
    var droppableClass = isOver && 'is-droppable';

    var icon = void 0;
    if (playlist.creating) {
      icon = _ref2;
    } else if (playlist.active) {
      icon = _ref3;
    }

    return connectDropTarget(_jsx('button', {
      role: 'menuitem',
      className: cx('PlaylistMenuRow', activeClass, selectedClass, droppableClass, className),
      onClick: onClick
    }, void 0, _jsx('div', {
      className: 'PlaylistMenuRow-content'
    }, void 0, _jsx('div', {
      className: 'PlaylistMenuRow-title'
    }, void 0, icon, playlist.name), _jsx('div', {
      className: 'PlaylistMenuRow-count'
    }, void 0, playlist.size))));
  };

  return PlaylistRow;
}(React.Component);

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
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
