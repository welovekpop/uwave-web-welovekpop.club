import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/es/IconButton';
import AboutIcon from 'material-ui-icons/ArrowDropDown';
import logo from '../../../assets/img/logo-white.png';

var _ref2 = _jsx(AboutIcon, {});

var AppTitle = function AppTitle(_ref) {
  var className = _ref.className,
      hasAboutPage = _ref.hasAboutPage,
      children = _ref.children,
      onClick = _ref.onClick;
  return _jsx('div', {
    className: cx('AppTitle', className, hasAboutPage && 'AppTitle--hasAboutPage')
  }, void 0, _jsx('h1', {
    className: 'AppTitle-logo'
  }, void 0, _jsx('img', {
    className: 'AppTitle-logoImage',
    alt: children,
    src: logo
  })), hasAboutPage && _jsx(IconButton, {
    className: 'AppTitle-button',
    onClick: onClick
  }, void 0, _ref2));
};

AppTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  hasAboutPage: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
} : {};

export default AppTitle;
//# sourceMappingURL=AppTitle.js.map
