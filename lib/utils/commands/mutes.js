'use strict';

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _chatSelectors = require('../../selectors/chatSelectors');

var _userSelectors = require('../../selectors/userSelectors');

var _ModerationActionCreators = require('../../actions/ModerationActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ChatCommands.register)('mute', 'Mute a user in chat, preventing them from chatting. Syntax: "/mute username duration"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '30m';
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to mute.'));
      }
      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
      if (!user) {
        return dispatch((0, _ChatActionCreators.log)('User "' + username + '" is not online.'));
      }
      return dispatch((0, _ModerationActionCreators.muteUser)(user, (0, _ms2.default)('' + duration)));
    };
  }
});

(0, _ChatCommands.register)('unmute', 'Unmute a user in chat. Syntax: "/unmute username"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to unmute.'));
      }
      var user = (0, _ChatCommands.findUser)((0, _chatSelectors.mutedUsersSelector)(getState()), username);
      if (!user) {
        return dispatch((0, _ChatActionCreators.log)('User "' + username + '" is not muted.'));
      }
      return dispatch((0, _ModerationActionCreators.unmuteUser)(user));
    };
  }
});
//# sourceMappingURL=mutes.js.map
//# sourceMappingURL=mutes.js.map
