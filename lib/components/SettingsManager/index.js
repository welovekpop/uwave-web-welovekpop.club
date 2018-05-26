"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Header = _interopRequireDefault(require("../Overlay/Header"));

var _Content = _interopRequireDefault(require("../Overlay/Content"));

var _SettingsPanel = _interopRequireDefault(require("./SettingsPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var SettingsManager =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SettingsManager, _React$Component);

  function SettingsManager() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleLogout = function () {
      _this.props.onCloseOverlay();

      _this.props.onLogout();
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = SettingsManager.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        className = _this$props.className,
        onCloseOverlay = _this$props.onCloseOverlay,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["t", "className", "onCloseOverlay"]);
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('SettingsManager', className)
    }, void 0, (0, _jsx2.default)(_Header.default, {
      title: t('settings.title'),
      onCloseOverlay: onCloseOverlay
    }), (0, _jsx2.default)(_Content.default, {
      className: "SettingsManager-body"
    }, void 0, _react.default.createElement(_SettingsPanel.default, (0, _extends2.default)({}, props, {
      onLogout: this.handleLogout
    }))));
  };

  return SettingsManager;
}(_react.default.Component);

SettingsManager.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  onCloseOverlay: _propTypes.default.func.isRequired,
  onLogout: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SettingsManager);

exports.default = _default;
//# sourceMappingURL=index.js.map
