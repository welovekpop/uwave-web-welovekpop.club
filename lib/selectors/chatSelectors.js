'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canDeleteMessagesSelector = exports.emojiCompletionsSelector = exports.availableGroupMentionsSelector = exports.currentUserMuteSelector = exports.mutedUsersSelector = exports.mutedUserIDsSelector = exports.muteTimeoutsSelector = exports.markupCompilerOptionsSelector = exports.messagesSelector = exports.motdSelector = undefined;

var _userSelectors = require('./userSelectors');

Object.defineProperty(exports, 'canDeleteMessagesSelector', {
  enumerable: true,
  get: function () {
    return _userSelectors.isModeratorSelector;
  }
});

var _reselect = require('reselect');

var _object = require('object.map');

var _object2 = _interopRequireDefault(_object);

var _chatMentions = require('../utils/chatMentions');

var _configSelectors = require('./configSelectors');

var _settingSelectors = require('./settingSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSelector = function baseSelector(state) {
  return state.chat;
};

var motdSelector = exports.motdSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.motd;
});

var MAX_MESSAGES = 500;
var allMessagesSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.messages;
});
var filteredMessagesSelector = (0, _reselect.createSelector)(allMessagesSelector, _settingSelectors.notificationSettingsSelector, function (messages, notificationSettings) {
  return messages.filter(function (message) {
    if (message.type === 'userJoin') return notificationSettings.userJoin;
    if (message.type === 'userLeave') return notificationSettings.userLeave;
    if (message.type === 'userNameChanged') return notificationSettings.userNameChanged;
    return true;
  });
});
var messagesSelector = exports.messagesSelector = (0, _reselect.createSelector)(filteredMessagesSelector, function (messages) {
  return messages.slice(-MAX_MESSAGES);
});

var markupCompilerOptionsSelector = exports.markupCompilerOptionsSelector = (0, _reselect.createStructuredSelector)({
  availableEmoji: _configSelectors.availableEmojiNamesSelector,
  emojiImages: _configSelectors.availableEmojiImagesSelector
});

var mutesSelector = (0, _reselect.createSelector)(baseSelector, function (chat) {
  return chat.mutedUsers;
});

var muteTimeoutsSelector = exports.muteTimeoutsSelector = (0, _reselect.createSelector)(mutesSelector, function (mutes) {
  return (0, _object2.default)(mutes, function (mute) {
    return mute.expirationTimer;
  });
});

var mutedUserIDsSelector = exports.mutedUserIDsSelector = (0, _reselect.createSelector)(mutesSelector, function (mutes) {
  return Object.keys(mutes);
});

var mutedUsersSelector = exports.mutedUsersSelector = (0, _reselect.createSelector)(mutedUserIDsSelector, _userSelectors.usersSelector, function (mutedIDs, users) {
  return mutedIDs.map(function (userID) {
    return users[userID];
  });
});

var currentUserMuteSelector = exports.currentUserMuteSelector = (0, _reselect.createSelector)(_userSelectors.currentUserSelector, mutesSelector, function (user, mutes) {
  return user ? mutes[user._id] : null;
});

var availableGroupMentionsSelector = exports.availableGroupMentionsSelector = (0, _reselect.createSelector)(_userSelectors.currentUserSelector, function (user) {
  return (0, _chatMentions.getAvailableGroupMentions)(user);
});

var emojiCompletionsSelector = exports.emojiCompletionsSelector = (0, _reselect.createSelector)(_configSelectors.availableEmojiImagesSelector, function (images) {
  return Object.keys(images).map(function (name) {
    return {
      shortcode: name,
      image: images[name]
    };
  });
});
//# sourceMappingURL=chatSelectors.js.map
