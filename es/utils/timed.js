import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { currentTimeSelector } from '../selectors/timeSelectors';

export default function () {
  return function (Component) {
    var Timed = function (_React$Component) {
      _inherits(Timed, _React$Component);

      function Timed() {
        var _temp, _this, _ret;

        _classCallCheck(this, Timed);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
          currentTime: _this.getCurrentTime()
        }, _this.tick = function () {
          _this.setState({
            currentTime: _this.getCurrentTime()
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
        return currentTimeSelector(this.context.store.getState());
      };

      Timed.prototype.render = function render() {
        return React.createElement(Component, _extends({}, this.props, {
          currentTime: this.state.currentTime
        }));
      };

      return Timed;
    }(React.Component);

    Timed.displayName = wrapDisplayName(Component, 'Timed');
    Timed.contextTypes = {
      store: PropTypes.object.isRequired,
      timerCallbacks: PropTypes.arrayOf(PropTypes.func).isRequired
    };

    return Timed;
  };
}
//# sourceMappingURL=timed.js.map
