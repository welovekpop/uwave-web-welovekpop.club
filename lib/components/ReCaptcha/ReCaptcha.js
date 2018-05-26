"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReCaptcha =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleResponse = function (res) {
      if (_this.props.onResponse) {
        _this.props.onResponse(res);
      }
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ReCaptcha.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.grecaptcha.render(this.container, {
      sitekey: this.props.sitekey,
      callback: this.handleResponse,
      theme: this.props.theme
    });
  };

  _proto.render = function render() {
    return _react.default.createElement("div", {
      ref: this.refContainer
    });
  };

  return ReCaptcha;
}(_react.default.Component);

exports.default = ReCaptcha;
ReCaptcha.defaultProps = {
  theme: 'light'
};
ReCaptcha.propTypes = process.env.NODE_ENV !== "production" ? {
  grecaptcha: _propTypes.default.object.isRequired,
  sitekey: _propTypes.default.string.isRequired,
  theme: _propTypes.default.string,
  onResponse: _propTypes.default.func.isRequired
} : {};
//# sourceMappingURL=ReCaptcha.js.map
