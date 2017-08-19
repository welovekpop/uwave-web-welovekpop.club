'use strict';

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _PlaybackActionCreators = require('../../actions/PlaybackActionCreators');

var _VoteActionCreators = require('../../actions/VoteActionCreators');

(0, _ChatCommands.register)('volume', 'Set the current volume.', {
  action: function action(value) {
    var volume = parseInt(value, 10);
    if (!isFinite(volume) || volume < 0 || volume > 100) {
      return (0, _ChatActionCreators.log)('Volume must be a number between 0 and 100.');
    }
    return (0, _PlaybackActionCreators.setVolume)(volume);
  }
});

(0, _ChatCommands.register)('mute', 'Mute the volume.', {
  action: function action() {
    return (0, _PlaybackActionCreators.mute)();
  }
});

(0, _ChatCommands.register)('unmute', 'Unmute the media volume.', {
  action: function action() {
    return (0, _PlaybackActionCreators.unmute)();
  }
});

(0, _ChatCommands.register)('upvote', 'Upvote the current track.', {
  action: function action() {
    return (0, _VoteActionCreators.doUpvote)();
  }
});

(0, _ChatCommands.register)('downvote', 'Downvote the current track.', {
  action: function action() {
    return (0, _VoteActionCreators.doDownvote)();
  }
});
//# sourceMappingURL=playback.js.map
//# sourceMappingURL=playback.js.map
