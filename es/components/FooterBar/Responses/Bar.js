import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Favorite from './Favorite';
import Upvote from './Upvote';
import Downvote from './Downvote';

var ResponseBar = function ResponseBar(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      isUpvote = _ref.isUpvote,
      upvotesCount = _ref.upvotesCount,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      downvotesCount = _ref.downvotesCount,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      favoritesCount = _ref.favoritesCount,
      onFavorite = _ref.onFavorite;
  return _jsx('div', {
    className: 'AudienceResponse'
  }, void 0, _jsx(Upvote, {
    disabled: disabled,
    onUpvote: onUpvote,
    count: upvotesCount,
    active: isUpvote
  }), _jsx(Favorite, {
    disabled: disabled,
    onFavorite: onFavorite,
    count: favoritesCount,
    active: isFavorite
  }), _jsx(Downvote, {
    disabled: disabled,
    onDownvote: onDownvote,
    count: downvotesCount,
    active: isDownvote
  }));
};

ResponseBar.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  isUpvote: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isDownvote: PropTypes.bool,

  upvotesCount: PropTypes.number.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  downvotesCount: PropTypes.number.isRequired,

  onUpvote: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
} : {};

export default pure(ResponseBar);
//# sourceMappingURL=Bar.js.map
