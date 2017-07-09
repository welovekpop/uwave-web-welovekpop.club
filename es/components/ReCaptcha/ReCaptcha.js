import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import PropTypes from 'prop-types';

var ReCaptcha = (_temp2 = _class = function (_React$Component) {
  _inherits(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReCaptcha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleResponse = function (res) {
      if (_this.props.onResponse) {
        _this.props.onResponse(res);
      }
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReCaptcha.prototype.componentDidMount = function componentDidMount() {
    this.props.grecaptcha.render(this.container, {
      sitekey: this.props.sitekey,
      callback: this.handleResponse,
      theme: this.props.theme
    });
  };

  ReCaptcha.prototype.render = function render() {
    return React.createElement('div', { ref: this.refContainer });
  };

  return ReCaptcha;
}(React.Component), _class.defaultProps = {
  theme: 'light'
}, _temp2);
export { ReCaptcha as default };
ReCaptcha.propTypes = process.env.NODE_ENV !== "production" ? {
  grecaptcha: PropTypes.object.isRequired,
  sitekey: PropTypes.string.isRequired,
  theme: PropTypes.string,
  onResponse: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=ReCaptcha.js.map
