import { register, findUser } from '../ChatCommands';

import { userListSelector, isModeratorSelector, isManagerSelector } from '../../selectors/userSelectors';
import { deleteChatMessagesByUser, deleteAllChatMessages } from '../../actions/ModerationActionCreators';
import { log, setMotd } from '../../actions/ChatActionCreators';

register('motd', 'Set the Message of the Day, displayed at the very top of the chat.', {
  guard: isManagerSelector,
  action: function action() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var motd = args.join(' ');
    return setMotd(motd);
  }
});

register('clearchat', 'Delete all chat messages. ' + 'Pass a username ("/clearchat kool_panda") to only delete messages by that user.', {
  guard: isModeratorSelector,
  action: function action() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return function (dispatch, getState) {
      var username = args.join(' ').trim();
      if (username) {
        var user = findUser(userListSelector(getState()), username);
        if (user) {
          return dispatch(deleteChatMessagesByUser(user._id));
        }
        return dispatch(log('User ' + username + ' is not online right now.'));
      }
      return dispatch(deleteAllChatMessages());
    };
  }
});
//# sourceMappingURL=chat.js.map
