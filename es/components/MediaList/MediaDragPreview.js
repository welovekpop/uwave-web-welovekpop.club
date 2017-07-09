import _jsx from 'babel-runtime/helpers/jsx';
import assign from 'object-assign';
import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ListIcon from 'material-ui/svg-icons/action/list';

import transformStyle from '../../utils/transformStyle';

var getItemStyles = function getItemStyles(offset) {
  return offset ? assign({ display: 'inline-block' }, transformStyle('translate(' + offset.x + 'px, ' + offset.y + 'px)')) : { display: 'none' };
};

var dragIconStyle = {
  verticalAlign: 'bottom',
  marginRight: 3
};

var MediaDragPreview = function MediaDragPreview(_ref) {
  var muiTheme = _ref.muiTheme,
      items = _ref.items,
      currentOffset = _ref.currentOffset;

  if (!items || !items.media) {
    return null;
  }
  return _jsx('div', {
    className: 'MediaDragPreview',
    style: getItemStyles(currentOffset)
  }, void 0, _jsx(ListIcon, {
    color: muiTheme.palette.textColor,
    style: dragIconStyle
  }), items.media.length);
};

MediaDragPreview.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  items: PropTypes.object,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
} : {};

export default muiThemeable()(MediaDragPreview);
//# sourceMappingURL=MediaDragPreview.js.map
