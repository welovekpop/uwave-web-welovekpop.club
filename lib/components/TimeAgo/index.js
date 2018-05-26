"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _ms = _interopRequireDefault(require("ms"));

var _timed = _interopRequireDefault(require("../../utils/timed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bit weird to do it like this perhaps, convert to an english string first and
// then translate afterwards.
function translateMs(str) {
  // `ms` output of the form "3 hours"
  var _str$split = str.split(' '),
      count = _str$split[0],
      key = _str$split[1];

  return {
    key: key.replace(/s$/, '') + "s",
    count: parseInt(count, 10)
  };
}

var TimeAgo = function TimeAgo(_ref) {
  var t = _ref.t,
      currentTime = _ref.currentTime,
      timestamp = _ref.timestamp;
  var secondsAgo = Math.max(0, Math.floor((currentTime - timestamp) / 1000));
  var msString = (0, _ms.default)(secondsAgo * 1000, {
    long: true
  });

  var _translateMs = translateMs(msString),
      key = _translateMs.key,
      count = _translateMs.count;

  return (0, _jsx2.default)("span", {}, void 0, t('timeAgo.format', {
    time: t("timeAgo." + key, {
      count: count,
      defaultValue: msString
    })
  }));
};

TimeAgo.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  currentTime: _propTypes.default.number.isRequired,
  timestamp: _propTypes.default.number.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), (0, _timed.default)())(TimeAgo);

exports.default = _default;
//# sourceMappingURL=index.js.map
