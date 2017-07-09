import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import MediaList from '../MediaList';
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

var HistoryList = function HistoryList(_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      props = _objectWithoutProperties(_ref, ['onOpenAddMediaMenu']);

  return React.createElement(MediaList, _extends({}, props, {
    className: 'RoomHistory-list',
    rowComponent: HistoryRow,
    makeActions: onOpenAddMediaMenu ? addMediaActions(onOpenAddMediaMenu) : noActions
  }));
};

HistoryList.propTypes = process.env.NODE_ENV !== "production" ? {
  onOpenAddMediaMenu: PropTypes.func.isRequired
} : {};

export default HistoryList;
//# sourceMappingURL=HistoryList.js.map
