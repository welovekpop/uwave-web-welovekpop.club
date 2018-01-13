'use strict';

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _PlaybackActionCreators = require('../../actions/PlaybackActionCreators');

var _VoteActionCreators = require('../../actions/VoteActionCreators');

var _SettingsActionCreators = require('../../actions/SettingsActionCreators');

(0, _ChatCommands.register)('volume', 'Set the current volume.', {
  action: function action(value) {
    var volume = parseInt(value, 10);
    if (!Number.isFinite(volume) || volume < 0 || volume > 100) {
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

(0, _ChatCommands.register)('playback', 'Enable or disable playback. Syntax: "/playback on|off"', {
  action: function action(type) {
    if (type.toLowerCase() === 'on') {
      return (0, _SettingsActionCreators.set)('videoEnabled', true);
    }
    if (type.toLowerCase() === 'off') {
      return (0, _SettingsActionCreators.set)('videoEnabled', false);
    }
    return (0, _ChatActionCreators.log)('Use "/playback on" to enable media playback or "/playback off" to disable it.');
  }
});
//# sourceMappingURL=playback.js.map
//# sourceMappingURL=playback.js.map
