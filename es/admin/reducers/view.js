import { TRANSITION } from '../constants/ActionTypes';
export default function reducer(state, action) {
  if (state === void 0) {
    state = 'main';
  }

  if (action.type === TRANSITION) {
    return action.payload;
  }

  return state;
}
//# sourceMappingURL=view.js.map
