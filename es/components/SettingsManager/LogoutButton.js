import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import FlatButton from 'material-ui/FlatButton';
import LogoutIcon from 'material-ui/svg-icons/action/power-settings-new';
import ConfirmDialog from '../Dialogs/ConfirmDialog';
import FormGroup from '../Form/Group';

var _ref = _jsx(LogoutIcon, {});

var LogoutButton = function (_React$Component) {
  _inherits(LogoutButton, _React$Component);

  function LogoutButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, LogoutButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      showDialog: false
    }, _this.handleOpen = function () {
      _this.setState({ showDialog: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function () {
      _this.props.onLogout();
      _this.closeDialog();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LogoutButton.prototype.closeDialog = function closeDialog() {
    this.setState({ showDialog: false });
  };

  LogoutButton.prototype.render = function render() {
    var t = this.props.t;

    return _jsx(FlatButton, {
      label: t('settings.logout'),
      labelPosition: 'after',
      icon: _ref,
      onClick: this.handleOpen
    }, void 0, this.state.showDialog && _jsx(ConfirmDialog, {
      title: t('dialogs.logout.title'),
      confirmLabel: t('dialogs.logout.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, _jsx(FormGroup, {}, void 0, t('dialogs.logout.confirm'))));
  };

  return LogoutButton;
}(React.Component);

LogoutButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
} : {};


export default translate()(LogoutButton);
//# sourceMappingURL=LogoutButton.js.map
