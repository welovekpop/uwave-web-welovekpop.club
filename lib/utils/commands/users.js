'use strict';

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _UserActionCreators = require('../../actions/UserActionCreators');

(0, _ChatCommands.register)('nick', 'Change your username.', {
  action: function action(name) {
    if (name.length < 3 || name.length > 32) {
      return (0, _ChatActionCreators.log)('Username must be between 3 and 32 characters long.');
    }

    return (0, _UserActionCreators.doChangeUsername)(name);
  }
});
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
