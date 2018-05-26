"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userCardable;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _UserCard = _interopRequireDefault(require("../components/UserCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function userCardable() {
  return function (Component) {
    var CardableComponent =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(CardableComponent, _React$Component);

      function CardableComponent() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
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
          _this.setState({
            open: false
          });
        }, _this.refContainer = function (container) {
          _this.container = container;
        }, _temp) || (0, _assertThisInitialized2.default)(_this);
      }

      var _proto = CardableComponent.prototype;

      _proto.render = function render() {
        var _this$state = this.state,
            open = _this$state.open,
            position = _this$state.position,
            user = _this$state.user;
        return _react.default.createElement("div", {
          ref: this.refContainer
        }, open && (0, _jsx2.default)(_UserCard.default, {
          user: user,
          position: position,
          onClose: this.handleClose
        }), _react.default.createElement(Component, (0, _extends2.default)({}, this.props, {
          openUserCard: this.handleOpen,
          closeUserCard: this.handleClose
        })));
      };

      return CardableComponent;
    }(_react.default.Component);

    return CardableComponent;
  };
}
//# sourceMappingURL=userCardable.js.map
