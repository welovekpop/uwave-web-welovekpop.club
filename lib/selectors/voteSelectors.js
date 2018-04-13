"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentVoteStatsSelector = exports.downvotesCountSelector = exports.upvotesCountSelector = exports.favoritesCountSelector = exports.isDownvoteSelector = exports.isUpvoteSelector = exports.isFavoriteSelector = exports.currentVotesSelector = exports.downvotesSelector = exports.upvotesSelector = exports.favoritesSelector = void 0;

var _reselect = require("reselect");

var _userSelectors = require("./userSelectors");

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

var favoritesSelector = createPropSelector(baseSelector, 'favorites');
exports.favoritesSelector = favoritesSelector;
var upvotesSelector = createPropSelector(baseSelector, 'upvotes');
exports.upvotesSelector = upvotesSelector;
var downvotesSelector = createPropSelector(baseSelector, 'downvotes');
exports.downvotesSelector = downvotesSelector;
var currentVotesSelector = (0, _reselect.createStructuredSelector)({
  favorites: favoritesSelector,
  upvotes: upvotesSelector,
  downvotes: downvotesSelector
});
exports.currentVotesSelector = currentVotesSelector;
var isFavoriteSelector = createIsSelector(favoritesSelector);
exports.isFavoriteSelector = isFavoriteSelector;
var isUpvoteSelector = createIsSelector(upvotesSelector);
exports.isUpvoteSelector = isUpvoteSelector;
var isDownvoteSelector = createIsSelector(downvotesSelector);
exports.isDownvoteSelector = isDownvoteSelector;
var favoritesCountSelector = createCountSelector(favoritesSelector);
exports.favoritesCountSelector = favoritesCountSelector;
var upvotesCountSelector = createCountSelector(upvotesSelector);
exports.upvotesCountSelector = upvotesCountSelector;
var downvotesCountSelector = createCountSelector(downvotesSelector);
exports.downvotesCountSelector = downvotesCountSelector;
var currentVoteStatsSelector = (0, _reselect.createStructuredSelector)({
  isFavorite: isFavoriteSelector,
  isUpvote: isUpvoteSelector,
  isDownvote: isDownvoteSelector,
  favoritesCount: favoritesCountSelector,
  upvotesCount: upvotesCountSelector,
  downvotesCount: downvotesCountSelector
}); //# sourceMappingURL=voteSelectors.js.map

exports.currentVoteStatsSelector = currentVoteStatsSelector;
//# sourceMappingURL=voteSelectors.js.map
