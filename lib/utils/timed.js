'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function (Component) {
    var Timed = function (_React$Component) {
      (0, _inherits3.default)(Timed, _React$Component);

      function Timed() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Timed);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
          currentTime: _this.getCurrentTime()
        }, _this.tick = function () {
          _this.setState({
            currentTime: _this.getCurrentTime()
          });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      Timed.prototype.componentDidMount = function componentDidMount() {
        this.context.timerCallbacks.push(this.tick);
      };

      Timed.prototype.componentWillUnmount = function componentWillUnmount() {
        var timerCallbacks = this.context.timerCallbacks;

        var index = timerCallbacks.indexOf(this.tick);
        if (index !== -1) {
          timerCallbacks.splice(index, 1);
        }
      };

      Timed.prototype.getCurrentTime = function getCurrentTime() {
        return (0, _timeSelectors.currentTimeSelector)(this.context.store.getState());
      };

      Timed.prototype.render = function render() {
        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          currentTime: this.state.currentTime
        }));
      };

      return Timed;
    }(_react2.default.Component);

    Timed.displayName = (0, _wrapDisplayName2.default)(Component, 'Timed');
    Timed.contextTypes = {
      store: _propTypes2.default.object.isRequired,
      timerCallbacks: _propTypes2.default.arrayOf(_propTypes2.default.func).isRequired
    };

    return Timed;
  };
};

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _timeSelectors = require('../selectors/timeSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=timed.js.map
