"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _TextField = _interopRequireDefault(require("../../Form/TextField"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Button-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var PromptDialog =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PromptDialog, _React$Component);

  function PromptDialog() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false,
      value: _this.props.value || ''
    }, _this.title = (0, _uniqueId.default)('title'), _this.handleSubmit = function (event) {
      event.preventDefault();

      var promise = _this.props.onSubmit(_this.input.value);

      if (promise && promise.then) {
        _this.setState({
          busy: true
        });

        var onDone = function onDone() {
          _this.setState({
            busy: false
          });
        };

        promise.then(onDone, onDone);
      }
    }, _this.handleClose = function () {
      _this.props.onCancel();
    }, _this.handleInputChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = PromptDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        icon = _this$props.icon,
        inputType = _this$props.inputType,
        placeholder = _this$props.placeholder,
        submitLabel = _this$props.submitLabel,
        title = _this$props.title,
        bodyClassName = _this$props.bodyClassName,
        contentClassName = _this$props.contentClassName,
        titleClassName = _this$props.titleClassName,
        onSubmit = _this$props.onSubmit,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "icon", "inputType", "placeholder", "submitLabel", "title", "bodyClassName", "contentClassName", "titleClassName", "onSubmit"]);
    var _this$state = this.state,
        busy = _this$state.busy,
        value = _this$state.value;
    return _react.default.createElement(_Dialog.default, (0, _extends2.default)({
      fullWidth: true
    }, props, {
      classes: {
        paper: (0, _classnames.default)('Dialog', contentClassName)
      },
      onClose: this.handleClose,
      "aria-labelledby": this.title
    }), (0, _jsx2.default)(_DialogTitle.default, {
      className: (0, _classnames.default)('Dialog-title', titleClassName),
      id: this.title
    }, void 0, title), (0, _jsx2.default)(_DialogContent.default, {
      className: (0, _classnames.default)('Dialog-body', bodyClassName)
    }, void 0, (0, _jsx2.default)(_Form.default, {
      onSubmit: this.handleSubmit
    }, void 0, children, (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refInput,
      autoFocus: true,
      type: inputType,
      placeholder: placeholder,
      icon: icon,
      value: value,
      onChange: this.handleInputChange
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
      disabled: busy
    }, void 0, busy ? _ref : submitLabel)))));
  };

  return PromptDialog;
}(_react.default.Component);

exports.default = PromptDialog;
PromptDialog.defaultProps = {
  submitLabel: 'OK',
  inputType: 'text',
  open: true
};
PromptDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  placeholder: _propTypes.default.string,
  submitLabel: _propTypes.default.string,
  inputType: _propTypes.default.string,
  icon: _propTypes.default.node,
  value: _propTypes.default.string,
  title: _propTypes.default.string,
  open: _propTypes.default.bool,
  bodyClassName: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  titleClassName: _propTypes.default.string,
  onSubmit: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
