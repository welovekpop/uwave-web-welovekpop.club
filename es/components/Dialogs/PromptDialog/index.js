import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';
import Loader from '../../Loader';

var _ref = _jsx('div', {
  className: 'Button-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var PromptDialog = function (_React$Component) {
  _inherits(PromptDialog, _React$Component);

  function PromptDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, PromptDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      busy: false,
      value: _this.props.value || ''
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      var promise = _this.props.onSubmit(_this.input.value);
      if (promise && promise.then) {
        _this.setState({ busy: true });
        var onDone = function onDone() {
          _this.setState({ busy: false });
        };
        promise.then(onDone, onDone);
      }
    }, _this.handleClose = function () {
      _this.props.onCancel();
    }, _this.handleInputChange = function (event) {
      _this.setState({ value: event.target.value });
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PromptDialog.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        icon = _props.icon,
        inputType = _props.inputType,
        placeholder = _props.placeholder,
        submitLabel = _props.submitLabel,
        bodyClassName = _props.bodyClassName,
        contentClassName = _props.contentClassName,
        titleClassName = _props.titleClassName,
        props = _objectWithoutProperties(_props, ['children', 'icon', 'inputType', 'placeholder', 'submitLabel', 'bodyClassName', 'contentClassName', 'titleClassName']);

    var _state = this.state,
        busy = _state.busy,
        value = _state.value;


    return React.createElement(
      Dialog,
      _extends({}, props, {
        contentClassName: cx('Dialog', contentClassName),
        bodyClassName: cx('Dialog-body', bodyClassName),
        titleClassName: cx('Dialog-title', titleClassName),
        onRequestClose: this.handleClose,
        open: true
      }),
      _jsx(Form, {
        onSubmit: this.handleSubmit
      }, void 0, children, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
        ref: this.refInput,
        autoFocus: true,
        type: inputType,
        placeholder: placeholder,
        icon: icon,
        value: value,
        onChange: this.handleInputChange
      })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
        disabled: busy
      }, void 0, busy ? _ref : submitLabel)))
    );
  };

  return PromptDialog;
}(React.Component);

PromptDialog.defaultProps = {
  submitLabel: 'OK',
  inputType: 'text'
};
export default PromptDialog;
PromptDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  submitLabel: PropTypes.string,
  inputType: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,

  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,

  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
