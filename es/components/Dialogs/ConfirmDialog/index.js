import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogContent } from "material-ui/es/Dialog";
import { CircularProgress } from "material-ui/es/Progress";
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import Button from '../../Form/Button';

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "ConfirmDialog-spacer"
});

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "Button-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var ConfirmDialog =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ConfirmDialog, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ConfirmDialog.prototype;

  _proto.render = function render() {
    var _props = this.props,
        children = _props.children,
        cancelLabel = _props.cancelLabel,
        confirmLabel = _props.confirmLabel,
        className = _props.className;
    var busy = this.state.busy;
    return _jsx(Dialog, {
      className: cx('Dialog', className),
      onClose: this.handleClose,
      open: true
    }, void 0, _jsx(DialogContent, {
      className: "Dialog-body"
    }, void 0, _jsx(Form, {
      onSubmit: this.handleSubmit
    }, void 0, children, _jsx(FormGroup, {
      className: "ConfirmDialog-buttons FormGroup--noSpacing"
    }, void 0, _jsx("div", {
      className: "ConfirmDialog-button"
    }, void 0, _jsx(Button, {
      disabled: busy,
      onClick: this.handleClose
    }, void 0, cancelLabel)), _ref, _jsx("div", {
      className: "ConfirmDialog-button"
    }, void 0, _jsx(Button, {
      disabled: busy,
      onClick: this.handleConfirm
    }, void 0, busy ? _ref2 : confirmLabel))))));
  };

  return ConfirmDialog;
}(React.Component);

ConfirmDialog.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK'
};
export { ConfirmDialog as default };
ConfirmDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
