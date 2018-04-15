import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import Button from "material-ui/es/Button";
import LicenseIcon from '@material-ui/icons/Copyright';
import GithubIcon from './GithubIcon';
var enhance = translate();
var Link = withProps({
  className: 'SettingsPanel-link',
  target: '_blank'
})(Button);

var _ref2 =
/*#__PURE__*/
_jsx(GithubIcon, {
  className: "SettingsPanel-linkIcon"
});

var _ref3 =
/*#__PURE__*/
_jsx(GithubIcon, {
  className: "SettingsPanel-linkIcon"
});

var _ref4 =
/*#__PURE__*/
_jsx(LicenseIcon, {
  className: "SettingsPanel-linkIcon"
});

var Links = function Links(_ref) {
  var t = _ref.t;
  return _jsx("div", {}, void 0, _jsx("h2", {
    className: "SettingsPanel-header"
  }, void 0, t('settings.links.title')), _jsx(Link, {
    href: "https://github.com/u-wave"
  }, void 0, _ref2, t('settings.links.website')), _jsx(Link, {
    href: "https://github.com/u-wave/web"
  }, void 0, _ref3, t('settings.links.source')), _jsx(Link, {
    href: "https://github.com/u-wave/web/tree/master/LICENSE"
  }, void 0, _ref4, t('settings.links.license')));
};

Links.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired
} : {};
export default enhance(Links);
//# sourceMappingURL=Links.js.map
