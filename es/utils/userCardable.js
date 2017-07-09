import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import UserCard from '../components/UserCard';

export default function userCardable() {
  return function (Component) {
    var CardableComponent = function (_React$Component) {
      _inherits(CardableComponent, _React$Component);

      function CardableComponent() {
        var _temp, _this, _ret;

        _classCallCheck(this, CardableComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
          open: false,
          user: null,
          position: null
        }, _this.handleOpen = function (user) {
          var pos = _this.container.getBoundingClientRect();
          _this.setState({
            open: true,
            user: user,
            position: {
              x: pos.left,
              y: pos.top
            }
          });
        }, _this.handleClose = function () {
          _this.setState({ open: false });
        }, _this.refContainer = function (container) {
          _this.container = container;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      CardableComponent.prototype.render = function render() {
        var _state = this.state,
            open = _state.open,
            position = _state.position,
            user = _state.user;

        return React.createElement(
          'div',
          { ref: this.refContainer },
          open && _jsx(UserCard, {
            user: user,
            position: position,
            onClose: this.handleClose
          }),
          React.createElement(Component, _extends({}, this.props, {
            openUserCard: this.handleOpen,
            closeUserCard: this.handleClose
          }))
        );
      };

      return CardableComponent;
    }(React.Component);

    return CardableComponent;
  };
}
//# sourceMappingURL=userCardable.js.map
