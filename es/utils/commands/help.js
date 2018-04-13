import { getCommands, register, canExecute } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import startTutorial from '../../_wlk/startTutorial';
register('help', 'List available commands.', {
  action: function action() {
    return function (dispatch, getState) {
      var available = getCommands();
      dispatch(log('Available commands:'));
      Object.keys(available).sort().forEach(function (name) {
        var command = available[name];

        if (canExecute(getState(), command)) {
          dispatch(log("/" + name + " - " + command.description));
        }
      });
    };
  }
});
register('tutorial', 'Start a tutorial.', {
  action: function action() {
    return function () {
      startTutorial();
    };
  }
});
//# sourceMappingURL=help.js.map
