'use strict';

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _startTutorial = require('../../_wlk/startTutorial');

var _startTutorial2 = _interopRequireDefault(_startTutorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ChatCommands.register)('help', 'List available commands.', {
  action: function action() {
    return function (dispatch, getState) {
      var available = (0, _ChatCommands.getCommands)();
      dispatch((0, _ChatActionCreators.log)('Available commands:'));
      Object.keys(available).sort().forEach(function (name) {
        var command = available[name];
        if ((0, _ChatCommands.canExecute)(getState(), command)) {
          dispatch((0, _ChatActionCreators.log)('/' + name + ' - ' + command.description));
        }
      });
    };
  }
});

(0, _ChatCommands.register)('tutorial', 'Start a tutorial.', {
  action: function action() {
    return function () {
      (0, _startTutorial2.default)();
    };
  }
});
//# sourceMappingURL=help.js.map
//# sourceMappingURL=help.js.map
