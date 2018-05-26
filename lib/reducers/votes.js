"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  upvotes: [],
  downvotes: [],
  favorites: []
};

function reduce(state, action) {
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
    case _ActionTypes.ADVANCE:
      if (payload && payload.stats) {
        return (0, _extends2.default)({}, state, {
          upvotes: payload.stats.upvotes,
          downvotes: payload.stats.downvotes,
          favorites: payload.stats.favorites
        });
      }

      return initialState;

    case _ActionTypes.LOAD_VOTES:
      return (0, _extends2.default)({}, state, {
        upvotes: payload.upvotes,
        downvotes: payload.downvotes,
        favorites: payload.favorites
      });

    case _ActionTypes.UPVOTE:
      return (0, _extends2.default)({}, state, {
        upvotes: state.upvotes.concat([payload.userID]),
        downvotes: state.downvotes.filter(function (vote) {
          return vote !== payload.userID;
        })
      });

    case _ActionTypes.DOWNVOTE:
      return (0, _extends2.default)({}, state, {
        upvotes: state.upvotes.filter(function (vote) {
          return vote !== payload.userID;
        }),
        downvotes: state.downvotes.concat([payload.userID])
      });

    case _ActionTypes.FAVORITE:
      if (state.favorites.indexOf(payload.userID) === -1) {
        return (0, _extends2.default)({}, state, {
          favorites: state.favorites.concat([payload.userID])
        });
      }

      return state;

    case _ActionTypes.DO_FAVORITE_START:
      return state;

    case _ActionTypes.DO_FAVORITE_COMPLETE:
      return state;

    default:
      return state;
  }
}
//# sourceMappingURL=votes.js.map
