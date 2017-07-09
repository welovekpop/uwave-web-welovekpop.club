'use strict';

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _userSelectors = require('../../selectors/userSelectors');

var _ModerationActionCreators = require('../../actions/ModerationActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ChatCommands.register)('ban', 'Ban a user. Syntax: "/ban username duration" or "/ban username perma"', {
  guard: _userSelectors.isModeratorSelector,
  action: function action(username) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '24h';
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to ban.'));
      }
      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
      if (!user) {
        return dispatch((0, _ChatActionCreators.log)('User "' + username + '" is not online.'));
      }
      var permanent = duration === 'perma';
      return dispatch((0, _ModerationActionCreators.banUser)(user, {
        duration: (0, _ms2.default)('' + duration),
        permanent: permanent
      }));
    };
  }
});
//# sourceMappingURL=bans.js.map
//# sourceMappingURL=bans.js.map
