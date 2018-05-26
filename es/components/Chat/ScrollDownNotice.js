import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/es/Button";
import ScrollDownIcon from "@material-ui/icons/es/ArrowDownward";

var _ref2 =
/*#__PURE__*/
_jsx(ScrollDownIcon, {});

var ScrollNotice = function ScrollNotice(_ref) {
  var show = _ref.show,
      onClick = _ref.onClick;
  return _jsx("div", {
    className: cx('ChatMessages-scrollDown', show && 'is-visible')
  }, void 0, _jsx("div", {
    className: "ChatMessages-scrollDownButton"
  }, void 0, _jsx(Button, {
    variant: "fab",
    mini: true,
    color: "primary",
    onClick: onClick
  }, void 0, _ref2)));
};

ScrollNotice.propTypes = process.env.NODE_ENV !== "production" ? {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
} : {};
export default ScrollNotice;
//# sourceMappingURL=ScrollDownNotice.js.map
