import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import ReactDOM from 'react-dom';
import withProps from 'recompose/withProps';
import List from 'material-ui/es/List';
import Base from '../../../components/MediaList/BaseMediaList';
import MediaRow from './Row';

var MediaList = withProps({
  listComponent: React.forwardRef(function (props, _ref) {
    return React.createElement(List, _extends({}, props, {
      ref: function ref(list) {
        return _ref(list && ReactDOM.findDOMNode(list));
      } // eslint-disable-line react/no-find-dom-node

    }));
  }),
  rowComponent: MediaRow
})(Base);

export default MediaList;
//# sourceMappingURL=index.js.map
