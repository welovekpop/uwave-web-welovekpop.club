import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Button from "material-ui/es/Button";
import { openLoginDialog, openRegisterDialog } from '../../actions/DialogActionCreators';

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onLogin: openLoginDialog,
    onRegister: openRegisterDialog
  }, dispatch);
};

var enhance = compose(translate(), connect(undefined, mapDispatchToProps));
var buttonStyle = {
  height: '100%',
  fontSize: '11pt',
  textTransform: 'uppercase',
  width: '50%'
};

var LoginButtons = function LoginButtons(_ref) {
  var t = _ref.t,
      onLogin = _ref.onLogin,
      onRegister = _ref.onRegister;
  return _jsx("span", {
    style: {
      display: 'flex',
      justifyContent: 'stretch',
      height: '100%'
    }
  }, void 0, _jsx(Button, {
    variant: "raised",
    color: "primary",
    onClick: onLogin,
    style: buttonStyle
  }, void 0, t('login.login')), _jsx(Button, {
    onClick: onRegister,
    style: buttonStyle
  }, void 0, t('login.register')));
};

LoginButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired
} : {};
export default enhance(LoginButtons);
//# sourceMappingURL=LoginButtons.js.map
