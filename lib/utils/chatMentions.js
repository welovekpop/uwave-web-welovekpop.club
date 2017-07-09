'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupMentions = undefined;
exports.getAvailableGroupMentions = getAvailableGroupMentions;
exports.resolveMentions = resolveMentions;
exports.hasMention = hasMention;

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _userSelectors = require('../selectors/userSelectors');

var _groupMentions = require('./groupMentions');

var groupMentions = _interopRequireWildcard(_groupMentions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.groupMentions = groupMentions;

/**
 * Get a list of group names that can be mentioned by a user.
 *
 * @param {{ role: number }} user
 */

function getAvailableGroupMentions(user) {
  if (user) {
    return Object.keys(groupMentions).filter(function (mention) {
      return user.role >= groupMentions[mention].role;
    });
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
      var group = groupMentions[node.mention];
      /* eslint-disable no-param-reassign */
      if (group) {
        node.group = group.users(state);
      } else {
        node.user = (0, _find2.default)(users, function (user) {
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
//# sourceMappingURL=chatMentions.js.map
