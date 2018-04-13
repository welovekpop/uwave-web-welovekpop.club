"use strict";

var _ChatCommands = require("../ChatCommands");

var _ChatActionCreators = require("../../actions/ChatActionCreators");

var _WaitlistActionCreators = require("../../actions/WaitlistActionCreators");

var _ModerationActionCreators = require("../../actions/ModerationActionCreators");

var _userSelectors = require("../../selectors/userSelectors");

var _waitlistSelectors = require("../../selectors/waitlistSelectors");

(0, _ChatCommands.register)('skip', 'Skip the current DJ.', {
  guard: _userSelectors.isModeratorSelector,
  action: function action() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _ModerationActionCreators.skipCurrentDJ)(args ? args.join(' ') : '[No reason given]');
  }
});
(0, _ChatCommands.register)('wladd', 'Add a user to the waitlist. Syntax: "/wladd username"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to add to the waitlist. Syntax: "/wladd username"'));
      }

      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);

      if (user) {
        return dispatch((0, _WaitlistActionCreators.joinWaitlist)(user));
      }

      return dispatch((0, _ChatActionCreators.log)("User " + username + " is not online right now."));
    };
  }
});
(0, _ChatCommands.register)('wlremove', 'Remove a user from the waitlist. Syntax: "/wlremove username"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to remove from the waitlist. Syntax: "/wlremove username"'));
      }

      var user = (0, _ChatCommands.findUser)((0, _waitlistSelectors.djAndWaitlistUsersSelector)(getState()), username);

      if (user) {
        return dispatch((0, _ModerationActionCreators.removeWaitlistUser)(user));
      }

      return dispatch((0, _ChatActionCreators.log)("User " + username + " is not in the waitlist."));
    };
  }
});
(0, _ChatCommands.register)('wlclear', 'Remove everyone from the waitlist.', {
  guard: _userSelectors.isModeratorSelector,
  action: _WaitlistActionCreators.modClearWaitlist
});
(0, _ChatCommands.register)('wllock', 'Lock the waitlist.', {
  guard: _userSelectors.isModeratorSelector,
  action: _WaitlistActionCreators.modLockWaitlist
});
(0, _ChatCommands.register)('wlunlock', 'Unlock the waitlist.', {
  guard: _userSelectors.isModeratorSelector,
  action: _WaitlistActionCreators.modUnlockWaitlist
});
(0, _ChatCommands.register)('wlmove', 'Move a user to a different position in the waitlist. ' + 'Syntax: "/wlmove username position"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username, posStr) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to move in the waitlist. Syntax: "/wlmove username position"'));
      }

      var position = parseInt(posStr, 10) - 1;

      if (typeof position !== 'number' || position < 0) {
        return dispatch((0, _ChatActionCreators.log)("Provide a position to move @" + username + " to. Syntax: \"/wlmove username position\""));
      }

      var user = (0, _ChatCommands.findUser)((0, _waitlistSelectors.waitlistUsersSelector)(getState()), username);

      if (user) {
        return dispatch((0, _ModerationActionCreators.moveWaitlistUser)(user, position));
      }

      return dispatch((0, _ChatActionCreators.log)("User " + username + " is not in the waitlist."));
    };
  }
}); //# sourceMappingURL=waitlist.js.map
//# sourceMappingURL=waitlist.js.map
