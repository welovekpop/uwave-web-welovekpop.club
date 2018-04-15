import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from "material-ui/es/Tooltip";

var shortcode = function shortcode(name) {
  return ":" + name + ":";
};

var url = function url(filename) {
  return "/assets/emoji/" + filename;
};

var Emoji = function Emoji(_ref) {
  var name = _ref.name,
      image = _ref.image;
  return _jsx(Tooltip, {
    title: shortcode(name),
    placement: "top"
  }, void 0, _jsx("span", {
    className: "Emoji",
    "data-emoji": name
  }, void 0, _jsx("img", {
    className: "Emoji-img",
    src: url(image),
    alt: shortcode(name)
  })));
};

Emoji.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
} : {};
export default Emoji;
//# sourceMappingURL=Emoji.js.map
