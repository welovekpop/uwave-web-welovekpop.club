import _extends from "@babel/runtime/helpers/builtin/extends";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { currentTimeSelector } from '../selectors/timeSelectors';
export default function () {
  return function (Component) {
    var Timed =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Timed, _React$Component);

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
        }, _temp) || _assertThisInitialized(_this);
      }

      var _proto = Timed.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.context.timerCallbacks.add(this.tick);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.context.timerCallbacks.remove(this.tick);
      };

      _proto.getCurrentTime = function getCurrentTime() {
        return currentTimeSelector(this.context.store.getState());
      };

      _proto.render = function render() {
        return React.createElement(Component, _extends({}, this.props, {
          currentTime: this.state.currentTime
        }));
      };

      return Timed;
    }(React.Component);

    Timed.displayName = wrapDisplayName(Component, 'Timed');
    Timed.contextTypes = {
      store: PropTypes.object.isRequired,
      timerCallbacks: PropTypes.shape({
        add: PropTypes.func,
        remove: PropTypes.func
      }).isRequired
    };
    return Timed;
  };
}
//# sourceMappingURL=timed.js.map
