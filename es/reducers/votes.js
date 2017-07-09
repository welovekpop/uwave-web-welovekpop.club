import _extends from 'babel-runtime/helpers/extends';
import { ADVANCE } from '../constants/actionTypes/booth';
import { LOAD_VOTES, FAVORITE, UPVOTE, DOWNVOTE, DO_FAVORITE_START, DO_FAVORITE_COMPLETE } from '../constants/actionTypes/votes';

var initialState = {
  upvotes: [],
  downvotes: [],
  favorites: []
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ADVANCE:
      return initialState;
    case LOAD_VOTES:
      return _extends({}, state, {
        upvotes: payload.upvotes,
        downvotes: payload.downvotes,
        favorites: payload.favorites
      });
    case UPVOTE:
      return _extends({}, state, {
        upvotes: [].concat(state.upvotes, [payload.userID]),
        downvotes: state.downvotes.filter(function (vote) {
          return vote !== payload.userID;
        })
      });
    case DOWNVOTE:
      return _extends({}, state, {
        upvotes: state.upvotes.filter(function (vote) {
          return vote !== payload.userID;
        }),
        downvotes: [].concat(state.downvotes, [payload.userID])
      });
    case FAVORITE:
      if (state.favorites.indexOf(payload.userID) === -1) {
        return _extends({}, state, {
          favorites: [].concat(state.favorites, [payload.userID])
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
