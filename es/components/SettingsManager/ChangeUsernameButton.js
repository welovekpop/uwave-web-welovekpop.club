import _jsx from "@babel/runtime/helpers/jsx";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import IconButton from "material-ui/es/IconButton";
import EditIcon from '@material-ui/icons/ModeEdit';
import PromptDialog from '../Dialogs/PromptDialog';
import DialogCloseAnimation from '../DialogCloseAnimation';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(EditIcon, {
  className: "ChangeUsernameButton-icon"
});

var _ref2 =
/*#__PURE__*/
_jsx(EditIcon, {
  nativeColor: "#777"
});

var ChangeUsernameButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ChangeUsernameButton, _React$Component);

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

      return _this.props.onChangeUsername(name).then(_this.closeDialog.bind(_assertThisInitialized(_this)));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ChangeUsernameButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      changingUsername: false
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        initialUsername = _props.initialUsername;
    return _jsx(React.Fragment, {}, void 0, _jsx(IconButton, {
      className: "ChangeUsernameButton",
      onClick: this.handleOpen
    }, void 0, _ref), _jsx(DialogCloseAnimation, {
      delay: 450
    }, void 0, this.state.changingUsername ? _jsx(PromptDialog, {
      title: t('settings.profile.username.change'),
      submitLabel: t('settings.profile.username.save'),
      icon: _ref2,
      value: initialUsername,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }) : null));
  };

  return ChangeUsernameButton;
}(React.Component);

ChangeUsernameButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  initialUsername: PropTypes.string
} : {};
export default enhance(ChangeUsernameButton);
//# sourceMappingURL=ChangeUsernameButton.js.map
