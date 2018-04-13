import ms from 'ms';
import { register, findUser } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import { userListSelector, isModeratorSelector } from '../../selectors/userSelectors';
import { banUser } from '../../actions/ModerationActionCreators';
register('ban', 'Ban a user. Syntax: "/ban username duration" or "/ban username perma"', {
  guard: isModeratorSelector,
  action: function action(username, duration) {
    if (duration === void 0) {
      duration = '24h';
    }

    return function (dispatch, getState) {
      if (!username) {
        return dispatch(log('Provide a user to ban.'));
      }

      var user = findUser(userListSelector(getState()), username);

      if (!user) {
        return dispatch(log("User \"" + username + "\" is not online."));
      }

      var permanent = duration === 'perma';
      return dispatch(banUser(user, {
        duration: ms("" + duration),
        permanent: permanent
      }));
    };
  }
});
//# sourceMappingURL=bans.js.map
