import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

import Form from '../../Form';
import FormGroup from '../../Form/Group';
import Button from '../../Form/Button';
import Loader from '../../Loader';

var _ref = _jsx('div', {
  className: 'ConfirmDialog-spacer'
});

var _ref2 = _jsx('div', {
  className: 'Button-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var ConfirmDialog = (_temp2 = _class = function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  function ConfirmDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, ConfirmDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ConfirmDialog.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        cancelLabel = _props.cancelLabel,
        confirmLabel = _props.confirmLabel,
        props = _objectWithoutProperties(_props, ['children', 'cancelLabel', 'confirmLabel']);

    var busy = this.state.busy;


    return React.createElement(
      Dialog,
      _extends({}, props, {
        onRequestClose: this.handleClose,
        open: true
      }),
      _jsx(Form, {
        onSubmit: this.handleSubmit
      }, void 0, children, _jsx(FormGroup, {
        className: 'ConfirmDialog-buttons'
      }, void 0, _jsx('div', {
        className: 'ConfirmDialog-button'
      }, void 0, _jsx(Button, {
        disabled: busy,
        onClick: this.handleClose
      }, void 0, cancelLabel)), _ref, _jsx('div', {
        className: 'ConfirmDialog-button'
      }, void 0, _jsx(Button, {
        disabled: busy,
        onClick: this.handleConfirm
      }, void 0, busy ? _ref2 : confirmLabel))))
    );
  };

  return ConfirmDialog;
}(React.Component), _class.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK'
}, _temp2);
export { ConfirmDialog as default };
ConfirmDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,

  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
