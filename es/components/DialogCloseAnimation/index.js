import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that handles the material-ui/Dialog close animation when a Dialog unmounts.
 */

var DialogCloseAnimation = function (_React$Component) {
  _inherits(DialogCloseAnimation, _React$Component);

  function DialogCloseAnimation() {
    var _temp, _this, _ret;

    _classCallCheck(this, DialogCloseAnimation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      children: _this.props.children
    }, _this.timeout = null, _temp), _possibleConstructorReturn(_this, _ret);
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
        children: React.cloneElement(this.state.children, {
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
}(React.Component);

export default DialogCloseAnimation;
DialogCloseAnimation.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.element,
  delay: PropTypes.number.isRequired
} : {};
//# sourceMappingURL=index.js.map
