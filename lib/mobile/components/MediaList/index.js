"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _List = _interopRequireDefault(require("material-ui/List"));

var _BaseMediaList = _interopRequireDefault(require("../../../components/MediaList/BaseMediaList"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaList = (0, _withProps.default)({
  listComponent: _react.default.forwardRef(function (props, _ref) {
    return _react.default.createElement(_List.default, (0, _extends2.default)({}, props, {
      ref: function ref(list) {
        return _ref(list && _reactDom.default.findDOMNode(list));
      } // eslint-disable-line react/no-find-dom-node

    }));
  }),
  rowComponent: _Row.default
})(_BaseMediaList.default);
var _default = MediaList; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
