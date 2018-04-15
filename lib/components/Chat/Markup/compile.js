"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _Bold = _interopRequireDefault(require("./Bold"));

var _Code = _interopRequireDefault(require("./Code"));

var _Italic = _interopRequireDefault(require("./Italic"));

var _StrikeThrough = _interopRequireDefault(require("./StrikeThrough"));

var _Mention = _interopRequireDefault(require("./Mention"));

var _GroupMention = _interopRequireDefault(require("./GroupMention"));

var _Link = _interopRequireDefault(require("./Link"));

var _Emoji = _interopRequireDefault(require("./Emoji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(tree, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      _opts$availableEmoji = _opts.availableEmoji,
      availableEmoji = _opts$availableEmoji === void 0 ? [] : _opts$availableEmoji,
      _opts$emojiImages = _opts.emojiImages,
      emojiImages = _opts$emojiImages === void 0 ? {} : _opts$emojiImages;
  return tree.map(function (node, i) {
    if (typeof node === 'string') {
      return node;
    }
    /* eslint-disable react/no-array-index-key */


    switch (node.type) {
      case 'mention':
        return node.user ? (0, _jsx2.default)(_Mention.default, {
          user: node.user
        }, i) : (0, _jsx2.default)(_GroupMention.default, {
          group: node.mention,
          users: node.group
        }, i);

      case 'link':
        return (0, _jsx2.default)(_Link.default, {
          href: node.href
        }, i, node.text);

      case 'emoji':
        if (availableEmoji.indexOf(node.name) !== -1 && node.name in emojiImages) {
          return (0, _jsx2.default)(_Emoji.default, {
            name: node.name,
            image: emojiImages[node.name]
          }, i);
        }

        return ":" + node.name + ":";

      case 'italic':
        return (0, _jsx2.default)(_Italic.default, {}, i, compile(node.content, opts));

      case 'bold':
        return (0, _jsx2.default)(_Bold.default, {}, i, compile(node.content, opts));

      case 'code':
        return (0, _jsx2.default)(_Code.default, {}, i, compile(node.content, opts));

      case 'strike':
        return (0, _jsx2.default)(_StrikeThrough.default, {}, i, compile(node.content, opts));

      default:
        return compile(node.content, opts);
    }
    /* eslint-enable react/no-array-index-key */

  });
} //# sourceMappingURL=compile.js.map
//# sourceMappingURL=compile.js.map
