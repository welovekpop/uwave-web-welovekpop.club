import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ActiveIcon from 'material-ui/svg-icons/navigation/check';
import { MEDIA } from '../../../constants/DDItemTypes';
import Loader from '../../Loader';

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

var _ref2 = _jsx('div', {
  className: 'PlaylistMenuRow-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var _ref3 = _jsx('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, _jsx(ActiveIcon, {
  color: '#fff'
}));

var PlaylistRow = (_dec = DropTarget(MEDIA, playlistTarget, collect), _dec(_class = function (_React$Component) {
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
}(React.Component)) || _class);
export { PlaylistRow as default };
PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: React.PropTypes.string,
  playlist: React.PropTypes.object,
  selected: React.PropTypes.bool,
  isOver: React.PropTypes.bool.isRequired,

  connectDropTarget: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onAddToPlaylist: React.PropTypes.func
} : {};
//# sourceMappingURL=Row.js.map