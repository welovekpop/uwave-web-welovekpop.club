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

/**
 * Component that handles the material-ui/Dialog close animation when a Dialog unmounts.
 */
var DialogCloseAnimation =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DialogCloseAnimation, _React$Component);

  function DialogCloseAnimation() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      children: _this.props.children
    }, _this.timeout = null, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = DialogCloseAnimation.prototype; // TODO translate this to componentDidUpdate()?

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.children) {
      this.clearTimeout();
      this.setState({
        children: nextProps.children
      });
    }

    if (this.state.children && !nextProps.children) {
      this.setState({
        children: _react.default.cloneElement(this.state.children, {
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

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearTimeout();
  };

  _proto.clearTimeout = function (_clearTimeout) {
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

  _proto.render = function render() {
    return this.state.children || null;
  };

  return DialogCloseAnimation;
}(_react.default.Component);

exports.default = DialogCloseAnimation;
DialogCloseAnimation.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.element,
  delay: _propTypes.default.number.isRequired
} : {};
//# sourceMappingURL=index.js.map
