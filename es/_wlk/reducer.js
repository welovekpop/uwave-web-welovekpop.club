import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import { SHOULD_RANDOMIZE } from './constants';
var initialState = {
  shouldRandomize: false
};
export default function wlkReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case SHOULD_RANDOMIZE:
      return _objectSpread({}, state, {
        shouldRandomize: action.payload
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
