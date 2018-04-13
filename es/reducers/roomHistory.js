import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { ADVANCE, LOAD_HISTORY_COMPLETE } from '../constants/actionTypes/booth';
var initialState = [];

var normalize = function normalize(entry) {
  return {
    _id: entry._id || entry.historyID,
    user: entry.user,
    media: _objectSpread({}, entry.media.media, entry.media),
    timestamp: new Date(entry.timestamp || entry.playedAt).getTime(),
    stats: entry.stats || {
      upvotes: entry.upvotes || [],
      downvotes: entry.downvotes || [],
      favorites: entry.favorites || []
    }
  };
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
      payload = _action.payload,
      meta = _action.meta;

  switch (type) {
    case LOAD_HISTORY_COMPLETE:
      return payload.map(normalize);

    case ADVANCE:
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
}
//# sourceMappingURL=roomHistory.js.map
