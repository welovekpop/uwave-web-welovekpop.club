'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component that handles the material-ui/Dialog close animation when a Dialog unmounts.
 */

var DialogCloseAnimation = function (_React$Component) {
  (0, _inherits3.default)(DialogCloseAnimation, _React$Component);

  function DialogCloseAnimation() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DialogCloseAnimation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      children: _this.props.children
    }, _this.timeout = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DialogCloseAnimation.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.children) {
      this.clearTimeout();
      this.setState({
        children: nextProps.children
      });
    }
    if (this.state.children && !nextProps.children) {
      this.setState({
        children: _react2.default.cloneElement(this.state.children, {
          open: false
        })
      });

      this.timeout = setTimeout(function () {
        _this2.setState({
          children: null
        });
        _this2.timeout = null;
      }, this.props.delay);
    }
  };

  DialogCloseAnimation.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearTimeout();
  };

  DialogCloseAnimation.prototype.clearTimeout = function (_clearTimeout) {
    function clearTimeout() {
      return _clearTimeout.apply(this, arguments);
    }

    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };

    return clearTimeout;
  }(function () {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  });

  DialogCloseAnimation.prototype.render = function render() {
    return this.state.children || null;
  };

  return DialogCloseAnimation;
}(_react2.default.Component);

exports.default = DialogCloseAnimation;

DialogCloseAnimation.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element,
  delay: _propTypes2.default.number.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
