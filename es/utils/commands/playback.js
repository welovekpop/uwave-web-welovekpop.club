import { register } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import { setVolume, mute, unmute } from '../../actions/PlaybackActionCreators';
import { doUpvote, doDownvote } from '../../actions/VoteActionCreators';

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
//# sourceMappingURL=playback.js.map
