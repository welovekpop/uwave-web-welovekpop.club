import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import Base from '../MediaList/BaseMediaList';
import AddToPlaylistAction from '../MediaList/Actions/AddToPlaylist';
import HistoryRow from './Row';

var addMediaActions = function addMediaActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return [_jsx(AddToPlaylistAction, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, 'add')];
  };
};

var noActions = function noActions() {
  return [];
};

var HistoryList = withProps(function (props) {
  return {
    className: 'RoomHistory-list',
    listComponent: 'div',
    rowComponent: HistoryRow,
    makeActions: props.onOpenAddMediaMenu ? addMediaActions(props.onOpenAddMediaMenu) : noActions
  };
})(Base);

HistoryList.propTypes = {
  onOpenAddMediaMenu: PropTypes.func.isRequired
};

export default HistoryList;
//# sourceMappingURL=HistoryList.js.map
