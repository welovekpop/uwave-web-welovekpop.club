'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _BaseMediaList = require('../MediaList/BaseMediaList');

var _BaseMediaList2 = _interopRequireDefault(_BaseMediaList);

var _AddToPlaylist = require('../MediaList/Actions/AddToPlaylist');

var _AddToPlaylist2 = _interopRequireDefault(_AddToPlaylist);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMediaActions = function addMediaActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return [(0, _jsx3.default)(_AddToPlaylist2.default, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, 'add')];
  };
};

var noActions = function noActions() {
  return [];
};

var HistoryList = (0, _withProps2.default)(function (props) {
  return {
    className: 'RoomHistory-list',
    listComponent: 'div',
    rowComponent: _Row2.default,
    makeActions: props.onOpenAddMediaMenu ? addMediaActions(props.onOpenAddMediaMenu) : noActions
  };
})(_BaseMediaList2.default);

HistoryList.propTypes = {
  onOpenAddMediaMenu: _propTypes2.default.func.isRequired
};

exports.default = HistoryList;
//# sourceMappingURL=HistoryList.js.map
//# sourceMappingURL=HistoryList.js.map
