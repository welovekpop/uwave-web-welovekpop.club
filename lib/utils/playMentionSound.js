'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playMentionSound;

var _mention = require('../../assets/audio/mention.mp3');

var _mention2 = _interopRequireDefault(_mention);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mentionSound = void 0;
if (typeof window !== 'undefined' && window.Audio) {
  mentionSound = new window.Audio(_mention2.default);
}

function playMentionSound() {
  if (mentionSound) {
    mentionSound.play();
  }
}
//# sourceMappingURL=playMentionSound.js.map
//# sourceMappingURL=playMentionSound.js.map
