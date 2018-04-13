import { findDOMNode } from 'react-dom';
export default function isDraggingNearTopOfRow(monitor, component) {
  // FIXME do this without findDOMNode, perhaps by using refs in the calling
  // components.
  // eslint-disable-next-line react/no-find-dom-node
  var componentRect = findDOMNode(component).getBoundingClientRect();
  var clientOffset = monitor.getClientOffset();
  var middle = Math.ceil(componentRect.height / 2);
  var topOffset = clientOffset.y - componentRect.top;
  return topOffset < middle;
}
//# sourceMappingURL=isDraggingNearTopOfRow.js.map
