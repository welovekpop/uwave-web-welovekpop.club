import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Check if the browser supports the CSS `blur()` filter.
 */

function supportsBlur() {
  // Be conservative if we're not in the browser.
  if (typeof window === 'undefined' || !window.CSS) {
    return false;
  }

  return CSS.supports('filter', 'blur(1em)') || CSS.supports('-webkit-filter', 'blur(1em)');
}
/**
 * A Video backdrop, blurred using the CSS `blur()` filter.
 */


var CSSVideoBackdrop = function CSSVideoBackdrop(_ref) {
  var url = _ref.url;
  return _jsx("img", {
    className: "VideoBackdrop VideoBackdrop--blurry",
    src: url,
    alt: ""
  });
};

CSSVideoBackdrop.propTypes = process.env.NODE_ENV !== "production" ? {
  url: PropTypes.string.isRequired
} : {};
var svgWidth = 800;
var svgHeight = 480;
var svgBlur = 20;
/**
 * A Video backdrop, blurred using an SVG filter.
 */

var _ref3 =
/*#__PURE__*/
_jsx("defs", {}, void 0, _jsx("filter", {
  id: "blur"
}, void 0, _jsx("feGaussianBlur", {
  stdDeviation: svgBlur + " " + svgBlur,
  result: "blur"
})));

var SVGVideoBackdrop = function SVGVideoBackdrop(_ref2) {
  var url = _ref2.url;
  return _jsx("div", {
    className: "VideoBackdrop VideoBackdrop--svg"
  }, void 0, _jsx("svg", {
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }, void 0, _ref3, _jsx("image", {
    xlinkHref: url,
    x: svgBlur * -3,
    y: svgBlur * -3,
    filter: "url(#blur)",
    width: svgWidth + svgBlur * 6,
    height: svgHeight + svgBlur * 6
  })));
};

SVGVideoBackdrop.propTypes = process.env.NODE_ENV !== "production" ? {
  url: PropTypes.string.isRequired
} : {}; // If the browser supports the CSS `blur()` filter, we can use the <img>-style
// backdrop. Otherwise, fall back to the SVG backdrop.

var VideoBackdrop = supportsBlur() ? CSSVideoBackdrop : SVGVideoBackdrop;
export default VideoBackdrop;
//# sourceMappingURL=VideoBackdrop.js.map
