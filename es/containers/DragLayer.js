import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import { MEDIA, WAITLIST_USER } from '../constants/DDItemTypes';
import MediaDragPreview from '../components/MediaList/MediaDragPreview';

var DragLayerContainer = (_dec = DragLayer(function (monitor) {
  return {
    items: monitor.getItem(),
    type: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  };
}), _dec(_class = function (_React$Component) {
  _inherits(DragLayerContainer, _React$Component);

  function DragLayerContainer() {
    _classCallCheck(this, DragLayerContainer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DragLayerContainer.prototype.renderPreview = function renderPreview() {
    switch (this.props.type) {
      case MEDIA:
        return React.createElement(MediaDragPreview, this.props);
      default:
        return null;
    }
  };

  DragLayerContainer.prototype.render = function render() {
    var _props = this.props,
        isDragging = _props.isDragging,
        items = _props.items;

    if (!isDragging || !items) {
      return null;
    }

    return _jsx('div', {
      className: 'DragLayerContainer'
    }, void 0, this.renderPreview());
  };

  return DragLayerContainer;
}(React.Component)) || _class);
export { DragLayerContainer as default };
DragLayerContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  type: React.PropTypes.oneOf([MEDIA, WAITLIST_USER]),
  items: React.PropTypes.object,
  isDragging: React.PropTypes.bool.isRequired
} : {};
//# sourceMappingURL=DragLayer.js.map
