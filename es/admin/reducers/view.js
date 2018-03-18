import { TRANSITION } from '../constants/ActionTypes';

export default function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
  var action = arguments[1];

  if (action.type === TRANSITION) {
    return action.payload;
  }
  return state;
}
//# sourceMappingURL=view.js.map
