import merge from 'lodash/merge';
import { APPLY_THEME } from '../constants/actionTypes/settings';

import initialState from '../MuiTheme';

// eslint-disable-next-line no-unused-vars
export default function reduce(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
  case APPLY_THEME:
    return merge({}, state, payload);
  default:
    return state;
  }
}
