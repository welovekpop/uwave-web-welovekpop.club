'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _booth = require('../constants/actionTypes/booth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var normalize = function normalize(entry) {
  return {
    _id: entry._id || entry.historyID,
    user: entry.user,
    media: (0, _extends3.default)({}, entry.media.media, entry.media),
    timestamp: new Date(entry.timestamp || entry.playedAt).getTime(),
    stats: entry.stats || {
      upvotes: entry.upvotes || [],
      downvotes: entry.downvotes || [],
      favorites: entry.favorites || []
    }
  };
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      meta = action.meta;

  switch (type) {
    case _booth.LOAD_HISTORY_COMPLETE:
      return payload.map(normalize);
    case _booth.ADVANCE:
      {
        var mostRecent = state[0];
        // If the currently playing track is already in the history, remove it--
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
}
//# sourceMappingURL=roomHistory.js.map
//# sourceMappingURL=roomHistory.js.map
