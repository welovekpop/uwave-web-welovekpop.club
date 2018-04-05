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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PowerSettingsNew = require('material-ui-icons/PowerSettingsNew');

var _PowerSettingsNew2 = _interopRequireDefault(_PowerSettingsNew);

var _ConfirmDialog = require('../Dialogs/ConfirmDialog');

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

var _Group = require('../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_PowerSettingsNew2.default, {
  className: 'LogoutButton-icon'
});

var LogoutButton = function (_React$Component) {
  (0, _inherits3.default)(LogoutButton, _React$Component);

  function LogoutButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogoutButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      showDialog: false
    }, _this.handleOpen = function () {
      _this.setState({ showDialog: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function () {
      _this.props.onLogout();
      _this.closeDialog();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  LogoutButton.prototype.closeDialog = function closeDialog() {
    this.setState({ showDialog: false });
  };

  LogoutButton.prototype.render = function render() {
    var t = this.props.t;

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      className: 'LogoutButton',
      onClick: this.handleOpen
    }, void 0, _ref, t('settings.logout')), this.state.showDialog && (0, _jsx3.default)(_ConfirmDialog2.default, {
      title: t('dialogs.logout.title'),
      confirmLabel: t('dialogs.logout.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, (0, _jsx3.default)(_Group2.default, {}, void 0, t('dialogs.logout.confirm'))));
  };

  return LogoutButton;
}(_react2.default.Component);

LogoutButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(LogoutButton);
//# sourceMappingURL=LogoutButton.js.map
//# sourceMappingURL=LogoutButton.js.map
