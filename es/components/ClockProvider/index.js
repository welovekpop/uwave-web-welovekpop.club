import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTimer, stopTimer } from '../../actions/TickerActionCreators';

var mapDispatchToProps = {
  createTimer: createTimer,
  stopTimer: stopTimer
};

var enhance = connect(null, mapDispatchToProps);

var ClockProvider = function (_React$Component) {
  _inherits(ClockProvider, _React$Component);

  function ClockProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, ClockProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { callbacks: [] }, _this.timerCallbacks = {
      add: function add(cb) {
        return _this.setState(function (s) {
          return {
            callbacks: s.callbacks.concat(cb)
          };
        });
      },
      remove: function remove(cb) {
        return _this.setState(function (s) {
          return {
            callbacks: s.callbacks.filter(function (cb1) {
              return cb1 !== cb;
            })
          };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ClockProvider.prototype.getChildContext = function getChildContext() {
    return {
      timerCallbacks: this.timerCallbacks
    };
  };

  ClockProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Start the clock! üWave stores the current time in the application state
    // primarily to make sure that different timers in the UI update simultaneously.
    this.props.createTimer(function () {
      _this2.state.callbacks.forEach(function (cb) {
        return cb();
      });
    });
  };

  ClockProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.stopTimer();
  };

  ClockProvider.prototype.render = function render() {
    return this.props.children;
  };

  return ClockProvider;
}(React.Component);

ClockProvider.childContextTypes = {
  timerCallbacks: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func
  })
};
ClockProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  createTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
} : {};


export default enhance(ClockProvider);
//# sourceMappingURL=index.js.map
