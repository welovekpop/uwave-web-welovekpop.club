"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _wrapDisplayName = _interopRequireDefault(require("recompose/wrapDisplayName"));

var _timeSelectors = require("../selectors/timeSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return function (Component) {
    var Timed =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(Timed, _React$Component);

      function Timed() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
          currentTime: _this.getCurrentTime()
        }, _this.tick = function () {
          _this.setState({
            currentTime: _this.getCurrentTime()
          });
        }, _temp) || (0, _assertThisInitialized2.default)(_this);
      }

      var _proto = Timed.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.context.timerCallbacks.add(this.tick);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.context.timerCallbacks.remove(this.tick);
      };

      _proto.getCurrentTime = function getCurrentTime() {
        return (0, _timeSelectors.currentTimeSelector)(this.context.store.getState());
      };

      _proto.render = function render() {
        return _react.default.createElement(Component, (0, _extends2.default)({}, this.props, {
          currentTime: this.state.currentTime
        }));
      };

      return Timed;
    }(_react.default.Component);

    Timed.displayName = (0, _wrapDisplayName.default)(Component, 'Timed');
    Timed.contextTypes = {
      store: _propTypes.default.object.isRequired,
      timerCallbacks: _propTypes.default.shape({
        add: _propTypes.default.func,
        remove: _propTypes.default.func
      }).isRequired
    };
    return Timed;
  };
} //# sourceMappingURL=timed.js.map
//# sourceMappingURL=timed.js.map
