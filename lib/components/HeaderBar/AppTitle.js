"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _logoSquare = _interopRequireDefault(require("../../../assets/img/logo-square.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ArrowDropDown.default, {});

var AppTitle = function AppTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('AppTitle', className)
  }, void 0, (0, _jsx2.default)("h1", {
    className: "AppTitle-logo"
  }, void 0, (0, _jsx2.default)("img", {
    className: "AppTitle-logoImage",
    alt: children,
    src: _logoSquare.default
  })), (0, _jsx2.default)(_IconButton.default, {
    className: "AppTitle-button",
    onClick: onClick
  }, void 0, _ref2));
};

AppTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
} : {};
var _default = AppTitle;
exports.default = _default;
//# sourceMappingURL=AppTitle.js.map
