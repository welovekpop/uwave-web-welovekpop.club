"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _History = _interopRequireDefault(require("@material-ui/icons/History"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_History.default, {
  className: "HeaderHistoryButton-icon"
});

var HistoryButton = function HistoryButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return (0, _jsx2.default)(_Tooltip.default, {
    title: t('history.title'),
    position: "bottom"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    "aria-label": t('history.title'),
    className: "HeaderHistoryButton",
    onClick: onClick
  }, void 0, _ref2));
};

HistoryButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default)(HistoryButton); //# sourceMappingURL=HistoryButton.js.map


exports.default = _default;
//# sourceMappingURL=HistoryButton.js.map
