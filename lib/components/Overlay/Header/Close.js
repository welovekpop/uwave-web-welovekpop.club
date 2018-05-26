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

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  bottom: _KeyboardArrowDown.default,
  top: _KeyboardArrowUp.default
};

var Close = function Close(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      direction = _ref.direction;
  var CloseIcon = icons[direction];
  return (0, _jsx2.default)(_IconButton.default, {
    className: (0, _classnames.default)('OverlayHeaderClose', className),
    onClick: onClose
  }, void 0, (0, _jsx2.default)(CloseIcon, {
    className: "OverlayHeaderClose-icon"
  }));
};

Close.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  direction: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired
} : {};
var _default = Close;
exports.default = _default;
//# sourceMappingURL=Close.js.map
