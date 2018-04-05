'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Progress = require('material-ui/Progress');

var _Form = require('../../Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _Button = require('../../Form/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'ConfirmDialog-spacer'
});

var _ref2 = (0, _jsx3.default)('div', {
  className: 'Button-loading'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  size: '100%'
}));

var ConfirmDialog = function (_React$Component) {
  (0, _inherits3.default)(ConfirmDialog, _React$Component);

  function ConfirmDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      busy: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
    }, _this.handleConfirm = function (event) {
      event.preventDefault();
      var promise = _this.props.onConfirm();
      if (promise && promise.then) {
        _this.setState({ busy: true });
        var onDone = function onDone() {
          _this.setState({ busy: false });
        };
        promise.then(onDone, onDone);
      }
    }, _this.handleClose = function (event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      _this.props.onCancel();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ConfirmDialog.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        cancelLabel = _props.cancelLabel,
        confirmLabel = _props.confirmLabel,
        className = _props.className;
    var busy = this.state.busy;

    return (0, _jsx3.default)(_Dialog2.default, {
      className: (0, _classnames2.default)('Dialog', className),
      onClose: this.handleClose,
      open: true
    }, void 0, (0, _jsx3.default)(_Dialog.DialogContent, {
      className: 'Dialog-body'
    }, void 0, (0, _jsx3.default)(_Form2.default, {
      onSubmit: this.handleSubmit
    }, void 0, children, (0, _jsx3.default)(_Group2.default, {
      className: 'ConfirmDialog-buttons FormGroup--noSpacing'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'ConfirmDialog-button'
    }, void 0, (0, _jsx3.default)(_Button2.default, {
      disabled: busy,
      onClick: this.handleClose
    }, void 0, cancelLabel)), _ref, (0, _jsx3.default)('div', {
      className: 'ConfirmDialog-button'
    }, void 0, (0, _jsx3.default)(_Button2.default, {
      disabled: busy,
      onClick: this.handleConfirm
    }, void 0, busy ? _ref2 : confirmLabel))))));
  };

  return ConfirmDialog;
}(_react2.default.Component);

ConfirmDialog.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK'
};
exports.default = ConfirmDialog;

ConfirmDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  confirmLabel: _propTypes2.default.string,
  cancelLabel: _propTypes2.default.string,

  onConfirm: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
