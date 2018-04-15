"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = require("material-ui/List");

var _Suggestion = _interopRequireDefault(require("./Suggestion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcode = function shortcode(emoji) {
  return ":" + emoji.shortcode + ":";
};

var EmojiSuggestion = function EmojiSuggestion(_ref) {
  var emoji = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value"]);
  return _react.default.createElement(_Suggestion.default, props, (0, _jsx2.default)(_List.ListItemAvatar, {}, void 0, (0, _jsx2.default)("span", {
    className: "EmojiSuggestion-image",
    style: {
      backgroundImage: "url(/assets/emoji/" + emoji.image + ")"
    }
  })), (0, _jsx2.default)(_List.ListItemText, {
    primary: shortcode(emoji)
  }));
};

EmojiSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes.default.shape({
    shortcode: _propTypes.default.string,
    image: _propTypes.default.string
  }).isRequired
} : {};
var _default = EmojiSuggestion; //# sourceMappingURL=EmojiSuggestion.js.map

exports.default = _default;
//# sourceMappingURL=EmojiSuggestion.js.map
