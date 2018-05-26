"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ServerList ServerList--loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {}));

var ServerList = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(() => require('@u-wave/react-server-list'));
  },
  loading: function loading() {
    return _ref;
  },
  render: function render(loaded, props) {
    var Container = loaded.Container;
    return (0, _jsx2.default)("div", {
      className: "ServerList"
    }, void 0, _react.default.createElement(Container, props));
  }
});
var _default = ServerList;
exports.default = _default;
//# sourceMappingURL=index.js.map
