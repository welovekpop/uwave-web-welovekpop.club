"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Close.default, {});

var ImportPanelHeader = function ImportPanelHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      children = _ref.children,
      onClosePanel = _ref.onClosePanel;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('ImportPanelHeader', className)
  }, void 0, (0, _jsx2.default)("div", {
    className: "ImportPanelHeader-content"
  }, void 0, children), (0, _jsx2.default)(_Tooltip.default, {
    title: t('close'),
    placement: "top"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    onClick: onClosePanel
  }, void 0, _ref2)));
};

ImportPanelHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  t: _propTypes.default.func.isRequired,
  onClosePanel: _propTypes.default.func.isRequired
} : {};

var _default = enhance(ImportPanelHeader); //# sourceMappingURL=ImportPanelHeader.js.map


exports.default = _default;
//# sourceMappingURL=ImportPanelHeader.js.map
