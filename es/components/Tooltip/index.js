import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import MuiTooltip from 'material-ui/internal/Tooltip';

/**
 * Wrapper for material-ui Tooltips with better center-alignment on things that
 * are not IconButtons, and auto-realignment when close to the window border in
 * order to prevent overflow.
 */

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      /**
       * Overflow-prevented horizontal position of the tooltip.
       */
      horizontalPosition: _this.props.horizontalPosition,
      /**
       * Whether the tooltip element is currently in the DOM.
       */
      insert: _this.props.show,
      /**
       * Whether the tooltip element is currently visible.
       */
      show: _this.props.show
    }, _this.refTooltip = function (tooltip) {
      _this.tooltip = tooltip;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tooltip.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.show();
    }

    if (this.props.show && !nextProps.show) {
      this.hide();
    }
  };

  /**
   * Clear the fade-out animation timeout.
   */


  Tooltip.prototype.clearTimeout = function (_clearTimeout) {
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

  /**
   * Show the tooltip.
   */


  Tooltip.prototype.show = function show() {
    var _this2 = this;

    this.clearTimeout();
    this.setState({ insert: true }, function () {
      _this2.position();
      _this2.setState({ show: true });
    });
  };

  /**
   * Hide the tooltip.
   */


  Tooltip.prototype.hide = function hide() {
    var _this3 = this;

    if (this.timeout) {
      return;
    }

    // First hide it,
    this.setState({ show: false }, function () {
      // Then wait for the fade-out animation,
      _this3.timeout = setTimeout(function () {
        // And finally remove the element.
        _this3.setState({
          insert: false,
          // The horizontal position is reset here, so that the next time the
          // tooltip is shown, the positioning checks run on the original
          // position. Otherwise, it might getBoundingClientRect() from an
          // already-repositioned element, discover that it is fits, and go back
          // to the initial state even if it did not fit.
          horizontalPosition: _this3.props.horizontalPosition
        });
      }, 450);
    });
  };

  /**
   * Reposition the tooltip if it is close to the window border.
   */


  Tooltip.prototype.position = function position() {
    if (!this.tooltip) {
      return;
    }

    // eslint-disable-next-line react/no-find-dom-node
    var rect = findDOMNode(this.tooltip).getBoundingClientRect();
    this.setState({
      horizontalPosition: rect.right > window.innerWidth ? 'left' : this.props.horizontalPosition
    });
  };

  Tooltip.prototype.render = function render() {
    var _state = this.state,
        insert = _state.insert,
        show = _state.show;

    return _jsx('div', {
      className: 'u-TooltipFix'
    }, void 0, insert && React.createElement(MuiTooltip, _extends({
      ref: this.refTooltip
    }, this.props, {
      show: show,
      horizontalPosition: this.state.horizontalPosition,
      style: _extends({
        // "pointer-events: none" avoids interference with tooltips  that
        // are very close to or overlay other elements that have tooltips.
        pointerEvents: 'none'
      }, this.props.style)
    })));
  };

  return Tooltip;
}(React.Component);

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  style: PropTypes.object,
  show: PropTypes.bool,
  /**
   * Desired horizontal position of the tooltip.
   */
  horizontalPosition: PropTypes.oneOf(['left', 'center', 'right'])
} : {};


export default Tooltip;
//# sourceMappingURL=index.js.map
