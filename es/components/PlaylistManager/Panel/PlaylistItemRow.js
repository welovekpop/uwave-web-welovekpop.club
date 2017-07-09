import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { MEDIA } from '../../../constants/DDItemTypes';
import isDraggingNearTopOfRow from '../../../utils/isDraggingNearTopOfRow';
import MediaRow from '../../MediaList/Row';

var mediaTarget = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    if (item.media) {
      var media = item.media;
      var thisID = props.media._id;
      // Do not attempt to move when the selection is dropped on top of an item
      // that is in the selection.
      if (media.some(function (playlistItem) {
        return playlistItem._id === thisID;
      })) {
        return;
      }
      var insertBefore = isDraggingNearTopOfRow(monitor, component);
      props.onMoveMedia(media, insertBefore ? { before: thisID } : { after: thisID });
    }
  },
  hover: function hover(props, monitor, component) {
    component.setState({
      insertingAbove: isDraggingNearTopOfRow(monitor, component)
    });
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var _ref = _jsx('div', {
  className: 'PlaylistItemRow-drop-indicator'
});

var PlaylistItemRow = function (_React$Component) {
  _inherits(PlaylistItemRow, _React$Component);

  function PlaylistItemRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, PlaylistItemRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      insertingAbove: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PlaylistItemRow.prototype.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = _objectWithoutProperties(_props, ['connectDropTarget', 'isOver']);

    var insertingAbove = this.state.insertingAbove;


    var dropIndicator = _ref;

    return connectDropTarget(_jsx('div', {
      className: 'PlaylistItemRow'
    }, void 0, isOver && insertingAbove && dropIndicator, React.createElement(MediaRow, props), isOver && !insertingAbove && dropIndicator));
  };

  return PlaylistItemRow;
}(React.Component);

PlaylistItemRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: PropTypes.func.isRequired,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onMoveMedia: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
} : {};


export default DropTarget(MEDIA, mediaTarget, collect)(PlaylistItemRow);
//# sourceMappingURL=PlaylistItemRow.js.map
