"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _booth = require("../constants/actionTypes/booth");

var _votes = require("../constants/actionTypes/votes");

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
    case _booth.ADVANCE:
      return initialState;

    case _votes.LOAD_VOTES:
      return (0, _objectSpread2.default)({}, state, {
        upvotes: payload.upvotes,
        downvotes: payload.downvotes,
        favorites: payload.favorites
      });

    case _votes.UPVOTE:
      return (0, _objectSpread2.default)({}, state, {
        upvotes: state.upvotes.concat([payload.userID]),
        downvotes: state.downvotes.filter(function (vote) {
          return vote !== payload.userID;
        })
      });

    case _votes.DOWNVOTE:
      return (0, _objectSpread2.default)({}, state, {
        upvotes: state.upvotes.filter(function (vote) {
          return vote !== payload.userID;
        }),
        downvotes: state.downvotes.concat([payload.userID])
      });

    case _votes.FAVORITE:
      if (state.favorites.indexOf(payload.userID) === -1) {
        return (0, _objectSpread2.default)({}, state, {
          favorites: state.favorites.concat([payload.userID])
        });
      }

      return state;

    case _votes.DO_FAVORITE_START:
      return state;

    case _votes.DO_FAVORITE_COMPLETE:
      return state;

    default:
      return state;
  }
} //# sourceMappingURL=votes.js.map
//# sourceMappingURL=votes.js.map
