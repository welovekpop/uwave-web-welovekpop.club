import _extends from "@babel/runtime/helpers/builtin/extends";
import { ADVANCE, LOAD_VOTES, FAVORITE, UPVOTE, DOWNVOTE, DO_FAVORITE_START, DO_FAVORITE_COMPLETE } from '../constants/ActionTypes';
var initialState = {
  upvotes: [],
  downvotes: [],
  favorites: []
};
export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

  switch (type) {
    case ADVANCE:
      if (payload && payload.stats) {
        return _extends({}, state, {
          upvotes: payload.stats.upvotes,
          downvotes: payload.stats.downvotes,
          favorites: payload.stats.favorites
        });
      }

      return initialState;

    case LOAD_VOTES:
      return _extends({}, state, {
        upvotes: payload.upvotes,
        downvotes: payload.downvotes,
        favorites: payload.favorites
      });

    case UPVOTE:
      return _extends({}, state, {
        upvotes: state.upvotes.concat([payload.userID]),
        downvotes: state.downvotes.filter(function (vote) {
          return vote !== payload.userID;
        })
      });

    case DOWNVOTE:
      return _extends({}, state, {
        upvotes: state.upvotes.filter(function (vote) {
          return vote !== payload.userID;
        }),
        downvotes: state.downvotes.concat([payload.userID])
      });

    case FAVORITE:
      if (state.favorites.indexOf(payload.userID) === -1) {
        return _extends({}, state, {
          favorites: state.favorites.concat([payload.userID])
        });
      }

      return state;

    case DO_FAVORITE_START:
      return state;

    case DO_FAVORITE_COMPLETE:
      return state;

    default:
      return state;
  }
}
//# sourceMappingURL=votes.js.map
