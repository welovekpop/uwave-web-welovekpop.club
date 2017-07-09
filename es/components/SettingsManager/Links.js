import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import FlatButton from 'material-ui/FlatButton';
import LicenseIcon from 'material-ui/svg-icons/action/copyright';
import GithubIcon from './GithubIcon';

var enhance = translate();

var linkStyle = {
  display: 'block',
  height: 24,
  lineHeight: '24px',
  marginBottom: 20,
  textAlign: 'left',
  WebkitAppearance: 'initial'
};
var iconStyle = { verticalAlign: 'top' };

var Link = withProps({
  style: linkStyle,
  target: '_blank',
  labelPosition: 'after',
  backgroundColor: 'transparent',
  hoverColor: 'transparent'
})(FlatButton);

var _ref2 = _jsx(GithubIcon, {
  style: iconStyle
});

var _ref3 = _jsx(GithubIcon, {
  style: iconStyle
});

var _ref4 = _jsx(LicenseIcon, {
  style: iconStyle
});

var Links = function Links(_ref) {
  var t = _ref.t;
  return _jsx('div', {}, void 0, _jsx('h2', {
    className: 'SettingsPanel-header'
  }, void 0, t('settings.links.title')), _jsx(Link, {
    href: 'https://github.com/u-wave',
    label: t('settings.links.website')
  }, void 0, _ref2), _jsx(Link, {
    href: 'https://github.com/u-wave/web',
    label: t('settings.links.source')
  }, void 0, _ref3), _jsx(Link, {
    href: 'https://github.com/u-wave/web/tree/master/LICENSE',
    label: t('settings.links.license')
  }, void 0, _ref4));
};

Links.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired
} : {};

export default enhance(Links);
//# sourceMappingURL=Links.js.map
