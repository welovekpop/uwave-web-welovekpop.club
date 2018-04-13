"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MediaLoadingIndicator = _interopRequireDefault(require("./MediaLoadingIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MediaLoadingIndicator.default, {
  className: "MediaListRow-loader"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "MediaListRow-artist"
}, void 0, " \u2026 ");

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "MediaListRow-title"
}, void 0, " \u2026 ");

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "MediaListRow-duration"
}, void 0, " \u2026 ");

var LoadingRow = function LoadingRow(_ref) {
  var className = _ref.className,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      attrs = (0, _objectWithoutProperties2.default)(_ref, ["className", "selected"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('MediaListRow', 'is-loading', className, selected && 'is-selected')
  }, attrs), _ref2, _ref3, _ref4, _ref5);
};

LoadingRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  selected: _propTypes.default.bool
} : {};
var _default = LoadingRow; //# sourceMappingURL=LoadingRow.js.map

exports.default = _default;
//# sourceMappingURL=LoadingRow.js.map
