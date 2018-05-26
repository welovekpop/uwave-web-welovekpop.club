"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Overlay = _interopRequireDefault(require("../../components/Overlay"));

var _Header = _interopRequireDefault(require("../../components/Overlay/Header"));

var _Content = _interopRequireDefault(require("../../components/Overlay/Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var AboutContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AboutContainer, _React$Component);

  function AboutContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AboutContainer.prototype;

  _proto.getAboutPageComponent = function getAboutPageComponent() {
    var uw = this.context.uwave;

    if (uw) {
      return uw.getAboutPageComponent();
    }

    return null;
  };

  _proto.render = function render() {
    var About = this.getAboutPageComponent();
    if (!About) return null;
    var _this$props = this.props,
        t = _this$props.t,
        onCloseOverlay = _this$props.onCloseOverlay,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["t", "onCloseOverlay"]);
    return (0, _jsx2.default)(_Overlay.default, {}, void 0, (0, _jsx2.default)(_Header.default, {
      title: t('about.about'),
      onCloseOverlay: onCloseOverlay
    }), (0, _jsx2.default)(_Content.default, {
      className: "AboutPanel"
    }, void 0, _react.default.createElement(About, props)));
  };

  return AboutContainer;
}(_react.default.Component);

AboutContainer.contextTypes = {
  uwave: _propTypes.default.object
};
AboutContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};

var _default = enhance(AboutContainer);

exports.default = _default;
//# sourceMappingURL=About.js.map
