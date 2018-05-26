"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ArrowDownward = _interopRequireDefault(require("@material-ui/icons/ArrowDownward"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ArrowDownward.default, {});

var ScrollNotice = function ScrollNotice(_ref) {
  var show = _ref.show,
      onClick = _ref.onClick;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('ChatMessages-scrollDown', show && 'is-visible')
  }, void 0, (0, _jsx2.default)("div", {
    className: "ChatMessages-scrollDownButton"
  }, void 0, (0, _jsx2.default)(_Button.default, {
    variant: "fab",
    mini: true,
    color: "primary",
    onClick: onClick
  }, void 0, _ref2)));
};

ScrollNotice.propTypes = process.env.NODE_ENV !== "production" ? {
  show: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired
} : {};
var _default = ScrollNotice;
exports.default = _default;
//# sourceMappingURL=ScrollDownNotice.js.map
