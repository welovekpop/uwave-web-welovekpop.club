"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("material-ui/Paper"));

var _List = _interopRequireDefault(require("material-ui/List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuggestionsList = function SuggestionsList(_ref) {
  var children = _ref.children;
  return (0, _jsx2.default)("div", {
    className: "ChatInput-suggestions"
  }, void 0, (0, _jsx2.default)(_Paper.default, {}, void 0, (0, _jsx2.default)(_List.default, {}, void 0, children)));
};

SuggestionsList.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired
} : {};
var _default = SuggestionsList; //# sourceMappingURL=SuggestionsList.js.map

exports.default = _default;
//# sourceMappingURL=SuggestionsList.js.map
