"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _booth = require("../constants/actionTypes/booth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var normalize = function normalize(entry) {
  return {
    _id: entry._id || entry.historyID,
    user: entry.user,
    media: (0, _extends2.default)({}, entry.media.media, entry.media),
    timestamp: new Date(entry.timestamp || entry.playedAt).getTime(),
    stats: entry.stats || {
      upvotes: entry.upvotes || [],
      downvotes: entry.downvotes || [],
      favorites: entry.favorites || []
    }
  };
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
      payload = _action.payload,
      meta = _action.meta;

  switch (type) {
    case _booth.LOAD_HISTORY_COMPLETE:
      return payload.map(normalize);

    case _booth.ADVANCE:
      {
        var mostRecent = state[0]; // If the currently playing track is already in the history, remove it--
        // it'll be added back on the next advance, and will be handled by the
        // roomHistorySelector in the mean time.

        if (mostRecent && payload && mostRecent._id === payload.historyID) {
          return state.slice(1);
        }

        if (!meta || !meta.previous) {
          return state;
        }

        return [normalize(meta.previous)].concat(state);
      }

    default:
      return state;
  }
} //# sourceMappingURL=roomHistory.js.map
//# sourceMappingURL=roomHistory.js.map
