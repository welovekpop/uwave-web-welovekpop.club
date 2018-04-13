"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      count = _ref.count,
      children = _ref.children,
      tooltip = _ref.tooltip;
  return (// Wrapped in a <div> so the tooltip can listen for mouse events.
    (0, _jsx2.default)(_Tooltip.default, {
      title: tooltip,
      placement: "top"
    }, void 0, (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)("button", {
      className: (0, _classnames.default)('ResponseButton', disabled && 'ResponseButton--disabled'),
      disabled: disabled,
      onClick: onClick
    }, void 0, (0, _jsx2.default)("div", {
      className: "ResponseButton-content"
    }, void 0, (0, _jsx2.default)("div", {
      className: "ResponseButton-icon"
    }, void 0, children), (0, _jsx2.default)("span", {
      className: "ResponseButton-count"
    }, void 0, count)))))
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes.default.func.isRequired,
  children: _propTypes.default.element.isRequired,
  disabled: _propTypes.default.bool,
  count: _propTypes.default.number,
  tooltip: _propTypes.default.string
} : {};
var _default = Button; //# sourceMappingURL=Button.js.map

exports.default = _default;
//# sourceMappingURL=Button.js.map
