"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Card = _interopRequireDefault(require("material-ui/Card/Card"));

var _CardHeader = _interopRequireDefault(require("material-ui/Card/CardHeader"));

var _OfflineIcon = _interopRequireDefault(require("./OfflineIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_OfflineIcon.default, {});

var ConnectionIndicator = function ConnectionIndicator(_ref) {
  var isConnected = _ref.isConnected,
      t = _ref.t;
  return isConnected ? null : (0, _jsx2.default)("div", {
    className: "ConnectionIndicator-position"
  }, void 0, (0, _jsx2.default)(_Card.default, {}, void 0, (0, _jsx2.default)(_CardHeader.default, {
    title: t('server.connectionLost'),
    subheader: t('server.reconnecting'),
    avatar: _ref2
  })));
};

ConnectionIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  isConnected: _propTypes.default.bool.isRequired
} : {};

var _default = enhance(ConnectionIndicator); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
