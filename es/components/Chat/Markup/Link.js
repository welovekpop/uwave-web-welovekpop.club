import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import shortenUrl from 'shorten-url';

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ["children", "href"]);

  return React.createElement("a", _extends({
    href: href,
    title: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), shortenUrl(children, 60));
};

Link.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
} : {};
export default Link;
//# sourceMappingURL=Link.js.map
