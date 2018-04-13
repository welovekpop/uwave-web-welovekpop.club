import { createSelector, createStructuredSelector } from 'reselect';
import { currentUserSelector } from './userSelectors';

var baseSelector = function baseSelector(state) {
  return state.votes;
};

var createPropSelector = function createPropSelector(base, prop) {
  return createSelector(base, function (obj) {
    return obj[prop];
  });
};

var createIsSelector = function createIsSelector(type) {
  return createSelector(type, currentUserSelector, function (users, me) {
    return !!me && users.indexOf(me._id) > -1;
  });
};

var createCountSelector = function createCountSelector(type) {
  return createSelector(type, function (array) {
    return array.length;
  });
};

export var favoritesSelector = createPropSelector(baseSelector, 'favorites');
export var upvotesSelector = createPropSelector(baseSelector, 'upvotes');
export var downvotesSelector = createPropSelector(baseSelector, 'downvotes');
export var currentVotesSelector = createStructuredSelector({
  favorites: favoritesSelector,
  upvotes: upvotesSelector,
  downvotes: downvotesSelector
});
export var isFavoriteSelector = createIsSelector(favoritesSelector);
export var isUpvoteSelector = createIsSelector(upvotesSelector);
export var isDownvoteSelector = createIsSelector(downvotesSelector);
export var favoritesCountSelector = createCountSelector(favoritesSelector);
export var upvotesCountSelector = createCountSelector(upvotesSelector);
export var downvotesCountSelector = createCountSelector(downvotesSelector);
export var currentVoteStatsSelector = createStructuredSelector({
  isFavorite: isFavoriteSelector,
  isUpvote: isUpvoteSelector,
  isDownvote: isDownvoteSelector,
  favoritesCount: favoritesCountSelector,
  upvotesCount: upvotesCountSelector,
  downvotesCount: downvotesCountSelector
});
//# sourceMappingURL=voteSelectors.js.map
