'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MediaList = require('../MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

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

var HistoryList = function HistoryList(_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      props = (0, _objectWithoutProperties3.default)(_ref, ['onOpenAddMediaMenu']);

  return _react2.default.createElement(_MediaList2.default, (0, _extends3.default)({}, props, {
    className: 'RoomHistory-list',
    rowComponent: _Row2.default,
    makeActions: onOpenAddMediaMenu ? addMediaActions(onOpenAddMediaMenu) : noActions
  }));
};

HistoryList.propTypes = process.env.NODE_ENV !== "production" ? {
  onOpenAddMediaMenu: _propTypes2.default.func.isRequired
} : {};

exports.default = HistoryList;
//# sourceMappingURL=HistoryList.js.map
//# sourceMappingURL=HistoryList.js.map
