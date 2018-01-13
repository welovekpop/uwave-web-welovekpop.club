import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import PromptDialog from '../Dialogs/PromptDialog';
import DialogCloseAnimation from '../DialogCloseAnimation';

var changeNameButtonStyle = {
  padding: 2,
  height: 28,
  width: 28,
  marginLeft: 5,
  verticalAlign: 'bottom'
};

var changeNameIconStyle = {
  width: 24,
  height: 24,
  padding: 2
};

var _ref = _jsx(EditIcon, {
  color: '#777',
  hoverColor: '#fff'
});

var _ref2 = _jsx(EditIcon, {
  color: '#777'
});

var ChangeUsernameButton = function (_React$Component) {
  _inherits(ChangeUsernameButton, _React$Component);

  function ChangeUsernameButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, ChangeUsernameButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      changingUsername: false
    }, _this.handleOpen = function () {
      _this.setState({ changingUsername: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      if (name === _this.props.initialUsername) {
        _this.closeDialog();
        return null;
      }
      return _this.props.onChangeUsername(name).then(_this.closeDialog.bind(_this));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ChangeUsernameButton.prototype.closeDialog = function closeDialog() {
    this.setState({ changingUsername: false });
  };

  ChangeUsernameButton.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        initialUsername = _props.initialUsername;

    return _jsx('span', {}, void 0, _jsx(IconButton, {
      style: changeNameButtonStyle,
      iconStyle: changeNameIconStyle,
      onClick: this.handleOpen
    }, void 0, _ref), _jsx(DialogCloseAnimation, {
      delay: 450
    }, void 0, this.state.changingUsername && _jsx(PromptDialog, {
      title: t('settings.profile.username.change'),
      submitLabel: t('settings.profile.username.save'),
      icon: _ref2,
      value: initialUsername,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    })));
  };

  return ChangeUsernameButton;
}(React.Component);

ChangeUsernameButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  initialUsername: PropTypes.string
} : {};


export default translate()(ChangeUsernameButton);
//# sourceMappingURL=ChangeUsernameButton.js.map
