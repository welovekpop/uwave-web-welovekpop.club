"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _PowerSettingsNew = _interopRequireDefault(require("@material-ui/icons/PowerSettingsNew"));

var _ConfirmDialog = _interopRequireDefault(require("../Dialogs/ConfirmDialog"));

var _Group = _interopRequireDefault(require("../Form/Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_PowerSettingsNew.default, {
  className: "LogoutButton-icon"
});

var LogoutButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(LogoutButton, _React$Component);

  function LogoutButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      showDialog: false
    }, _this.handleOpen = function () {
      _this.setState({
        showDialog: true
      });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function () {
      _this.props.onLogout();

      _this.closeDialog();
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = LogoutButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      showDialog: false
    });
  };

  _proto.render = function render() {
    var t = this.props.t;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Button.default, {
      className: "LogoutButton",
      onClick: this.handleOpen
    }, void 0, _ref, t('settings.logout')), this.state.showDialog && (0, _jsx2.default)(_ConfirmDialog.default, {
      title: t('dialogs.logout.title'),
      confirmLabel: t('dialogs.logout.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, (0, _jsx2.default)(_Group.default, {}, void 0, t('dialogs.logout.confirm'))));
  };

  return LogoutButton;
}(_react.default.Component);

LogoutButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onLogout: _propTypes.default.func.isRequired
} : {};

var _default = enhance(LogoutButton); //# sourceMappingURL=LogoutButton.js.map


exports.default = _default;
//# sourceMappingURL=LogoutButton.js.map
