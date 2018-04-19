"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.style = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("material-ui/styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("material-ui/ButtonBase"));

var _colorManipulator = require("material-ui/styles/colorManipulator");

var _clamp = _interopRequireDefault(require("lodash/clamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copy-pasted from https://github.com/mui-org/material-ui/pull/10665

/* eslint-disable */
var style = function style(theme) {
  var commonTransitionsOptions = {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeOut
  };
  var commonTransitionsProperty = ['width', 'height', 'box-shadow', 'left', 'top'];
  var commonTransitions = theme.transitions.create(commonTransitionsProperty, commonTransitionsOptions);
  var colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.grey[400],
    focused: theme.palette.grey[500],
    disabled: theme.palette.grey[400]
  };
  return {
    /* Styles for wrapper container */
    container: {
      position: 'relative',
      width: '100%',
      margin: '10px 0',
      padding: '6px 0',
      cursor: 'pointer',
      '-webkit-tap-highlight-color': 'transparent',
      '&$disabled': {
        cursor: 'no-drop'
      },
      '&$vertical': {
        height: '100%',
        margin: '0 10px',
        padding: '0 6px'
      },
      '&$reverse': {
        transform: 'scaleX(-1)'
      },
      '&$vertical$reverse': {
        transform: 'scaleY(-1)'
      }
    },

    /* Tracks styles */
    track: {
      position: 'absolute',
      transform: 'translate(0, -50%)',
      top: '50%',
      height: 2,
      '&$focused, &$activated': {
        transition: 'none',
        backgroundColor: colors.focused
      },
      '&$disabled': {
        backgroundColor: colors.secondary
      },
      '&$vertical': {
        transform: 'translate(-50%, 0)',
        left: '50%',
        top: 'initial',
        width: 2
      },
      '&$jumped': {
        backgroundColor: colors.focused
      }
    },
    trackBefore: {
      zIndex: 1,
      left: 0,
      backgroundColor: colors.primary,
      transition: commonTransitions,
      '&$focused, &$activated, &$jumped': {
        backgroundColor: colors.primary
      }
    },
    trackAfter: {
      right: 0,
      backgroundColor: colors.secondary,
      transition: commonTransitions,
      '&$vertical': {
        bottom: 0
      }
    },

    /* Thumb styles  */
    thumb: {
      position: 'absolute',
      zIndex: 2,
      transform: 'translate(-50%, -50%)',
      width: 12,
      height: 12,
      borderRadius: '50%',
      transition: commonTransitions,
      backgroundColor: colors.primary,
      '&$focused': {
        boxShadow: "0px 0px 0px 9px " + (0, _colorManipulator.fade)(colors.primary, 0.16)
      },
      '&$activated': {
        width: 17,
        height: 17,
        transition: 'none'
      },
      '&$disabled': {
        cursor: 'no-drop',
        width: 9,
        height: 9,
        backgroundColor: colors.disabled
      },
      '&$zero': {
        border: "2px solid " + colors.disabled,
        backgroundColor: 'transparent'
      },
      '&$focused$zero': {
        border: "2px solid " + colors.focused,
        backgroundColor: (0, _colorManipulator.fade)(colors.focused, 0.34),
        boxShadow: "0px 0px 0px 9px " + (0, _colorManipulator.fade)(colors.focused, 0.34)
      },
      '&$activated$zero': {
        border: "2px solid " + colors.focused
      },
      '&$jumped': {
        width: 17,
        height: 17
      }
    },
    focused: {},
    activated: {},
    disabled: {},
    zero: {},
    vertical: {},
    reverse: {},
    jumped: {}
  };
};

exports.style = style;
var KEY_CODES = {
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40
};

function addEventListener(node, event, handler, capture) {
  node.addEventListener(event, handler, capture);
  return {
    remove: function remove() {
      node.removeEventListener(event, handler, capture);
    }
  };
}

function percentToValue(percent, min, max) {
  return (max - min) * percent / 100 + min;
}

function roundToStep(number, step) {
  return Math.round(number / step) * step;
}

function getOffset(node) {
  var _global = global,
      scrollY = _global.scrollY,
      scrollX = _global.scrollX;

  var _node$getBoundingClie = node.getBoundingClientRect(),
      left = _node$getBoundingClie.left,
      top = _node$getBoundingClie.top;

  return {
    top: top + scrollY,
    left: left + scrollX
  };
}

function getMousePosition(event) {
  if (event.changedTouches && event.changedTouches[0]) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  }

  return {
    x: event.pageX,
    y: event.pageY
  };
}

var calculatePercent = function calculatePercent(node, event, isVertical, isReverted) {
  var _node$getBoundingClie2 = node.getBoundingClientRect(),
      width = _node$getBoundingClie2.width,
      height = _node$getBoundingClie2.height;

  var _getOffset = getOffset(node),
      top = _getOffset.top,
      left = _getOffset.left;

  var _getMousePosition = getMousePosition(event),
      x = _getMousePosition.x,
      y = _getMousePosition.y;

  var value = isVertical ? y - top : x - left;
  var onePercent = (isVertical ? height : width) / 100;
  return isReverted ? 100 - (0, _clamp.default)(value / onePercent) : (0, _clamp.default)(value / onePercent);
};

function preventPageScrolling(event) {
  event.preventDefault();
}

function getAriaProps(props) {
  return Object.keys(props).reduce(function (result, key) {
    if (/aria-*/.test(key)) {
      var _Object$assign;

      Object.assign(result, (_Object$assign = {}, _Object$assign[key] = props[key], _Object$assign));
    }

    return result;
  }, {});
}

var Slider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Slider, _React$Component);

  function Slider() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      currentState: 'initial'
    }, _this.handleKeyDown = function (event) {
      var isSupportedKey = Object.values(KEY_CODES).includes(event.keyCode);

      if (!isSupportedKey) {
        return;
      }

      event.preventDefault();
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          currentValue = _this$props.value;
      var onePercent = Math.abs((max - min) / 100);
      var step = _this.props.step || onePercent;
      var value;

      switch (event.keyCode) {
        case KEY_CODES.HOME:
          value = min;
          break;

        case KEY_CODES.END:
          value = max;
          break;

        case KEY_CODES.PAGE_UP:
          value = currentValue + onePercent * 10;
          break;

        case KEY_CODES.PAGE_DOWN:
          value = currentValue - onePercent * 10;
          break;

        case KEY_CODES.ARROW_RIGHT:
        case KEY_CODES.ARROW_UP:
          value = currentValue + step;
          break;

        case KEY_CODES.ARROW_LEFT:
        case KEY_CODES.ARROW_DOWN:
          value = currentValue - step;
          break;

        default:
          break;
      }

      value = (0, _clamp.default)(value, min, max);

      _this.emitChange(event, value);
    }, _this.handleFocus = function () {
      _this.setState({
        currentState: 'focused'
      });
    }, _this.handleBlur = function () {
      _this.setState({
        currentState: 'normal'
      });
    }, _this.handleClick = function (event) {
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          vertical = _this$props2.vertical,
          reverse = _this$props2.reverse;
      var percent = calculatePercent(_this.container, event, vertical, reverse);
      var value = percentToValue(percent, min, max);

      _this.emitChange(event, value, function () {
        _this.playJumpAnimation();
      });
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        currentState: 'activated'
      });

      _this.globalMouseUpListener = addEventListener(document, 'touchend', _this.handleMouseUp);

      if (typeof _this.props.onDragEnd === 'function') {
        _this.props.onDragStart(event);
      }
    }, _this.handleMouseDown = function (event) {
      _this.setState({
        currentState: 'activated'
      });

      _this.globalMouseUpListener = addEventListener(document, 'mouseup', _this.handleMouseUp);
      _this.globalMouseMoveListener = addEventListener(document, 'mousemove', _this.handleMouseMove);

      if (typeof _this.props.onDragEnd === 'function') {
        _this.props.onDragStart(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        currentState: 'normal'
      });

      if (_this.globalMouseUpListener) {
        _this.globalMouseUpListener.remove();
      }

      if (_this.globalMouseMoveListener) {
        _this.globalMouseMoveListener.remove();
      }

      if (typeof _this.props.onDragEnd === 'function') {
        _this.props.onDragEnd(event);
      }
    }, _this.handleMouseMove = function (event) {
      var _this$props3 = _this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          vertical = _this$props3.vertical,
          reverse = _this$props3.reverse;
      var percent = calculatePercent(_this.container, event, vertical, reverse);
      var value = percentToValue(percent, min, max);

      _this.emitChange(event, value);
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  Slider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.disabled) {
      return {
        currentState: 'disabled'
      };
    }

    if (!nextProps.disabled && prevState.currentState === 'disabled') {
      return {
        currentState: 'normal'
      };
    }

    return null;
  };

  var _proto = Slider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.container) {
      this.container.addEventListener('touchstart', preventPageScrolling, {
        passive: false
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.container.removeEventListener('touchstart', preventPageScrolling, {
      passive: false
    });
  };

  _proto.emitChange = function emitChange(event, rawValue, callback) {
    var _props = this.props,
        min = _props.min,
        max = _props.max,
        previousValue = _props.value,
        onChange = _props.onChange;
    var step = this.props.step || Math.abs((max - min) / 100);
    var value = roundToStep(rawValue, step);

    if (typeof onChange === 'function' && value !== previousValue) {
      onChange(event, value);

      if (typeof callback === 'function') {
        callback();
      }
    }
  };

  _proto.calculateTrackAfterStyles = function calculateTrackAfterStyles(percent) {
    var currentState = this.state.currentState;

    switch (currentState) {
      case 'activated':
        return "calc(100% - " + (percent === 0 ? 7 : 5) + "px)";

      case 'disabled':
        return "calc(" + (100 - percent) + "% - 6px)";

      default:
        return 'calc(100% - 5px)';
    }
  };

  _proto.calculateTrackBeforeStyles = function calculateTrackBeforeStyles(percent) {
    var currentState = this.state.currentState;

    switch (currentState) {
      case 'disabled':
        return "calc(" + percent + "% - 6px)";

      default:
        return percent + "%";
    }
  };

  _proto.playJumpAnimation = function playJumpAnimation() {
    var _this2 = this;

    this.setState({
      currentState: 'jumped'
    }, function () {
      setTimeout(function () {
        _this2.setState({
          currentState: 'normal'
        });
      }, _this2.props.theme.transitions.duration.complex);
    });
  };

  _proto.render = function render() {
    var _commonClasses,
        _classNames,
        _classNames2,
        _classNames3,
        _classNames4,
        _inlineTrackBeforeSty,
        _inlineTrackAfterStyl,
        _inlineThumbStyles,
        _this3 = this;

    var currentState = this.state.currentState;
    var _props2 = this.props,
        Component = _props2.component,
        classes = _props2.classes,
        value = _props2.value,
        min = _props2.min,
        max = _props2.max,
        vertical = _props2.vertical,
        reverse = _props2.reverse,
        disabled = _props2.disabled;
    var percent = (0, _clamp.default)((value - min) * 100 / (max - min));
    var commonClasses = (_commonClasses = {}, _commonClasses[classes.disabled] = disabled, _commonClasses[classes.jumped] = !disabled && currentState === 'jumped', _commonClasses[classes.focused] = !disabled && currentState === 'focused', _commonClasses[classes.activated] = !disabled && currentState === 'activated', _commonClasses);
    var containerClasses = (0, _classnames.default)(classes.container, (_classNames = {}, _classNames[classes.vertical] = vertical, _classNames[classes.reverse] = reverse, _classNames[classes.disabled] = disabled, _classNames));
    var trackBeforeClasses = (0, _classnames.default)(classes.track, classes.trackBefore, commonClasses, (_classNames2 = {}, _classNames2[classes.vertical] = vertical, _classNames2));
    var trackAfterClasses = (0, _classnames.default)(classes.track, classes.trackAfter, commonClasses, (_classNames3 = {}, _classNames3[classes.vertical] = vertical, _classNames3));
    var thumbClasses = (0, _classnames.default)(classes.thumb, commonClasses, (_classNames4 = {}, _classNames4[classes.zero] = percent === 0, _classNames4));
    var trackProperty = vertical ? 'height' : 'width';
    var thumbProperty = vertical ? 'top' : 'left';
    var inlineTrackBeforeStyles = (_inlineTrackBeforeSty = {}, _inlineTrackBeforeSty[trackProperty] = this.calculateTrackBeforeStyles(percent), _inlineTrackBeforeSty);
    var inlineTrackAfterStyles = (_inlineTrackAfterStyl = {}, _inlineTrackAfterStyl[trackProperty] = this.calculateTrackAfterStyles(percent), _inlineTrackAfterStyl);
    var inlineThumbStyles = (_inlineThumbStyles = {}, _inlineThumbStyles[thumbProperty] = percent + "%", _inlineThumbStyles);
    var ariaProps = getAriaProps(this.props);
    return _react.default.createElement(Component, (0, _extends2.default)({
      role: "slider",
      className: containerClasses,
      "aria-valuenow": value,
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-orientation": vertical ? 'vertical' : 'horizontal',
      onClick: this.handleClick,
      ref: function ref(node) {
        _this3.container = (0, _reactDom.findDOMNode)(node);
      }
    }, ariaProps), (0, _jsx2.default)("div", {
      className: trackBeforeClasses,
      style: inlineTrackBeforeStyles
    }), (0, _jsx2.default)(_ButtonBase.default, {
      className: thumbClasses,
      disableRipple: true,
      style: inlineThumbStyles,
      onBlur: this.handleBlur,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onTouchStartCapture: this.handleTouchStart,
      onTouchMove: this.handleMouseMove,
      onKeyboardFocus: this.handleFocus
    }), (0, _jsx2.default)("div", {
      className: trackAfterClasses,
      style: inlineTrackAfterStyles
    }));
  };

  return Slider;
}(_react.default.Component);

Slider.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: _propTypes.default.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: _propTypes.default.number,

  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback function that is fired when the slide has stopped moving.
   */
  onDragEnd: _propTypes.default.func,

  /**
   * Callback function that is fired when the slider has begun to move.
   */
  onDragStart: _propTypes.default.func,

  /**
   * If `true`, the slider will be reversed.
   */
  reverse: _propTypes.default.bool,

  /**
   * The granularity the slider can step through values.
   */
  step: _propTypes.default.number,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The value of the slider.
   */
  value: _propTypes.default.number,

  /**
   * If `true`, the slider will be vertical.
   */
  vertical: _propTypes.default.bool
} : {};
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  component: 'div'
};

var _default = (0, _withStyles.default)(style, {
  name: 'MuiSlider',
  withTheme: true
})(Slider); //# sourceMappingURL=Slider.js.map


exports.default = _default;
//# sourceMappingURL=Slider.js.map
