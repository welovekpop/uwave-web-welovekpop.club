"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.style = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("material-ui/styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("material-ui/ButtonBase"));

var _colorManipulator = require("material-ui/styles/colorManipulator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copy-pasted from https://github.com/mui-org/material-ui/pull/10665

/* eslint-disable */
var style = function style(theme) {
  var commonTransitionsOptions = {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeOut
  };
  var commonTransitionsProperty = ['width', 'height', 'box-shadow', 'left', 'top', 'background-color'];
  var commonTransitions = theme.transitions.create(commonTransitionsProperty, commonTransitionsOptions);
  var colors = {
    primary: theme.palette.primary.main,
    secondary: '#bdbdbd',
    focused: '#9e9e9e',
    disabled: '#bdbdbd'
  };
  return {
    /* Styles for wrapper container */
    container: {
      position: 'relative',
      width: '100%',
      padding: '16px 0',
      '&$reverse': {
        transform: 'scaleX(-1)'
      },
      '&$vertical': {
        position: 'relative',
        height: '100%',
        padding: '0 16px',
        '&$reverse': {
          transform: 'scaleY(-1)'
        }
      }
    },

    /* Tracks styles */
    track: {
      position: 'absolute',
      transform: 'translate(0, -50%)',
      top: '50%',
      height: 2,
      '&$vertical': {
        transform: 'translate(-50%, 0)',
        left: '50%',
        top: 'initial',
        width: 2
      },
      '&$disabled': {
        backgroundColor: colors.secondary
      }
    },
    trackBefore: {
      left: 0,
      backgroundColor: colors.primary,
      transition: commonTransitions,
      '&$vertical': {
        top: 0
      }
    },
    trackAfter: {
      right: 0,
      backgroundColor: colors.secondary,
      transition: commonTransitions,
      '&$vertical': {
        bottom: 0
      },
      '&$active': {
        backgroundColor: colors.focused
      }
    },

    /* Thumb styles  */
    thumb: {
      position: 'absolute',
      zIndex: 1,
      transform: 'translate(-50%, -50%)',
      width: 12,
      height: 12,
      borderRadius: '50%',
      transition: commonTransitions,
      backgroundColor: colors.primary,
      '&:focus': {
        boxShadow: "0px 0px 0px 10px " + (0, _colorManipulator.fade)(colors.primary, 0.3)
      },
      '&$active': {
        width: 18,
        height: 18,
        '&:focus': {
          boxShadow: 'none'
        },
        '&$initial': {
          border: "2px solid " + colors.focused
        }
      },
      '&$disabled': {
        width: 10,
        height: 10,
        cursor: 'no-drop',
        backgroundColor: colors.disabled,
        '&:focus': {
          border: "2px solid " + colors.disabled,
          boxShadow: 'none'
        }
      },
      '&$initial': {
        border: "2px solid " + colors.disabled,
        backgroundColor: 'transparent',
        '&:focus': {
          border: "2px solid " + colors.focused,
          boxShadow: "0px 0px 0px 10px " + (0, _colorManipulator.fade)(colors.disabled, 0.3)
        }
      }
    },
    initial: {},
    vertical: {},
    disabled: {},
    focus: {},
    active: {},
    reverse: {}
  };
};

exports.style = style;
var KEY_CODES = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  HOME: 36,
  END: 35
};

function normalizeValue(value, min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 100;
  }

  return Math.min(Math.max(value, min), max);
}

var percentToValue = function percentToValue(_ref) {
  var percent = _ref.percent,
      max = _ref.max,
      min = _ref.min;
  return (max - min) * percent / 100 + min;
};

var roundToStep = function roundToStep(_ref2) {
  var currentValue = _ref2.currentValue,
      newValue = _ref2.newValue,
      step = _ref2.step;
  var diff = newValue - currentValue;

  if (Math.abs(diff) < step / 2) {
    return currentValue;
  }

  var remainder = diff > 0 ? step - newValue % step : -newValue % step;
  return newValue + remainder;
};

function getRelativeOffset(event) {
  var _global = global,
      scrollY = _global.scrollY,
      scrollX = _global.scrollX;
  var changedTouches = event.changedTouches,
      currentTarget = event.currentTarget;

  var _ref3 = changedTouches && changedTouches[0] || event,
      pageX = _ref3.pageX,
      pageY = _ref3.pageY;

  var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
      left = _currentTarget$getBou.left,
      top = _currentTarget$getBou.top;

  return {
    top: pageY - top - scrollY,
    left: pageX - left - scrollX
  };
}

var calculatePercent = function calculatePercent(event, vertical) {
  var currentTarget = event.currentTarget;

  var _currentTarget$getBou2 = currentTarget.getBoundingClientRect(),
      width = _currentTarget$getBou2.width,
      height = _currentTarget$getBou2.height;

  var offset = getRelativeOffset(event);
  var position = vertical ? offset.top : offset.left;
  var size = vertical ? height : width;
  return position / (size / 100);
};

var timeout = function timeout(delay) {
  return function () {
    return new Promise(function (resolve) {
      return setTimeout(resolve, delay);
    });
  };
};

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
      isMove: false,
      isActive: false,
      isFocus: false
    }, _this.touchStart = function (event) {
      if (_this.props.disabled || !_this.state.isMove) {
        return;
      }

      event.preventDefault();
    }, _this.activate = function () {
      return new Promise(function (resolve) {
        _this.setState({
          isActive: true
        }, resolve);
      });
    }, _this.deActivate = function () {
      return new Promise(function (resolve) {
        _this.setState({
          isActive: false
        }, resolve);
      });
    }, _this.handleFocus = function () {
      _this.setState({
        isFocus: true
      }, function () {
        if (_this.timeout) {
          clearTimeout(_this.timeout);
        }

        _this.activate().then(function () {
          return timeout(_this.props.theme.transitions.duration.short);
        }).then(_this.deActivate);
      });
    }, _this.handleBlur = function () {
      _this.setState({
        isFocus: false
      });
    }, _this.handleClick = function (event) {
      if (_this.props.disabled) {
        return;
      }

      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          value = _this$props.value,
          reverse = _this$props.reverse,
          vertical = _this$props.vertical;
      var percent = normalizeValue(reverse ? 100 - calculatePercent(event, vertical) : calculatePercent(event, vertical), min, max);
      var newValue = roundToStep({
        currentValue: value,
        newValue: percentToValue({
          percent: percent,
          max: max,
          min: min
        }),
        step: step
      });

      if (typeof _this.props.onChange === 'function' && value !== newValue) {
        _this.props.onChange(event, newValue);
      }
    }, _this.handleKeyboard = function (event) {
      if (_this.props.disabled) {
        return;
      }

      if (!Object.values(KEY_CODES).includes(event.keyCode)) {
        return;
      }

      event.preventDefault(); // Prevent scroll page by arrows

      var ARROW_LEFT = KEY_CODES.ARROW_LEFT,
          ARROW_UP = KEY_CODES.ARROW_UP,
          HOME = KEY_CODES.HOME,
          END = KEY_CODES.END;
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          value = _this$props2.value,
          step = _this$props2.step,
          reverse = _this$props2.reverse;

      if (event.keyCode === HOME) {
        _this.props.onChange(event, min);

        return;
      }

      if (event.keyCode === END) {
        _this.props.onChange(event, max);

        return;
      }

      var direction = [ARROW_LEFT, ARROW_UP].includes(event.keyCode) ? -1 : 1;
      var diff = step * direction * (reverse ? -1 : 1);
      var newValue = normalizeValue(value + diff, min, max);

      if (typeof _this.props.onChange === 'function' && value !== newValue) {
        _this.props.onChange(event, newValue);
      }
    }, _this.handleMouseDown = function (event) {
      if (_this.props.disabled) {
        return;
      }

      _this.setState({
        isMove: true,
        isActive: true
      });

      document.body.addEventListener('mouseup', _this.handleMouseUp);

      if (typeof _this.props.onDragEnd === 'function') {
        _this.props.onDragStart(event);
      }
    }, _this.handleMouseUp = function (event) {
      if (_this.props.disabled) {
        return;
      }

      document.body.removeEventListener('mouseup', _this.handleMouseUp);

      _this.setState({
        isMove: false,
        isActive: false
      });

      if (typeof _this.props.onDragEnd === 'function') {
        _this.props.onDragEnd(event);
      }
    }, _this.handleMouseMove = function (event) {
      if (_this.props.disabled || !_this.state.isMove) {
        return;
      }

      var _this$props3 = _this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step,
          value = _this$props3.value,
          reverse = _this$props3.reverse,
          vertical = _this$props3.vertical;
      var percent = normalizeValue(reverse ? 100 - calculatePercent(event, vertical) : calculatePercent(event, vertical), min, max);
      var newValue = roundToStep({
        currentValue: value,
        newValue: percentToValue({
          percent: percent,
          max: max,
          min: min
        }),
        step: step
      });

      if (typeof _this.props.onChange === 'function' && value !== newValue) {
        _this.props.onChange(event, newValue);
      }
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Slider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    global.addEventListener('touchstart', this.touchStart, {
      passive: false
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If the value changes, then start the animation of thumb
    if (this.props.value !== nextProps.value && !this.state.isFocus) {
      this.activate().then(timeout(this.props.theme.transitions.duration.complex)).then(this.deActivate);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    global.removeEventListener('touchstart', this.touchStart, {
      passive: false
    });
  };

  _proto.render = function render() {
    var _classNames, _classNames2, _classNames3, _classNames4;

    var _state = this.state,
        isActive = _state.isActive,
        isFocus = _state.isFocus,
        isMove = _state.isMove;
    var _props = this.props,
        Component = _props.component,
        classes = _props.classes,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        disabled = _props.disabled,
        vertical = _props.vertical,
        reverse = _props.reverse,
        other = (0, _objectWithoutProperties2.default)(_props, ["component", "classes", "min", "max", "value", "disabled", "vertical", "reverse"]);
    var ariaProps = Object.keys(other).reduce(function (props, key) {
      if (/aria-*/.test(key)) {
        var _Object$assign;

        Object.assign(props, (_Object$assign = {}, _Object$assign[key] = other[key], _Object$assign));
      }

      return props;
    }, {});
    var percent = normalizeValue((value - min) * 100 / (max - min));
    var containerClasses = (0, _classnames.default)(classes.container, (_classNames = {}, _classNames[classes.vertical] = vertical, _classNames[classes.reverse] = reverse, _classNames));
    var trackBeforeClasses = (0, _classnames.default)(classes.track, classes.trackBefore, (_classNames2 = {}, _classNames2[classes.vertical] = vertical, _classNames2[classes.disabled] = disabled, _classNames2));
    var trackAfterClasses = (0, _classnames.default)(classes.track, classes.trackAfter, (_classNames3 = {}, _classNames3[classes.vertical] = vertical, _classNames3[classes.active] = (isActive || isMove || isFocus) && !disabled, _classNames3[classes.disabled] = disabled, _classNames3));
    var thumbClasses = (0, _classnames.default)(classes.thumb, (_classNames4 = {}, _classNames4[classes.initial] = percent === 0, _classNames4[classes.active] = isActive || isMove, _classNames4[classes.disabled] = disabled, _classNames4));
    var trackBeforeSize = "calc(" + percent + "% - " + (disabled ? '7px' : '0px') + ")";
    var trackAfterSize = "calc(" + (100 - percent) + "% - " + (disabled || isActive || isMove ? '7px' : '5px') + ")";
    var thumbPosition = percent + "%";
    var inlineTrackBeforeStyles = vertical ? {
      height: trackBeforeSize
    } : {
      width: trackBeforeSize
    };
    var inlineTrackAfterStyles = vertical ? {
      height: trackAfterSize
    } : {
      width: trackAfterSize
    };
    var inlineThumbStyles = vertical ? {
      top: thumbPosition
    } : {
      left: thumbPosition
    };
    return _react.default.createElement(Component, (0, _extends2.default)({
      role: "slider",
      className: containerClasses,
      "aria-valuenow": value,
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-orientation": vertical ? 'vertical' : 'horizontal',
      onClick: this.handleClick,
      onKeyDown: this.handleKeyboard,
      onMouseMove: this.handleMouseMove,
      onTouchMove: this.handleMouseMove,
      onTouchEnd: this.handleMouseUp,
      onMouseUp: this.handleMouseUp
    }, ariaProps), (0, _jsx2.default)("div", {
      className: trackBeforeClasses,
      style: inlineTrackBeforeStyles
    }), (0, _jsx2.default)(_ButtonBase.default, {
      className: thumbClasses,
      disableRipple: true,
      style: inlineThumbStyles,
      onMouseDown: this.handleMouseDown,
      onTouchStart: this.handleMouseDown,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
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
  max: 1,
  value: 0,
  step: 0.1,
  component: 'div'
};

var _default = (0, _withStyles.default)(style, {
  name: 'MuiSlider',
  withTheme: true
})(Slider); //# sourceMappingURL=Slider.js.map


exports.default = _default;
//# sourceMappingURL=Slider.js.map
