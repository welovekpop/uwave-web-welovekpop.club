'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentVoteStatsSelector = exports.downvotesCountSelector = exports.upvotesCountSelector = exports.favoritesCountSelector = exports.isDownvoteSelector = exports.isUpvoteSelector = exports.isFavoriteSelector = exports.currentVotesSelector = exports.downvotesSelector = exports.upvotesSelector = exports.favoritesSelector = undefined;

var _reselect = require('reselect');

var _userSelectors = require('./userSelectors');

var baseSelector = function baseSelector(state) {
  return state.votes;
};

var createPropSelector = function createPropSelector(base, prop) {
  return (0, _reselect.createSelector)(base, function (obj) {
    return obj[prop];
  });
};
var createIsSelector = function createIsSelector(type) {
  return (0, _reselect.createSelector)(type, _userSelectors.currentUserSelector, function (users, me) {
    return !!me && users.indexOf(me._id) > -1;
  });
};
var createCountSelector = function createCountSelector(type) {
  return (0, _reselect.createSelector)(type, function (array) {
    return array.length;
  });
};

var favoritesSelector = exports.favoritesSelector = createPropSelector(baseSelector, 'favorites');
var upvotesSelector = exports.upvotesSelector = createPropSelector(baseSelector, 'upvotes');
var downvotesSelector = exports.downvotesSelector = createPropSelector(baseSelector, 'downvotes');

var currentVotesSelector = exports.currentVotesSelector = (0, _reselect.createStructuredSelector)({
  favorites: favoritesSelector,
  upvotes: upvotesSelector,
  downvotes: downvotesSelector
});

var isFavoriteSelector = exports.isFavoriteSelector = createIsSelector(favoritesSelector);
var isUpvoteSelector = exports.isUpvoteSelector = createIsSelector(upvotesSelector);
var isDownvoteSelector = exports.isDownvoteSelector = createIsSelector(downvotesSelector);

var favoritesCountSelector = exports.favoritesCountSelector = createCountSelector(favoritesSelector);
var upvotesCountSelector = exports.upvotesCountSelector = createCountSelector(upvotesSelector);
var downvotesCountSelector = exports.downvotesCountSelector = createCountSelector(downvotesSelector);

var currentVoteStatsSelector = exports.currentVoteStatsSelector = (0, _reselect.createStructuredSelector)({
  isFavorite: isFavoriteSelector,
  isUpvote: isUpvoteSelector,
  isDownvote: isDownvoteSelector,
  favoritesCount: favoritesCountSelector,
  upvotesCount: upvotesCountSelector,
  downvotesCount: downvotesCountSelector
});
//# sourceMappingURL=voteSelectors.js.map
//# sourceMappingURL=voteSelectors.js.map
