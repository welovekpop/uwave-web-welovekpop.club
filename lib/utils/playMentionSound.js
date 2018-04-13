"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playMentionSound;

var _mention = _interopRequireDefault(require("../../assets/audio/mention.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mentionSound;

if (typeof window !== 'undefined' && window.Audio) {
  mentionSound = new window.Audio(_mention.default);
}

function playMentionSound() {
  if (mentionSound) {
    mentionSound.play();
  }
} //# sourceMappingURL=playMentionSound.js.map
//# sourceMappingURL=playMentionSound.js.map
