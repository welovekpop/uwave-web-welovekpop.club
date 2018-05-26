"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Header = _interopRequireDefault(require("../../../components/Overlay/Header"));

var _Content = _interopRequireDefault(require("../../../components/Overlay/Content"));

var _HistoryList = _interopRequireDefault(require("./HistoryList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var RoomHistory = function RoomHistory(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog,
      props = (0, _objectWithoutProperties2.default)(_ref, ["t", "className", "onCloseOverlay", "onOpenAddMediaMenu", "onOpenPreviewMediaDialog"]);
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('RoomHistory', className)
  }, void 0, (0, _jsx2.default)(_Header.default, {
    direction: "top",
    className: "AppRow AppRow--top",
    title: t('history.title'),
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx2.default)(_Content.default, {
    className: "RoomHistory-body"
  }, void 0, _react.default.createElement(_HistoryList.default, (0, _extends2.default)({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog
  }, props))));
};

RoomHistory.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  onCloseOverlay: _propTypes.default.func.isRequired,
  onOpenAddMediaMenu: _propTypes.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes.default.func.isRequired
} : {};

var _default = enhance(RoomHistory);

exports.default = _default;
//# sourceMappingURL=index.js.map
