"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _Motd = _interopRequireDefault(require("../../containers/Motd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)("p", {}, void 0, "Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P"), (0, _jsx2.default)(_Motd.default, {}));

var Main = function Main() {
  return _ref;
};

Main.propTypes = process.env.NODE_ENV !== "production" ? {} : {};
var _default = Main;
exports.default = _default;
//# sourceMappingURL=index.js.map
