"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("material-ui/Progress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  className: "MediaLoadingIndicator-spinner"
});

var MediaLoadingIndicator = function MediaLoadingIndicator(_ref) {
  var className = _ref.className;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('MediaLoadingIndicator', className)
  }, void 0, _ref2);
};

MediaLoadingIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string
} : {};
var _default = MediaLoadingIndicator; //# sourceMappingURL=MediaLoadingIndicator.js.map

exports.default = _default;
//# sourceMappingURL=MediaLoadingIndicator.js.map
