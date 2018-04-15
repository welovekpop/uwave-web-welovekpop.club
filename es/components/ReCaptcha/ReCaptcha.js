import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';

var ReCaptcha =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReCaptcha, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
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
    return React.createElement("div", {
      ref: this.refContainer
    });
  };

  return ReCaptcha;
}(React.Component);

ReCaptcha.defaultProps = {
  theme: 'light'
};
export { ReCaptcha as default };
ReCaptcha.propTypes = process.env.NODE_ENV !== "production" ? {
  grecaptcha: PropTypes.object.isRequired,
  sitekey: PropTypes.string.isRequired,
  theme: PropTypes.string,
  onResponse: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=ReCaptcha.js.map
