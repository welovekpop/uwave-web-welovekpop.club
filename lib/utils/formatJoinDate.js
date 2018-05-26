"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatJoinDate;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatters = {
  date: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  },
  time: {
    hour: 'numeric',
    minute: 'numeric'
  }
};
var all = (0, _extends2.default)({}, formatters.date, formatters.time);

function formatJoinDate(date, only) {
  var format = only ? formatters[only] : all;
  return new Date(date).toLocaleString([], format);
}
//# sourceMappingURL=formatJoinDate.js.map
