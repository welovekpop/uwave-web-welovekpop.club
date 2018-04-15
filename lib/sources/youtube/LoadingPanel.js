"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("material-ui/Progress");

var _ImportPanelHeader = _interopRequireDefault(require("../../components/PlaylistManager/Import/ImportPanelHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ImportPanel-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
}));

var LoadingPanel = function LoadingPanel(_ref) {
  var onClosePanel = _ref.onClosePanel;
  return (0, _jsx2.default)("div", {
    className: "ImportPanel"
  }, void 0, (0, _jsx2.default)(_ImportPanelHeader.default, {
    onClosePanel: onClosePanel
  }), _ref2);
};

LoadingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  onClosePanel: _propTypes.default.func.isRequired
} : {};
var _default = LoadingPanel; //# sourceMappingURL=LoadingPanel.js.map

exports.default = _default;
//# sourceMappingURL=LoadingPanel.js.map
