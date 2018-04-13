import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "material-ui/es/IconButton";
import AboutIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../../../assets/img/logo-square.png';

var _ref2 =
/*#__PURE__*/
_jsx(AboutIcon, {});

var AppTitle = function AppTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick;
  return _jsx("div", {
    className: cx('AppTitle', className)
  }, void 0, _jsx("h1", {
    className: "AppTitle-logo"
  }, void 0, _jsx("img", {
    className: "AppTitle-logoImage",
    alt: children,
    src: logo
  })), _jsx(IconButton, {
    className: "AppTitle-button",
    onClick: onClick
  }, void 0, _ref2));
};

AppTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
} : {};
export default AppTitle;
//# sourceMappingURL=AppTitle.js.map
