"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric'
};

var MessageTimestamp = function MessageTimestamp(_ref) {
  var date = _ref.date;
  return (0, _jsx2.default)("time", {
    className: "ChatMessage-timestamp",
    dateTime: date.toISOString()
  }, void 0, date.toLocaleTimeString([], timeFormatOptions));
};

MessageTimestamp.propTypes = process.env.NODE_ENV !== "production" ? {
  date: _propTypes.default.instanceOf(Date).isRequired
} : {};
var _default = MessageTimestamp;
exports.default = _default;
//# sourceMappingURL=MessageTimestamp.js.map
