"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Username = _interopRequireDefault(require("../Username"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRow = function UserRow(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('UserRow', className)
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "UserRow-avatar",
    user: user
  }), (0, _jsx2.default)(_Username.default, {
    className: "UserRow-username",
    user: user
  }));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.object.isRequired
} : {};
var _default = UserRow; //# sourceMappingURL=UserRow.js.map

exports.default = _default;
//# sourceMappingURL=UserRow.js.map
