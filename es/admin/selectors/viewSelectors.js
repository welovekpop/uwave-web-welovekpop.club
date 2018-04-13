import { createSelector } from 'reselect';
import baseSelector from './baseSelector'; // eslint-disable-next-line import/prefer-default-export

export var currentViewSelector = createSelector(baseSelector, function (base) {
  return base.view;
});
//# sourceMappingURL=viewSelectors.js.map
