import { register } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import { setVolume, mute, unmute } from '../../actions/PlaybackActionCreators';
import { doUpvote, doDownvote } from '../../actions/VoteActionCreators';
import { set as setSetting } from '../../actions/SettingsActionCreators';

register('volume', 'Set the current volume.', {
  action: function action(value) {
    var volume = parseInt(value, 10);
    if (!Number.isFinite(volume) || volume < 0 || volume > 100) {
      return log('Volume must be a number between 0 and 100.');
    }
    return setVolume(volume);
  }
});

register('mute', 'Mute the volume.', {
  action: function action() {
    return mute();
  }
});

register('unmute', 'Unmute the media volume.', {
  action: function action() {
    return unmute();
  }
});

register('upvote', 'Upvote the current track.', {
  action: function action() {
    return doUpvote();
  }
});

register('downvote', 'Downvote the current track.', {
  action: function action() {
    return doDownvote();
  }
});

register('playback', 'Enable or disable playback. Syntax: "/playback on|off"', {
  action: function action(type) {
    if (type.toLowerCase() === 'on') {
      return setSetting('videoEnabled', true);
    }
    if (type.toLowerCase() === 'off') {
      return setSetting('videoEnabled', false);
    }
    return log('Use "/playback on" to enable media playback or "/playback off" to disable it.');
  }
});
//# sourceMappingURL=playback.js.map
