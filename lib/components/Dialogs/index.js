"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _EditMediaDialog = _interopRequireDefault(require("../../containers/EditMediaDialog"));

var _LoginDialog = _interopRequireDefault(require("../../containers/LoginDialog"));

var _PreviewMediaDialog = _interopRequireDefault(require("../../containers/PreviewMediaDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Dialogs"
}, void 0, (0, _jsx2.default)(_EditMediaDialog.default, {}), (0, _jsx2.default)(_LoginDialog.default, {}), (0, _jsx2.default)(_PreviewMediaDialog.default, {}));

var Dialogs = function Dialogs() {
  return _ref;
};

var _default = Dialogs; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
