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

var _reactRedux = require('react-redux');

var _TickerActionCreators = require('../../actions/TickerActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  createTimer: _TickerActionCreators.createTimer,
  stopTimer: _TickerActionCreators.stopTimer
};

var enhance = (0, _reactRedux.connect)(null, mapDispatchToProps);

var ClockProvider = function (_React$Component) {
  (0, _inherits3.default)(ClockProvider, _React$Component);

  function ClockProvider() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { callbacks: [] }, _this.timerCallbacks = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
}(_react2.default.Component);

ClockProvider.childContextTypes = {
  timerCallbacks: _propTypes2.default.shape({
    add: _propTypes2.default.func,
    remove: _propTypes2.default.func
  })
};
ClockProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  createTimer: _propTypes2.default.func.isRequired,
  stopTimer: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = enhance(ClockProvider);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
