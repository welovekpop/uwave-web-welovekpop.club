import { SHOULD_RANDOMIZE } from './constants';

const initialState = {
  shouldRandomize: false,
};

export default function wlkReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOULD_RANDOMIZE:
      return {
        ...state,
        shouldRandomize: action.payload,
      };
    default:
      return state;
  }
}
