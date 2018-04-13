"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Delete.default, {});

var RemoveFromPlaylist = function RemoveFromPlaylist(_ref) {
  var onRemove = _ref.onRemove,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onRemove"]);
  return _react.default.createElement(_Action.default, (0, _extends2.default)({}, props, {
    onAction: onRemove
  }), _ref2);
};

RemoveFromPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  onRemove: _propTypes.default.func.isRequired
} : {};
var _default = RemoveFromPlaylist; //# sourceMappingURL=RemoveFromPlaylist.js.map

exports.default = _default;
//# sourceMappingURL=RemoveFromPlaylist.js.map
