import { getCommands, register, canExecute } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import startTutorial from '../../_wlk/startTutorial';

register('help', 'List available commands.', {
  action: () => (dispatch, getState) => {
    const available = getCommands();
    dispatch(log('Available commands:'));
    Object.keys(available).sort().forEach((name) => {
      const command = available[name];
      if (canExecute(getState(), command)) {
        dispatch(log(`/${name} - ${command.description}`));
      }
    });
  }
});

register('tutorial', 'Start a tutorial.', {
  action: () => () => {
    startTutorial();
  }
});
