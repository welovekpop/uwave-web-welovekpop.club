'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _jsx3.default)('img', {
    className: 'VideoBackdrop VideoBackdrop--blurry',
    src: url,
    alt: ''
  });
};

CSSVideoBackdrop.propTypes = process.env.NODE_ENV !== "production" ? {
  url: _propTypes2.default.string.isRequired
} : {};

var svgWidth = 800;
var svgHeight = 480;
var svgBlur = 20;

/**
 * A Video backdrop, blurred using an SVG filter.
 */
var SVGVideoBackdrop = function SVGVideoBackdrop(_ref2) {
  var url = _ref2.url;
  return (0, _jsx3.default)('div', {
    className: 'VideoBackdrop VideoBackdrop--svg'
  }, void 0, (0, _jsx3.default)('svg', {
    viewBox: '0 0 ' + svgWidth + ' ' + svgHeight
  }, void 0, (0, _jsx3.default)('defs', {}, void 0, (0, _jsx3.default)('filter', {
    id: 'blur'
  }, void 0, (0, _jsx3.default)('feGaussianBlur', {
    stdDeviation: svgBlur + ' ' + svgBlur,
    result: 'blur'
  }))), (0, _jsx3.default)('image', {
    xlinkHref: url,
    x: svgBlur * -3,
    y: svgBlur * -3,
    filter: 'url(#blur)',
    width: svgWidth + svgBlur * 6,
    height: svgHeight + svgBlur * 6
  })));
};

SVGVideoBackdrop.propTypes = process.env.NODE_ENV !== "production" ? {
  url: _propTypes2.default.string.isRequired
} : {};

// If the browser supports the CSS `blur()` filter, we can use the <img>-style
// backdrop. Otherwise, fall back to the SVG backdrop.
var VideoBackdrop = supportsBlur() ? CSSVideoBackdrop : SVGVideoBackdrop;

exports.default = VideoBackdrop;
//# sourceMappingURL=VideoBackdrop.js.map
//# sourceMappingURL=VideoBackdrop.js.map
