import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import DownvoteIcon from 'material-ui-icons/ThumbDown';
import UpvoteIcon from 'material-ui-icons/ThumbUp';
import FavoritedIcon from 'material-ui-icons/Favorite';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';

var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;

  var CurrentFavoriteIcon = isFavorite ? FavoritedIcon : FavoriteIcon;
  return _jsx('div', {
    className: 'HistoryVotes AudienceResponse'
  }, void 0, _jsx('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, _jsx('div', {
    className: 'ResponseButton-content'
  }, void 0, _jsx(UpvoteIcon, {
    className: cx('HistoryVotes-icon', isUpvote && 'ResponseButton-icon--upvoted')
  }), _jsx('span', {
    className: 'ResponseButton-count'
  }, void 0, upvotes.length))), _jsx('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, _jsx('div', {
    className: 'ResponseButton-content'
  }, void 0, _jsx(CurrentFavoriteIcon, {
    className: 'HistoryVotes-icon ResponseButton-icon--favorite'
  }), _jsx('span', {
    className: 'ResponseButton-count'
  }, void 0, favorites.length))), _jsx('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, _jsx('div', {
    className: 'ResponseButton-content'
  }, void 0, _jsx(DownvoteIcon, {
    className: cx('HistoryVotes-icon', isDownvote && 'ResponseButton-icon--downvoted')
  }), _jsx('span', {
    className: 'ResponseButton-count'
  }, void 0, downvotes.length))));
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvotes: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
  isUpvote: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isDownvote: PropTypes.bool.isRequired
} : {};

export default Votes;
//# sourceMappingURL=Votes.js.map
