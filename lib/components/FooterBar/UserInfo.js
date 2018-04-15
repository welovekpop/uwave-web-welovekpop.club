"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = _pure.default;

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "UserInfo-settings"
}, void 0, (0, _jsx2.default)(_Settings.default, {
  className: "UserInfo-settingsIcon"
}));

var UserInfo = function UserInfo(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onClick = _ref.onClick;
  return (0, _jsx2.default)("button", {
    className: (0, _classnames.default)('UserInfo', className),
    onClick: onClick
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "UserInfo-avatar",
    user: user
  }), _ref2);
};

UserInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.object.isRequired,
  onClick: _propTypes.default.func
} : {};

var _default = enhance(UserInfo); //# sourceMappingURL=UserInfo.js.map


exports.default = _default;
//# sourceMappingURL=UserInfo.js.map
