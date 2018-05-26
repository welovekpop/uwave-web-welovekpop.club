"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchBar = _interopRequireDefault(require("../../SearchBar"));

var _SourcePicker = _interopRequireDefault(require("./SourcePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBar = function SearchBar(_ref) {
  var className = _ref.className,
      source = _ref.source,
      onSubmit = _ref.onSubmit,
      onSourceChange = _ref.onSourceChange;
  return (0, _jsx2.default)(_SearchBar.default, {
    className: className,
    onSubmit: onSubmit
  }, void 0, (0, _jsx2.default)(_SourcePicker.default, {
    className: "SearchBar-source",
    selected: source,
    onChange: onSourceChange
  }));
};

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  source: _propTypes.default.string.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  onSourceChange: _propTypes.default.func.isRequired
} : {};
var _default = SearchBar;
exports.default = _default;
//# sourceMappingURL=SearchBar.js.map
