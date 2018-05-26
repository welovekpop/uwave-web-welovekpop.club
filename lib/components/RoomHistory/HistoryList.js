"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _BaseMediaList = _interopRequireDefault(require("../MediaList/BaseMediaList"));

var _AddToPlaylist = _interopRequireDefault(require("../MediaList/Actions/AddToPlaylist"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMediaActions = function addMediaActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return [(0, _jsx2.default)(_AddToPlaylist.default, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, "add")];
  };
};

var noActions = function noActions() {
  return [];
};

var HistoryList = (0, _withProps.default)(function (props) {
  return {
    className: 'RoomHistory-list',
    listComponent: 'div',
    rowComponent: _Row.default,
    makeActions: props.onOpenAddMediaMenu ? addMediaActions(props.onOpenAddMediaMenu) : noActions
  };
})(_BaseMediaList.default);
HistoryList.propTypes = {
  onOpenAddMediaMenu: _propTypes.default.func.isRequired
};
var _default = HistoryList;
exports.default = _default;
//# sourceMappingURL=HistoryList.js.map
