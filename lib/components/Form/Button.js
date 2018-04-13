"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "text"]);
  return _react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('Button', className)
  }, props), text || children);
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  text: _propTypes.default.string,
  children: _propTypes.default.node
} : {};
var _default = Button; //# sourceMappingURL=Button.js.map

exports.default = _default;
//# sourceMappingURL=Button.js.map
