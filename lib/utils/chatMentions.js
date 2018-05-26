"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailableGroupMentions = getAvailableGroupMentions;
exports.resolveMentions = resolveMentions;
exports.hasMention = hasMention;
exports.groupMentions = void 0;

var _find = _interopRequireDefault(require("lodash/find"));

var _userSelectors = require("../selectors/userSelectors");

var groupMentions = _interopRequireWildcard(require("./groupMentions"));

exports.groupMentions = groupMentions;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of group names that can be mentioned by a user.
 *
 * @param {function(role: string): boolean} canMention
 */
function getAvailableGroupMentions(canMention) {
  if (canMention) {
    return Object.keys(groupMentions).filter(canMention);
  }

  return [];
}
/**
 * Attach user objects to mentions in a parsed chat message.
 *
 * @param {Array} tree Parsed message.
 * @param {Array.<{username: string}>} users List of users.
 */


function resolveMentions(tree, state) {
  var users = (0, _userSelectors.userListSelector)(state);
  tree.forEach(function (node) {
    if (node.type === 'mention') {
      var groupSelector = groupMentions[node.mention];
      /* eslint-disable no-param-reassign */

      if (groupSelector) {
        node.group = groupSelector(state);
      } else {
        node.user = (0, _find.default)(users, function (user) {
          return user.username.toLowerCase() === node.mention;
        });
      }
      /* eslint-enable no-param-reassign */

    } else if (node.content) {
      resolveMentions(node.content, state);
    }
  });
}
/**
 * Check whether a parsed chat message mentions a given user ID. Expects mention
 * nodes to have User data, added by `resolveMentions()`.
 *
 * @param {Array} tree Parsed message.
 * @param {String} id User ID.
 */


function hasMention(tree, id) {
  return tree.some(function (node) {
    if (node.type === 'mention') {
      if (node.user) {
        return node.user._id === id;
      } else if (node.group) {
        return node.group.some(function (user) {
          return user._id === id;
        });
      }

      return false;
    }

    return Array.isArray(node) && hasMention(node, id);
  });
}
//# sourceMappingURL=chatMentions.js.map
