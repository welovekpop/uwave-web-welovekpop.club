import ms from 'ms';
import { register, findUser } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';

import { mutedUsersSelector } from '../../selectors/chatSelectors';
import { userListSelector, isModeratorSelector } from '../../selectors/userSelectors';
import { muteUser, unmuteUser } from '../../actions/ModerationActionCreators';

register('mute', 'Mute a user in chat, preventing them from chatting. Syntax: "/mute username duration"', {
  guard: isModeratorSelector,
  action: function action(username) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '30m';
    return function (dispatch, getState) {
      if (!username) {
        return dispatch(log('Provide a user to mute.'));
      }
      var user = findUser(userListSelector(getState()), username);
      if (!user) {
        return dispatch(log('User "' + username + '" is not online.'));
      }
      return dispatch(muteUser(user, ms('' + duration)));
    };
  }
});

register('unmute', 'Unmute a user in chat. Syntax: "/unmute username"', {
  guard: isModeratorSelector,
  action: function action(username) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch(log('Provide a user to unmute.'));
      }
      var user = findUser(mutedUsersSelector(getState()), username);
      if (!user) {
        return dispatch(log('User "' + username + '" is not muted.'));
      }
      return dispatch(unmuteUser(user));
    };
  }
});
//# sourceMappingURL=mutes.js.map
