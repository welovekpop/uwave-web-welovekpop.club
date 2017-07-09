import _extends from 'babel-runtime/helpers/extends';
import { SHOULD_RANDOMIZE } from './constants';

var initialState = {
  shouldRandomize: false
};

export default function wlkReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SHOULD_RANDOMIZE:
      return _extends({}, state, {
        shouldRandomize: action.payload
      });
    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
