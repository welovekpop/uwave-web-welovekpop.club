"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Position = function Position(_ref) {
  var position = _ref.position;
  return (0, _jsx2.default)(_Avatar.default, {
    className: "WaitlistRow-position"
  }, void 0, position);
};

Position.propTypes = process.env.NODE_ENV !== "production" ? {
  position: _propTypes.default.number.isRequired
} : {};
var _default = Position;
exports.default = _default;
//# sourceMappingURL=Position.js.map
