"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTheme;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AVERAGE_COLOR = 'rgb(127, 127, 127)'; // Taken from the color module:
// https://github.com/Qix-/color/blob/99266cebff6d898fc6a783a483812e322b03d5fa/index.js#L366
// Without the alpha stuff

function blend(a, b, weight) {
  var aColor = (0, _colorManipulator.decomposeColor)(a);
  var bColor = (0, _colorManipulator.decomposeColor)(b);
  var w = 2 * weight - 1;
  var w1 = (w + 1) / 2.0;
  var w2 = 1 - w1;
  var values = [w1 * aColor.values[0] + w2 * bColor.values[0], w1 * aColor.values[1] + w2 * bColor.values[1], w1 * aColor.values[2] + w2 * bColor.values[2], aColor.values[3] || 1];
  return (0, _colorManipulator.recomposeColor)({
    type: 'rgba',
    values: values
  });
}

function createTheme(base) {
  var muiTheme = (0, _styles.createMuiTheme)(base);
  var palette = muiTheme.palette,
      uwave = muiTheme.uwave;
  return (0, _extends2.default)({}, muiTheme, {
    cssProperties: {
      '--text-color': palette.text.primary,
      '--muted-text-color': palette.text.secondary,
      '--background-color': uwave.background,
      '--background-hover-color': uwave.backgroundHover,
      '--highlight-color': palette.primary.main,
      '--highbright-color': palette.primary.light,
      '--scrollbar-color': uwave.scrollbar,
      '--canvas-color': palette.background.paper,
      // Link colors
      '--link-color': uwave.link,
      '--link-visited-color': uwave.link,
      // Footer colours
      '--footer-border-color': '#303036',
      // Chat colours
      '--chat-background-color': uwave.sidePanel.background,
      '--chat-background-color2': uwave.sidePanel.alternate,
      '--chat-border-color': 'var(--footer-border-color)',
      // User related colours
      '--user-list-color': uwave.sidePanel.background,
      '--user-list-alternate-color': uwave.sidePanel.alternate,
      // Playlist colours
      '--media-list-color': 'transparent',
      // TODO Name this in some other way. It's used as the menu item focus colour
      // in various places.
      '--media-list-alternate-color': (0, _colorManipulator.fade)(uwave.mediaList.alternate, 0.3),
      // Settings panel colours
      '--settings-help-text-color': palette.text.hint,
      // Computed values, can't do these in CSS
      '--overlay-background': (0, _colorManipulator.fade)(uwave.background, 0.96),
      '--chat-suggestion-selected': (0, _colorManipulator.fade)('#fff', 0.1),
      '--soundcloud-meta-background': (0, _colorManipulator.fade)(uwave.background, 0.3),
      '--waitlist-locked-text-color': (0, _colorManipulator.fade)(palette.text.primary, 0.7),
      '--selected-media-row-color': (0, _colorManipulator.fade)(palette.primary.main, 0.7),
      '--chat-timestamp-text-color': blend(palette.text.primary, AVERAGE_COLOR, 0.7)
    }
  });
}
//# sourceMappingURL=createTheme.js.map
