/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.wlk;
};

export var shouldRandomizePlaylistsSelector = createSelector(baseSelector, function (wlk) {
  return wlk.shouldRandomize;
});
//# sourceMappingURL=selectors.js.map
