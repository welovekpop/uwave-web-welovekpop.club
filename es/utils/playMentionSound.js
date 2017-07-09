import mentionSoundUrl from '../../assets/audio/mention.mp3';

var mentionSound = void 0;
if (typeof window !== 'undefined' && window.Audio) {
  mentionSound = new window.Audio(mentionSoundUrl);
}

export default function playMentionSound() {
  if (mentionSound) {
    mentionSound.play();
  }
}
//# sourceMappingURL=playMentionSound.js.map
