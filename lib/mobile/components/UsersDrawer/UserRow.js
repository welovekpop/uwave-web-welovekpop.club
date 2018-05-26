"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Username = _interopRequireDefault(require("../../../components/Username"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRow = function UserRow(_ref) {
  var user = _ref.user,
      icon = _ref.icon;
  return (0, _jsx2.default)(_ListItem.default, {}, void 0, (0, _jsx2.default)(_ListItemAvatar.default, {}, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "Avatar",
    src: user.avatar || "https://sigil.u-wave.net/" + user._id
  })), (0, _jsx2.default)(_ListItemText.default, {}, void 0, (0, _jsx2.default)(_Username.default, {
    user: user
  })), icon && (0, _jsx2.default)(_ListItemIcon.default, {}, void 0, icon));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  icon: _propTypes.default.node
} : {};
var _default = UserRow;
exports.default = _default;
//# sourceMappingURL=UserRow.js.map
