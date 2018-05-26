"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistPanel-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var LoadingSearchResults = function LoadingSearchResults() {
  return _ref;
};

var _default = LoadingSearchResults;
exports.default = _default;
//# sourceMappingURL=LoadingSearchResults.js.map
