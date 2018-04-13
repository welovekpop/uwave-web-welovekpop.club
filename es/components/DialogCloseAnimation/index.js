import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component that handles the material-ui/Dialog close animation when a Dialog unmounts.
 */

var DialogCloseAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DialogCloseAnimation, _React$Component);

  function DialogCloseAnimation() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      children: _this.props.children
    }, _this.timeout = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = DialogCloseAnimation.prototype;

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
}(React.Component);

export { DialogCloseAnimation as default };
DialogCloseAnimation.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.element,
  delay: PropTypes.number.isRequired
} : {};
//# sourceMappingURL=index.js.map
