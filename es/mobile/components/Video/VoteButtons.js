import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/es/IconButton';
import FavoritedIcon from 'material-ui-icons/Favorite';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import DownvoteIcon from 'material-ui-icons/ThumbDown';
import UpvoteIcon from 'material-ui-icons/ThumbUp';

var _ref2 = _jsx(FavoritedIcon, {
  className: 'ResponseButton-icon--favorite'
});

var _ref3 = _jsx(FavoriteIcon, {});

var VoteButtons = function VoteButtons(_ref) {
  var isUpvote = _ref.isUpvote,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      onFavorite = _ref.onFavorite;
  return _jsx('div', {
    className: 'VoteButtons'
  }, void 0, _jsx(IconButton, {
    onClick: onUpvote,
    className: 'VoteButtons-button'
  }, void 0, _jsx(UpvoteIcon, {
    className: cx(isUpvote && 'ResponseButton-icon--upvoted')
  })), _jsx(IconButton, {
    onClick: onFavorite,
    className: 'VoteButtons-button'
  }, void 0, isFavorite ? _ref2 : _ref3), _jsx(IconButton, {
    onClick: onDownvote,
    className: 'VoteButtons-button'
  }, void 0, _jsx(DownvoteIcon, {
    className: cx(isDownvote && 'ResponseButton-icon--downvoted')
  })));
};

VoteButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  isUpvote: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isDownvote: PropTypes.bool,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired
} : {};

export default VoteButtons;
//# sourceMappingURL=VoteButtons.js.map
