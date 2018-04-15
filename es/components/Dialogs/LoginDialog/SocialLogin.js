import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import GoogleButton from 'react-google-button';
import { loginWithGoogle } from '../../../actions/LoginActionCreators';
var enhance = compose(connect(null, {
  onGoogleClick: loginWithGoogle
}), translate());

var SocialLogin = function SocialLogin(_ref) {
  var t = _ref.t,
      onGoogleClick = _ref.onGoogleClick;
  return _jsx(GoogleButton, {
    style: {
      width: '100%'
    },
    label: t('login.social.loginWithGoogle'),
    onClick: onGoogleClick
  });
};

SocialLogin.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onGoogleClick: PropTypes.func.isRequired
} : {};
export default enhance(SocialLogin);
//# sourceMappingURL=SocialLogin.js.map
