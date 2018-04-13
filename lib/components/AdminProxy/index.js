"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _Progress = require("material-ui/Progress");

var _Overlay = _interopRequireDefault(require("../Overlay"));

var _Header = _interopRequireDefault(require("../Overlay/Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
});

var AdminComponent = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(() => require('../../admin/containers/AdminApp'));
  },
  loading: function loading() {
    return _ref;
  }
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "AppRow AppRow--middle AdminPanel"
}, void 0, (0, _jsx2.default)(AdminComponent, {}));

var AdminProxy = function AdminProxy(_ref2) {
  var onCloseOverlay = _ref2.onCloseOverlay;
  return (0, _jsx2.default)(_Overlay.default, {
    className: "AppColumn AppColumn--full",
    direction: "top"
  }, void 0, (0, _jsx2.default)(_Header.default, {
    title: "Administration",
    onCloseOverlay: onCloseOverlay,
    direction: "top"
  }), _ref3);
};

AdminProxy.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};
var _default = AdminProxy; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
