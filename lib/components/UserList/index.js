"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactList = _interopRequireDefault(require("react-list"));

var _UserRow = _interopRequireDefault(require("./UserRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function UserList(_ref) {
  var className = _ref.className,
      users = _ref.users;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('UserList', className)
  }, void 0, (0, _jsx2.default)(_reactList.default, {
    itemRenderer: function itemRenderer(index, key) {
      return (0, _jsx2.default)(_UserRow.default, {
        className: "UserList-row",
        user: users[index]
      }, key);
    },
    length: users.length,
    type: "uniform"
  }));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  users: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
} : {};
var _default = UserList; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
