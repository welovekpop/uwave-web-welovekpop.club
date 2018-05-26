"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Overlay = _interopRequireDefault(require("../components/Overlay"));

var _About = _interopRequireDefault(require("../components/About"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AboutContainer, _React$Component);

  function AboutContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AboutContainer.prototype;

  _proto.getAboutPageComponent = function getAboutPageComponent() {
    if (this.hasAboutPageComponent()) {
      var uw = this.context.uwave;
      return uw.getAboutPageComponent();
    }

    return function () {
      return null;
    };
  };

  _proto.hasAboutPageComponent = function hasAboutPageComponent() {
    var uw = this.context.uwave;
    return Boolean(uw && uw.getAboutPageComponent());
  };

  _proto.render = function render() {
    return (0, _jsx2.default)(_Overlay.default, {
      direction: "top"
    }, void 0, _react.default.createElement(_About.default, (0, _extends2.default)({}, this.props, {
      hasAboutPage: this.hasAboutPageComponent(),
      render: this.getAboutPageComponent()
    })));
  };

  return AboutContainer;
}(_react.default.Component);

exports.default = AboutContainer;
AboutContainer.contextTypes = {
  uwave: _propTypes.default.object
};
//# sourceMappingURL=About.js.map
