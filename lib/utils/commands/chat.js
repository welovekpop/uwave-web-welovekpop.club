'use strict';

var _ChatCommands = require('../ChatCommands');

var _userSelectors = require('../../selectors/userSelectors');

var _ModerationActionCreators = require('../../actions/ModerationActionCreators');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

(0, _ChatCommands.register)('motd', 'Set the Message of the Day, displayed at the very top of the chat.', {
  guard: _userSelectors.isManagerSelector,
  action: function action() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var motd = args.join(' ');
    return (0, _ChatActionCreators.setMotd)(motd);
  }
});

(0, _ChatCommands.register)('clearchat', 'Delete all chat messages. ' + 'Pass a username ("/clearchat kool_panda") to only delete messages by that user.', {
  guard: _userSelectors.isModeratorSelector,
  action: function action() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return function (dispatch, getState) {
      var username = args.join(' ').trim();
      if (username) {
        var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
        if (user) {
          return dispatch((0, _ModerationActionCreators.deleteChatMessagesByUser)(user._id));
        }
        return dispatch((0, _ChatActionCreators.log)('User ' + username + ' is not online right now.'));
      }
      return dispatch((0, _ModerationActionCreators.deleteAllChatMessages)());
    };
  }
});
//# sourceMappingURL=chat.js.map
//# sourceMappingURL=chat.js.map
