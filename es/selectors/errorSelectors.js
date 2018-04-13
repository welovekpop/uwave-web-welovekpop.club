import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.errors;
}; // eslint-disable-next-line import/prefer-default-export


export var firstErrorSelector = createSelector(baseSelector, function (errors) {
  return errors[0];
});
//# sourceMappingURL=errorSelectors.js.map
