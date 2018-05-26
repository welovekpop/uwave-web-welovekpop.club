"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ModeEdit = _interopRequireDefault(require("@material-ui/icons/ModeEdit"));

var _PromptDialog = _interopRequireDefault(require("../Dialogs/PromptDialog"));

var _DialogCloseAnimation = _interopRequireDefault(require("../DialogCloseAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {
  className: "ChangeUsernameButton-icon"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {
  nativeColor: "#777"
});

var ChangeUsernameButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ChangeUsernameButton, _React$Component);

  function ChangeUsernameButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      changingUsername: false
    }, _this.handleOpen = function () {
      _this.setState({
        changingUsername: true
      });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      if (name === _this.props.initialUsername) {
        _this.closeDialog();

        return null;
      }

      return _this.props.onChangeUsername(name).then(_this.closeDialog.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ChangeUsernameButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      changingUsername: false
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        initialUsername = _this$props.initialUsername;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_IconButton.default, {
      className: "ChangeUsernameButton",
      onClick: this.handleOpen
    }, void 0, _ref), (0, _jsx2.default)(_DialogCloseAnimation.default, {
      delay: 450
    }, void 0, this.state.changingUsername ? (0, _jsx2.default)(_PromptDialog.default, {
      title: t('settings.profile.username.change'),
      submitLabel: t('settings.profile.username.save'),
      icon: _ref2,
      value: initialUsername,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }) : null));
  };

  return ChangeUsernameButton;
}(_react.default.Component);

ChangeUsernameButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onChangeUsername: _propTypes.default.func.isRequired,
  initialUsername: _propTypes.default.string
} : {};

var _default = enhance(ChangeUsernameButton);

exports.default = _default;
//# sourceMappingURL=ChangeUsernameButton.js.map
