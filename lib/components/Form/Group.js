"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('FormGroup', className)
  }, props), children);
};

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
} : {};
var _default = FormGroup;
exports.default = _default;
//# sourceMappingURL=Group.js.map
