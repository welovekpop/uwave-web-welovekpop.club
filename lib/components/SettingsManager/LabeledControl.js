"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The control is in `children`.

/* eslint-disable jsx-a11y/label-has-for */
var LabeledControl = function LabeledControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children;

  var control = _react.default.Children.only(children);

  return (0, _jsx2.default)("div", {
    className: "LabeledControl"
  }, void 0, (0, _jsx2.default)("label", {
    className: "LabeledControl-label",
    htmlFor: id
  }, void 0, label), _react.default.cloneElement(control, {
    id: id,
    className: (0, _classnames.default)(control.className, 'LabeledControl-control')
  }));
};
/* eslint-enable jsx-a11y/label-has-for */


LabeledControl.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
} : {};
var _default = LabeledControl; //# sourceMappingURL=LabeledControl.js.map

exports.default = _default;
//# sourceMappingURL=LabeledControl.js.map
