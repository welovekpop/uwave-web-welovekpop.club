"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TextField, _React$Component);

  function TextField() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = TextField.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        icon = _this$props.icon,
        className = _this$props.className,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["type", "icon", "className"]);
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('TextField', className)
    }, void 0, _react.default.createElement("input", (0, _extends2.default)({
      ref: this.refInput,
      className: "TextField-input",
      type: type
    }, props)), (0, _jsx2.default)("div", {
      className: "TextField-icon"
    }, void 0, icon));
  };

  (0, _createClass2.default)(TextField, [{
    key: "value",
    get: function get() {
      return this.input.value;
    }
  }]);
  return TextField;
}(_react.default.Component);

exports.default = TextField;
TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  type: _propTypes.default.string,
  icon: _propTypes.default.element
} : {};
//# sourceMappingURL=TextField.js.map
