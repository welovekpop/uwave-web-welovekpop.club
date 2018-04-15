import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar, ListItemText } from "material-ui/es/List";
import Suggestion from './Suggestion';

var shortcode = function shortcode(emoji) {
  return ":" + emoji.shortcode + ":";
};

var EmojiSuggestion = function EmojiSuggestion(_ref) {
  var emoji = _ref.value,
      props = _objectWithoutProperties(_ref, ["value"]);

  return React.createElement(Suggestion, props, _jsx(ListItemAvatar, {}, void 0, _jsx("span", {
    className: "EmojiSuggestion-image",
    style: {
      backgroundImage: "url(/assets/emoji/" + emoji.image + ")"
    }
  })), _jsx(ListItemText, {
    primary: shortcode(emoji)
  }));
};

EmojiSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.shape({
    shortcode: PropTypes.string,
    image: PropTypes.string
  }).isRequired
} : {};
export default EmojiSuggestion;
//# sourceMappingURL=EmojiSuggestion.js.map
