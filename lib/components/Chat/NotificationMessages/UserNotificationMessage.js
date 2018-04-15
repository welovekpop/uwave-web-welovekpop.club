"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _userCardable = _interopRequireDefault(require("../../../utils/userCardable"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

var _Username = _interopRequireDefault(require("../../Username"));

var _MessageTimestamp = _interopRequireDefault(require("../MessageTimestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default, (0, _userCardable.default)(), (0, _withHandlers.default)({
  onClick: function onClick(props) {
    return function (event) {
      event.preventDefault();
      props.openUserCard(props.user);
    };
  }
}));

var UserNotificationMessage = function UserNotificationMessage(_ref) {
  var className = _ref.className,
      user = _ref.user,
      timestamp = _ref.timestamp,
      onClick = _ref.onClick,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "user", "timestamp", "onClick"]);
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('ChatMessage', 'ChatMessage--userNotification', className)
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "ChatMessage-avatar",
    user: user
  }), (0, _jsx2.default)("div", {
    className: "ChatMessage-content"
  }, void 0, (0, _jsx2.default)("div", {
    className: "ChatMessage-hover"
  }, void 0, (0, _jsx2.default)(_MessageTimestamp.default, {
    date: new Date(timestamp)
  })), _react.default.createElement(_reactI18next.Interpolate, (0, _extends2.default)({
    username: (0, _jsx2.default)("button", {
      className: "ChatMessage-username ChatMessage-cardable",
      onClick: onClick
    }, void 0, (0, _jsx2.default)(_Username.default, {
      user: user
    }))
  }, props))));
};

UserNotificationMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string.isRequired,
  user: _propTypes.default.object.isRequired,
  timestamp: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(UserNotificationMessage); //# sourceMappingURL=UserNotificationMessage.js.map


exports.default = _default;
//# sourceMappingURL=UserNotificationMessage.js.map
