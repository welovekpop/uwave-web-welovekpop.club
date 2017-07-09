import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import DownvoteIcon from 'material-ui/svg-icons/action/thumb-down';
import UpvoteIcon from 'material-ui/svg-icons/action/thumb-up';
import FavoritedIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';

import theme from '../../MuiTheme';

var iconStyles = {
  height: 36,
  width: 36,
  padding: '6px 12px 6px 0'
};

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
    style: iconStyles,
    color: isUpvote ? '#4BB64B' : 'white'
  }), _jsx('span', {
    className: 'ResponseButton-count'
  }, void 0, upvotes.length))), _jsx('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, _jsx('div', {
    className: 'ResponseButton-content'
  }, void 0, _jsx(CurrentFavoriteIcon, {
    style: iconStyles,
    color: theme.palette.primary1Color
  }), _jsx('span', {
    className: 'ResponseButton-count'
  }, void 0, favorites.length))), _jsx('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, _jsx('div', {
    className: 'ResponseButton-content'
  }, void 0, _jsx(DownvoteIcon, {
    style: iconStyles,
    color: isDownvote ? '#B64B4B' : 'white'
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
