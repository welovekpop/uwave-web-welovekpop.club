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

var _ModRow = _interopRequireDefault(require("./ModRow"));

var _SimpleRow = _interopRequireDefault(require("./SimpleRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaitList = function WaitList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      _onMoveUser = _ref.onMoveUser,
      _onRemoveUser = _ref.onRemoveUser,
      canMoveUsers = _ref.canMoveUsers;
  var Row = canMoveUsers ? _ModRow.default : _SimpleRow.default;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('UserList', 'UserList--queue', 'WaitList', className)
  }, void 0, (0, _jsx2.default)(_reactList.default, {
    itemRenderer: function itemRenderer(index, key) {
      return (0, _jsx2.default)(Row, {
        className: (0, _classnames.default)('UserList-row', index % 2 === 0 && 'UserList-row--alternate'),
        position: index,
        user: users[index],
        onMoveUser: function onMoveUser(position) {
          return _onMoveUser(users[index], position);
        },
        onRemoveUser: function onRemoveUser() {
          return _onRemoveUser(users[index]);
        }
      }, key);
    },
    length: users.length,
    type: "uniform"
  }));
};

WaitList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  users: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  canMoveUsers: _propTypes.default.bool.isRequired,
  onMoveUser: _propTypes.default.func.isRequired,
  onRemoveUser: _propTypes.default.func.isRequired
} : {};
var _default = WaitList;
exports.default = _default;
//# sourceMappingURL=index.js.map
