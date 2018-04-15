"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaitlistPosition = function WaitlistPosition(_ref) {
  var position = _ref.position;
  return (0, _jsx2.default)("span", {
    className: "UsersDrawer-position"
  }, void 0, position);
};

WaitlistPosition.propTypes = process.env.NODE_ENV !== "production" ? {
  position: _propTypes.default.number.isRequired
} : {};
var _default = WaitlistPosition; //# sourceMappingURL=WaitlistPosition.js.map

exports.default = _default;
//# sourceMappingURL=WaitlistPosition.js.map
