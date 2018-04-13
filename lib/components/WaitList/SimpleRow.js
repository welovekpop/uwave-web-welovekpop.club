"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _userCardable = _interopRequireDefault(require("../../utils/userCardable"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Username = _interopRequireDefault(require("../Username"));

var _Position = _interopRequireDefault(require("./Position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleRow = function SimpleRow(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      onOpenCard = _ref.onOpenCard;
  return (0, _jsx2.default)("button", {
    className: (0, _classnames.default)('UserRow', 'WaitlistRow', 'UserRow--cardable', className),
    onClick: onOpenCard
  }, void 0, (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)(_Position.default, {
    position: position + 1
  }), (0, _jsx2.default)(_Avatar.default, {
    className: "UserRow-avatar",
    user: user
  }), (0, _jsx2.default)(_Username.default, {
    className: "UserRow-username",
    user: user
  })));
};

SimpleRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  position: _propTypes.default.number.isRequired,
  user: _propTypes.default.object.isRequired,
  onOpenCard: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _userCardable.default)(), (0, _withProps.default)(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(SimpleRow); //# sourceMappingURL=SimpleRow.js.map


exports.default = _default;
//# sourceMappingURL=SimpleRow.js.map
