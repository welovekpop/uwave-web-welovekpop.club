import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';

var disableCursor = { cursor: 'none' };
var enableCursor = {};

var MouseMoveCapture = function MouseMoveCapture(_ref) {
  var active = _ref.active,
      onMouseMove = _ref.onMouseMove;
  return _jsx('div', {
    className: 'Video-overlay Video-capture',
    style: active ? enableCursor : disableCursor,
    onMouseMove: onMouseMove
  });
};

MouseMoveCapture.propTypes = process.env.NODE_ENV !== "production" ? {
  onMouseMove: PropTypes.func.isRequired,
  active: PropTypes.bool
} : {};

export default MouseMoveCapture;
//# sourceMappingURL=VideoMouseMoveCapture.js.map
