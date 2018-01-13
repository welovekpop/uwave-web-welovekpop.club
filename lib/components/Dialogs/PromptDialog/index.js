'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _Form = require('../../Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TextField = require('../../Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../../Form/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'Button-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
}));

var PromptDialog = function (_React$Component) {
  (0, _inherits3.default)(PromptDialog, _React$Component);

  function PromptDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PromptDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
        props = (0, _objectWithoutProperties3.default)(_props, ['children', 'icon', 'inputType', 'placeholder', 'submitLabel', 'bodyClassName', 'contentClassName', 'titleClassName']);

    var _state = this.state,
        busy = _state.busy,
        value = _state.value;

    return _react2.default.createElement(_Dialog2.default, (0, _extends3.default)({}, props, {
      contentClassName: (0, _classnames2.default)('Dialog', contentClassName),
      bodyClassName: (0, _classnames2.default)('Dialog-body', bodyClassName),
      titleClassName: (0, _classnames2.default)('Dialog-title', titleClassName),
      onRequestClose: this.handleClose
    }), (0, _jsx3.default)(_Form2.default, {
      onSubmit: this.handleSubmit
    }, void 0, children, (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refInput,
      autoFocus: true,
      type: inputType,
      placeholder: placeholder,
      icon: icon,
      value: value,
      onChange: this.handleInputChange
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      disabled: busy
    }, void 0, busy ? _ref : submitLabel))));
  };

  return PromptDialog;
}(_react2.default.Component);

PromptDialog.defaultProps = {
  submitLabel: 'OK',
  inputType: 'text',
  open: true
};
exports.default = PromptDialog;

PromptDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  submitLabel: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  value: _propTypes2.default.string,
  open: _propTypes2.default.bool,

  bodyClassName: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  titleClassName: _propTypes2.default.string,

  onSubmit: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
