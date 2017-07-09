'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userCardable;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserCard = require('../components/UserCard');

var _UserCard2 = _interopRequireDefault(_UserCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function userCardable() {
  return function (Component) {
    var CardableComponent = function (_React$Component) {
      (0, _inherits3.default)(CardableComponent, _React$Component);

      function CardableComponent() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CardableComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      CardableComponent.prototype.render = function render() {
        var _state = this.state,
            open = _state.open,
            position = _state.position,
            user = _state.user;

        return _react2.default.createElement('div', { ref: this.refContainer }, open && (0, _jsx3.default)(_UserCard2.default, {
          user: user,
          position: position,
          onClose: this.handleClose
        }), _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          openUserCard: this.handleOpen,
          closeUserCard: this.handleClose
        })));
      };

      return CardableComponent;
    }(_react2.default.Component);

    return CardableComponent;
  };
}
//# sourceMappingURL=userCardable.js.map
//# sourceMappingURL=userCardable.js.map
