"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ConfirmDialog-spacer"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Button-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var ConfirmDialog =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ConfirmDialog, _React$Component);

  function ConfirmDialog() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
    }, _this.handleConfirm = function (event) {
      event.preventDefault();

      var promise = _this.props.onConfirm();

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
    }, _this.handleClose = function (event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      _this.props.onCancel();
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ConfirmDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        cancelLabel = _this$props.cancelLabel,
        confirmLabel = _this$props.confirmLabel,
        className = _this$props.className;
    var busy = this.state.busy;
    return (0, _jsx2.default)(_Dialog.default, {
      className: (0, _classnames.default)('Dialog', className),
      onClose: this.handleClose,
      open: true
    }, void 0, (0, _jsx2.default)(_DialogContent.default, {
      className: "Dialog-body"
    }, void 0, (0, _jsx2.default)(_Form.default, {
      onSubmit: this.handleSubmit
    }, void 0, children, (0, _jsx2.default)(_Group.default, {
      className: "ConfirmDialog-buttons FormGroup--noSpacing"
    }, void 0, (0, _jsx2.default)("div", {
      className: "ConfirmDialog-button"
    }, void 0, (0, _jsx2.default)(_Button.default, {
      disabled: busy,
      onClick: this.handleClose
    }, void 0, cancelLabel)), _ref, (0, _jsx2.default)("div", {
      className: "ConfirmDialog-button"
    }, void 0, (0, _jsx2.default)(_Button.default, {
      disabled: busy,
      onClick: this.handleConfirm
    }, void 0, busy ? _ref2 : confirmLabel))))));
  };

  return ConfirmDialog;
}(_react.default.Component);

exports.default = ConfirmDialog;
ConfirmDialog.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK'
};
ConfirmDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  confirmLabel: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  onConfirm: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
