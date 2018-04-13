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

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_KeyboardArrowDown.default, {});

var MoveToLast = function MoveToLast(_ref) {
  var onLast = _ref.onLast,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onLast"]);
  return _react.default.createElement(_Action.default, (0, _extends2.default)({}, props, {
    onAction: onLast
  }), _ref2);
};

MoveToLast.propTypes = process.env.NODE_ENV !== "production" ? {
  onLast: _propTypes.default.func.isRequired
} : {};
var _default = MoveToLast; //# sourceMappingURL=MoveToLast.js.map

exports.default = _default;
//# sourceMappingURL=MoveToLast.js.map
