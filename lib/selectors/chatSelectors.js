"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canDeleteMessagesSelector = exports.emojiCompletionsSelector = exports.availableGroupMentionsSelector = exports.currentUserMuteSelector = exports.mutedUsersSelector = exports.mutedUserIDsSelector = exports.muteTimeoutsSelector = exports.markupCompilerOptionsSelector = exports.messagesSelector = exports.motdSelector = exports.rawMotdSelector = void 0;

var _reselect = require("reselect");

var _object = _interopRequireDefault(require("object.map"));

var _uWaveParseChatMarkup = _interopRequireDefault(require("u-wave-parse-chat-markup"));

var _chatMentions = require("../utils/chatMentions");

var _configSelectors = require("./configSelectors");

var _userSelectors = require("./userSelectors");

var _settingSelectors = require("./settingSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSelector = function baseSelector(state) {
  return state.chat;
};

var rawMotdSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.motd;
});
exports.rawMotdSelector = rawMotdSelector;
var motdSelector = (0, _reselect.createSelector)(rawMotdSelector, function (motd) {
  return motd ? (0, _uWaveParseChatMarkup.default)(motd) : null;
});
exports.motdSelector = motdSelector;
var MAX_MESSAGES = 500;
var allMessagesSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.messages;
});
var filteredMessagesSelector = (0, _reselect.createSelector)(allMessagesSelector, _settingSelectors.notificationSettingsSelector, function (messages, notificationSettings) {
  return messages.filter(function (message) {
    if (message.type === 'userJoin') return notificationSettings.userJoin;
    if (message.type === 'userLeave') return notificationSettings.userLeave;
    if (message.type === 'userNameChanged') return notificationSettings.userNameChanged;
    if (message.type === 'skip') return notificationSettings.skip;
    return true;
  });
});
var messagesSelector = (0, _reselect.createSelector)(filteredMessagesSelector, function (messages) {
  return messages.slice(-MAX_MESSAGES);
});
exports.messagesSelector = messagesSelector;
var markupCompilerOptionsSelector = (0, _reselect.createStructuredSelector)({
  availableEmoji: _configSelectors.availableEmojiNamesSelector,
  emojiImages: _configSelectors.availableEmojiImagesSelector
});
exports.markupCompilerOptionsSelector = markupCompilerOptionsSelector;
var mutesSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.mutedUsers;
});
var muteTimeoutsSelector = (0, _reselect.createSelector)(mutesSelector, function (mutes) {
  return (0, _object.default)(mutes, function (mute) {
    return mute.expirationTimer;
  });
});
exports.muteTimeoutsSelector = muteTimeoutsSelector;
var mutedUserIDsSelector = (0, _reselect.createSelector)(mutesSelector, function (mutes) {
  return Object.keys(mutes);
});
exports.mutedUserIDsSelector = mutedUserIDsSelector;
var mutedUsersSelector = (0, _reselect.createSelector)(mutedUserIDsSelector, _userSelectors.usersSelector, function (mutedIDs, users) {
  return mutedIDs.map(function (userID) {
    return users[userID];
  });
});
exports.mutedUsersSelector = mutedUsersSelector;
var currentUserMuteSelector = (0, _reselect.createSelector)(_userSelectors.currentUserSelector, mutesSelector, function (user, mutes) {
  return user ? mutes[user._id] : null;
});
exports.currentUserMuteSelector = currentUserMuteSelector;
var availableGroupMentionsSelector = (0, _reselect.createSelector)(_userSelectors.currentUserHasRoleSelector, function (hasRole) {
  return (0, _chatMentions.getAvailableGroupMentions)(function (mention) {
    return hasRole("chat.mention." + mention);
  });
});
exports.availableGroupMentionsSelector = availableGroupMentionsSelector;
var emojiCompletionsSelector = (0, _reselect.createSelector)(_configSelectors.availableEmojiImagesSelector, function (images) {
  return Object.keys(images).map(function (name) {
    return {
      shortcode: name,
      image: images[name]
    };
  });
});
exports.emojiCompletionsSelector = emojiCompletionsSelector;
var canDeleteMessagesSelector = (0, _userSelectors.createRoleCheckSelector)('chat.delete');
exports.canDeleteMessagesSelector = canDeleteMessagesSelector;
//# sourceMappingURL=chatSelectors.js.map
