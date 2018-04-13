import Responsive from 'react-responsive';
import withProps from 'recompose/withProps';
export var Mobile = withProps({
  maxWidth: 767
})(Responsive);
export var Desktop = withProps({
  minWidth: 768
})(Responsive);
//# sourceMappingURL=index.js.map
