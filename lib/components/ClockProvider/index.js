"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _TickerActionCreators = require("../../actions/TickerActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  createTimer: _TickerActionCreators.createTimer,
  stopTimer: _TickerActionCreators.stopTimer
};
var enhance = (0, _reactRedux.connect)(null, mapDispatchToProps);

var ClockProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ClockProvider, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ClockProvider.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      timerCallbacks: this.timerCallbacks
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this; // Start the clock! üWave stores the current time in the application state
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
}(_react.default.Component);

ClockProvider.childContextTypes = {
  timerCallbacks: _propTypes.default.shape({
    add: _propTypes.default.func,
    remove: _propTypes.default.func
  })
};
ClockProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  createTimer: _propTypes.default.func.isRequired,
  stopTimer: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired
} : {};

var _default = enhance(ClockProvider); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
