"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourcePickerElement = function SourcePickerElement(_ref) {
  var className = _ref.className,
      name = _ref.name,
      source = _ref.source,
      active = _ref.active;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('SourcePickerElement', "SourcePickerElement--" + name, active && 'SourcePickerElement--active', className),
    style: {
      backgroundImage: "url(" + source.logo + ")"
    }
  });
};

SourcePickerElement.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  source: _propTypes.default.shape({
    logo: _propTypes.default.string.isRequired
  }).isRequired,
  active: _propTypes.default.bool
} : {};
var _default = SourcePickerElement; //# sourceMappingURL=SourcePickerElement.js.map

exports.default = _default;
//# sourceMappingURL=SourcePickerElement.js.map
