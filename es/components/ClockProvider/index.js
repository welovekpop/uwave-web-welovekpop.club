import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTimer, stopTimer } from '../../actions/TickerActionCreators';
var mapDispatchToProps = {
  createTimer: createTimer,
  stopTimer: stopTimer
};
var enhance = connect(null, mapDispatchToProps);

var ClockProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ClockProvider, _React$Component);

  function ClockProvider() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      callbacks: []
    }, _this.timerCallbacks = {
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ClockProvider.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      timerCallbacks: this.timerCallbacks
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Start the clock! üWave stores the current time in the application state
    // primarily to make sure that different timers in the UI update simultaneously.
    this.props.createTimer(function () {
      _this2.state.callbacks.forEach(function (cb) {
        return cb();
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.stopTimer();
  };

  _proto.render = function render() {
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
