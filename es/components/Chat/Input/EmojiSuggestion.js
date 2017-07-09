import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Suggestion from './Suggestion';

var EmojiSuggestion = function EmojiSuggestion(_ref) {
  var emoji = _ref.value,
      props = _objectWithoutProperties(_ref, ['value']);

  return React.createElement(Suggestion, _extends({}, props, {
    value: emoji.shortcode,
    primaryText: ':' + emoji.shortcode + ':',
    leftAvatar: _jsx('span', {
      className: 'EmojiSuggestion-image',
      style: { backgroundImage: 'url(/assets/emoji/' + emoji.image + ')' }
    })
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
