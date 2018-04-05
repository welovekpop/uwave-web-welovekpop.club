import defaultProps from 'recompose/defaultProps';
import Base from './BaseMediaList';
import Row from './Row';

var MediaList = defaultProps({
  listComponent: 'div',
  rowComponent: Row
})(Base);

export default MediaList;
//# sourceMappingURL=index.js.map
