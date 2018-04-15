"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("material-ui/Progress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  size: 32
});

var OfflineIcon = function OfflineIcon(_ref) {
  var style = _ref.style;
  return (0, _jsx2.default)("div", {
    style: (0, _objectSpread2.default)({}, style, {
      width: 32,
      height: 32,
      display: 'inline-block'
    })
  }, void 0, _ref2);
};

OfflineIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  style: _propTypes.default.object
} : {};
var _default = OfflineIcon; //# sourceMappingURL=OfflineIcon.js.map

exports.default = _default;
//# sourceMappingURL=OfflineIcon.js.map
