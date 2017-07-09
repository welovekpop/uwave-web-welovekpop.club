import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import Bold from './Bold';
import Code from './Code';
import Italic from './Italic';
import StrikeThrough from './StrikeThrough';
import Mention from './Mention';
import GroupMention from './GroupMention';
import Link from './Link';
import Emoji from './Emoji';

export default function compile(tree) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$availableEmoji = opts.availableEmoji,
      availableEmoji = _opts$availableEmoji === undefined ? [] : _opts$availableEmoji,
      _opts$emojiImages = opts.emojiImages,
      emojiImages = _opts$emojiImages === undefined ? {} : _opts$emojiImages;


  return tree.map(function (node, i) {
    if (typeof node === 'string') {
      return node;
    }

    /* eslint-disable react/no-array-index-key */
    switch (node.type) {
      case 'mention':
        return node.user ? _jsx(Mention, {
          user: node.user
        }, i) : _jsx(GroupMention, {
          group: node.mention,
          users: node.group
        }, i);
      case 'link':
        return _jsx(Link, {
          href: node.href
        }, i, node.text);
      case 'emoji':
        if (availableEmoji.indexOf(node.name) !== -1 && node.name in emojiImages) {
          return _jsx(Emoji, {
            name: node.name,
            image: emojiImages[node.name]
          }, i);
        }
        return ':' + node.name + ':';
      case 'italic':
        return _jsx(Italic, {}, i, compile(node.content, opts));
      case 'bold':
        return _jsx(Bold, {}, i, compile(node.content, opts));
      case 'code':
        return _jsx(Code, {}, i, compile(node.content, opts));
      case 'strike':
        return _jsx(StrikeThrough, {}, i, compile(node.content, opts));
      default:
        return compile(node.content, opts);
    }
    /* eslint-enable react/no-array-index-key */
  });
}
//# sourceMappingURL=compile.js.map
