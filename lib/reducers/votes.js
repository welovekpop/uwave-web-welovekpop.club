'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _booth = require('../constants/actionTypes/booth');

var _votes = require('../constants/actionTypes/votes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  upvotes: [],
  downvotes: [],
  favorites: []
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _booth.ADVANCE:
      return initialState;
    case _votes.LOAD_VOTES:
      return (0, _extends3.default)({}, state, {
        upvotes: payload.upvotes,
        downvotes: payload.downvotes,
        favorites: payload.favorites
      });
    case _votes.UPVOTE:
      return (0, _extends3.default)({}, state, {
        upvotes: [].concat(state.upvotes, [payload.userID]),
        downvotes: state.downvotes.filter(function (vote) {
          return vote !== payload.userID;
        })
      });
    case _votes.DOWNVOTE:
      return (0, _extends3.default)({}, state, {
        upvotes: state.upvotes.filter(function (vote) {
          return vote !== payload.userID;
        }),
        downvotes: [].concat(state.downvotes, [payload.userID])
      });
    case _votes.FAVORITE:
      if (state.favorites.indexOf(payload.userID) === -1) {
        return (0, _extends3.default)({}, state, {
          favorites: [].concat(state.favorites, [payload.userID])
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
}
//# sourceMappingURL=votes.js.map
//# sourceMappingURL=votes.js.map
