'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _BaseMediaList = require('../../../components/MediaList/BaseMediaList');

var _BaseMediaList2 = _interopRequireDefault(_BaseMediaList);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HistoryList = (0, _withProps2.default)({
  className: 'RoomHistory-list',
  listComponent: _react2.default.forwardRef(function (props, _ref) {
    return _react2.default.createElement(_List2.default, (0, _extends3.default)({}, props, {
      ref: function ref(list) {
        return _ref(list && _reactDom2.default.findDOMNode(list));
      } // eslint-disable-line react/no-find-dom-node

    }));
  }),
  rowComponent: _Row2.default
})(_BaseMediaList2.default);

exports.default = HistoryList;
//# sourceMappingURL=HistoryList.js.map
//# sourceMappingURL=HistoryList.js.map
