"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDraggingNearTopOfRow;

var _reactDom = require("react-dom");

function isDraggingNearTopOfRow(monitor, component) {
  // FIXME do this without findDOMNode, perhaps by using refs in the calling
  // components.
  // eslint-disable-next-line react/no-find-dom-node
  var componentRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
  var clientOffset = monitor.getClientOffset();
  var middle = Math.ceil(componentRect.height / 2);
  var topOffset = clientOffset.y - componentRect.top;
  return topOffset < middle;
} //# sourceMappingURL=isDraggingNearTopOfRow.js.map
//# sourceMappingURL=isDraggingNearTopOfRow.js.map
