'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Bold = require('./Bold');

var _Bold2 = _interopRequireDefault(_Bold);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

var _Italic = require('./Italic');

var _Italic2 = _interopRequireDefault(_Italic);

var _StrikeThrough = require('./StrikeThrough');

var _StrikeThrough2 = _interopRequireDefault(_StrikeThrough);

var _Mention = require('./Mention');

var _Mention2 = _interopRequireDefault(_Mention);

var _GroupMention = require('./GroupMention');

var _GroupMention2 = _interopRequireDefault(_GroupMention);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Emoji = require('./Emoji');

var _Emoji2 = _interopRequireDefault(_Emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(tree) {
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
        return node.user ? (0, _jsx3.default)(_Mention2.default, {
          user: node.user
        }, i) : (0, _jsx3.default)(_GroupMention2.default, {
          group: node.mention,
          users: node.group
        }, i);
      case 'link':
        return (0, _jsx3.default)(_Link2.default, {
          href: node.href
        }, i, node.text);
      case 'emoji':
        if (availableEmoji.indexOf(node.name) !== -1 && node.name in emojiImages) {
          return (0, _jsx3.default)(_Emoji2.default, {
            name: node.name,
            image: emojiImages[node.name]
          }, i);
        }
        return ':' + node.name + ':';
      case 'italic':
        return (0, _jsx3.default)(_Italic2.default, {}, i, compile(node.content, opts));
      case 'bold':
        return (0, _jsx3.default)(_Bold2.default, {}, i, compile(node.content, opts));
      case 'code':
        return (0, _jsx3.default)(_Code2.default, {}, i, compile(node.content, opts));
      case 'strike':
        return (0, _jsx3.default)(_StrikeThrough2.default, {}, i, compile(node.content, opts));
      default:
        return compile(node.content, opts);
    }
    /* eslint-enable react/no-array-index-key */
  });
}
//# sourceMappingURL=compile.js.map
//# sourceMappingURL=compile.js.map
