import { combineReducers } from 'redux';

import users from './users';
import bans from './bans';
import view from './view';

export default combineReducers({
  users: users,
  bans: bans,
  view: view
});
//# sourceMappingURL=index.js.map
