"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultProps = _interopRequireDefault(require("recompose/defaultProps"));

var _BaseMediaList = _interopRequireDefault(require("./BaseMediaList"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaList = (0, _defaultProps.default)({
  listComponent: 'div',
  rowComponent: _Row.default
})(_BaseMediaList.default);
var _default = MediaList; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
