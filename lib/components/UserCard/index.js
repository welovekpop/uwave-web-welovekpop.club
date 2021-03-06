"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _UserCard = _interopRequireDefault(require("./UserCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCardWrapper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(UserCardWrapper, _React$Component);

  function UserCardWrapper() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      positionDiffX: 0,
      positionDiffY: 0
    }, _this.refContainer = function (container) {
      _this.container = container;

      if (_this.shouldFit && container) {
        _this.fitInsideWindow();
      }
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = UserCardWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.shouldFit = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.shouldFit = true;
  };

  _proto.fitInsideWindow = function fitInsideWindow() {
    if (!this.container) {
      return;
    }

    var card = this.container.firstChild;
    var rect = card.getBoundingClientRect();
    var offsetBottom = window.innerHeight - rect.bottom;

    if (offsetBottom < 0) {
      this.setState({
        positionDiffY: offsetBottom - 1
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onClose = _this$props.onClose,
        position = _this$props.position,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["onClose", "position"]);
    var _this$state = this.state,
        positionDiffX = _this$state.positionDiffX,
        positionDiffY = _this$state.positionDiffY;
    return (0, _jsx2.default)(_Modal.default, {
      open: true,
      BackdropProps: {
        invisible: true
      },
      onClose: onClose
    }, void 0, _react.default.createElement("div", {
      style: {
        position: 'absolute',
        left: position.x + positionDiffX,
        top: position.y + positionDiffY
      },
      ref: this.refContainer
    }, (0, _jsx2.default)("div", {
      className: "UserCardWrapper"
    }, void 0, _react.default.createElement(_UserCard.default, props))));
  };

  return UserCardWrapper;
}(_react.default.Component);

UserCardWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  onClose: _propTypes.default.func.isRequired,
  position: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  }).isRequired
} : {};
var _default = UserCardWrapper;
exports.default = _default;
//# sourceMappingURL=index.js.map
