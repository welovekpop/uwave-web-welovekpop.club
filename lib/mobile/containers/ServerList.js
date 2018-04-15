"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Overlay = _interopRequireDefault(require("../../components/Overlay"));

var _Content = _interopRequireDefault(require("../../components/Overlay/Content"));

var _Header = _interopRequireDefault(require("../../components/Overlay/Header"));

var _ServerList = _interopRequireDefault(require("../../components/ServerList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Content.default, {
  className: "AboutPanel"
}, void 0, (0, _jsx2.default)(_ServerList.default, {}));

var ServerListContainer = function ServerListContainer(_ref) {
  var t = _ref.t,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx2.default)(_Overlay.default, {}, void 0, (0, _jsx2.default)(_Header.default, {
    title: t('about.servers'),
    onCloseOverlay: onCloseOverlay
  }), _ref2);
};

ServerListContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};

var _default = enhance(ServerListContainer); //# sourceMappingURL=ServerList.js.map


exports.default = _default;
//# sourceMappingURL=ServerList.js.map
