import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle, DialogContent } from "material-ui/es/Dialog";
import { CircularProgress } from "material-ui/es/Progress";
import uniqueId from 'lodash/uniqueId';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "Button-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var PromptDialog =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PromptDialog, _React$Component);

  function PromptDialog() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false,
      value: _this.props.value || ''
    }, _this.title = uniqueId('title'), _this.handleSubmit = function (event) {
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PromptDialog.prototype;

  _proto.render = function render() {
    var _props = this.props,
        children = _props.children,
        icon = _props.icon,
        inputType = _props.inputType,
        placeholder = _props.placeholder,
        submitLabel = _props.submitLabel,
        title = _props.title,
        bodyClassName = _props.bodyClassName,
        contentClassName = _props.contentClassName,
        titleClassName = _props.titleClassName,
        props = _objectWithoutProperties(_props, ["children", "icon", "inputType", "placeholder", "submitLabel", "title", "bodyClassName", "contentClassName", "titleClassName"]);

    var _state = this.state,
        busy = _state.busy,
        value = _state.value;
    return React.createElement(Dialog, _extends({
      fullWidth: true
    }, props, {
      classes: {
        paper: cx('Dialog', contentClassName)
      },
      onClose: this.handleClose,
      "aria-labelledby": this.title
    }), _jsx(DialogTitle, {
      className: cx('Dialog-title', titleClassName),
      id: this.title
    }, void 0, title), _jsx(DialogContent, {
      className: cx('Dialog-body', bodyClassName)
    }, void 0, _jsx(Form, {
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
    }, void 0, busy ? _ref : submitLabel)))));
  };

  return PromptDialog;
}(React.Component);

PromptDialog.defaultProps = {
  submitLabel: 'OK',
  inputType: 'text',
  open: true
};
export { PromptDialog as default };
PromptDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  submitLabel: PropTypes.string,
  inputType: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
