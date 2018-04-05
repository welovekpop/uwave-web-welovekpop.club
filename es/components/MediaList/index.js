import withProps from 'recompose/withProps';
import Base from './BaseMediaList';
import Row from './Row';

var MediaList = withProps({
  listComponent: 'div',
  rowComponent: Row
})(Base);

export default MediaList;
//# sourceMappingURL=index.js.map
