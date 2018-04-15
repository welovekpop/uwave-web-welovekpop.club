import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Button from "material-ui/es/Button";

var SocialMediaLink = function SocialMediaLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      children = _ref.children;
  return _jsx("li", {
    className: "wlk-AboutPage-socialMedia"
  }, void 0, _jsx(Button, {
    target: "_blank",
    href: href
  }, void 0, _jsx("span", {
    className: "wlk-AboutPage-socialMediaIcon"
  }, void 0, children), label));
};

SocialMediaLink.propTypes = process.env.NODE_ENV !== "production" ? {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
} : {};
export default SocialMediaLink;
//# sourceMappingURL=SocialMediaLink.js.map
