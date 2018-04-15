import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import { MEDIA, WAITLIST_USER } from '../constants/DDItemTypes';
import MediaDragPreview from '../components/MediaList/MediaDragPreview';
var enhance = DragLayer(function (monitor) {
  return {
    items: monitor.getItem(),
    type: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  };
});

var DragLayerContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DragLayerContainer, _React$Component);

  function DragLayerContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DragLayerContainer.prototype;

  _proto.renderPreview = function renderPreview() {
    switch (this.props.type) {
      case MEDIA:
        return React.createElement(MediaDragPreview, this.props);

      default:
        return null;
    }
  };

  _proto.render = function render() {
    var _props = this.props,
        isDragging = _props.isDragging,
        items = _props.items;

    if (!isDragging || !items) {
      return null;
    }

    return _jsx("div", {
      className: "DragLayerContainer"
    }, void 0, this.renderPreview());
  };

  return DragLayerContainer;
}(React.Component);

DragLayerContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.oneOf([MEDIA, WAITLIST_USER]),
  items: PropTypes.object,
  isDragging: PropTypes.bool.isRequired
} : {};
export default enhance(DragLayerContainer);
//# sourceMappingURL=DragLayer.js.map
