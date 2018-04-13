"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentDJ = function CurrentDJ(_ref) {
  var t = _ref.t,
      className = _ref.className,
      dj = _ref.dj;
  return (0, _jsx2.default)("div", {
    className: className
  }, void 0, t('booth.currentDJ', {
    user: dj.username
  }));
};

CurrentDJ.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dj: _propTypes.default.shape({
    username: _propTypes.default.string.isRequired
  })
} : {};

var _default = (0, _reactI18next.translate)()(CurrentDJ); //# sourceMappingURL=CurrentDJ.js.map


exports.default = _default;
//# sourceMappingURL=CurrentDJ.js.map
