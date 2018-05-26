import _jsx from "@babel/runtime/helpers/builtin/jsx";
import assign from 'object-assign';
import React from 'react';
import PropTypes from 'prop-types';
import ListIcon from "@material-ui/icons/es/List";
import transformStyle from '../../utils/transformStyle';

var getItemStyles = function getItemStyles(offset) {
  return offset ? assign({
    display: 'inline-block'
  }, transformStyle("translate(" + offset.x + "px, " + offset.y + "px)")) : {
    display: 'none'
  };
};

var _ref2 =
/*#__PURE__*/
_jsx(ListIcon, {
  className: "MediaDragPreview-icon"
});

var MediaDragPreview = function MediaDragPreview(_ref) {
  var items = _ref.items,
      currentOffset = _ref.currentOffset;

  if (!items || !items.media) {
    return null;
  }

  return _jsx("div", {
    className: "MediaDragPreview",
    style: getItemStyles(currentOffset)
  }, void 0, _ref2, items.media.length);
};

MediaDragPreview.propTypes = process.env.NODE_ENV !== "production" ? {
  items: PropTypes.object,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
} : {};
export default MediaDragPreview;
//# sourceMappingURL=MediaDragPreview.js.map
