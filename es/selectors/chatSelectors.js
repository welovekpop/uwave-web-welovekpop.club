import { createSelector, createStructuredSelector } from 'reselect';
import objMap from 'object.map';
import parseChatMarkup from 'u-wave-parse-chat-markup';

import { getAvailableGroupMentions } from '../utils/chatMentions';
import { availableEmojiNamesSelector, availableEmojiImagesSelector } from './configSelectors';
import { usersSelector, currentUserSelector, currentUserHasRoleSelector, createRoleCheckSelector } from './userSelectors';
import { notificationSettingsSelector } from './settingSelectors';

var baseSelector = function baseSelector(state) {
  return state.chat;
};

export var rawMotdSelector = createSelector(baseSelector, function (chat) {
  return chat.motd;
});
export var motdSelector = createSelector(rawMotdSelector, parseChatMarkup);

var MAX_MESSAGES = 500;
var allMessagesSelector = createSelector(baseSelector, function (chat) {
  return chat.messages;
});
var filteredMessagesSelector = createSelector(allMessagesSelector, notificationSettingsSelector, function (messages, notificationSettings) {
  return messages.filter(function (message) {
    if (message.type === 'userJoin') return notificationSettings.userJoin;
    if (message.type === 'userLeave') return notificationSettings.userLeave;
    if (message.type === 'userNameChanged') return notificationSettings.userNameChanged;
    if (message.type === 'skip') return notificationSettings.skip;
    return true;
  });
});
export var messagesSelector = createSelector(filteredMessagesSelector, function (messages) {
  return messages.slice(-MAX_MESSAGES);
});

export var markupCompilerOptionsSelector = createStructuredSelector({
  availableEmoji: availableEmojiNamesSelector,
  emojiImages: availableEmojiImagesSelector
});

var mutesSelector = createSelector(baseSelector, function (chat) {
  return chat.mutedUsers;
});

export var muteTimeoutsSelector = createSelector(mutesSelector, function (mutes) {
  return objMap(mutes, function (mute) {
    return mute.expirationTimer;
  });
});

export var mutedUserIDsSelector = createSelector(mutesSelector, function (mutes) {
  return Object.keys(mutes);
});

export var mutedUsersSelector = createSelector(mutedUserIDsSelector, usersSelector, function (mutedIDs, users) {
  return mutedIDs.map(function (userID) {
    return users[userID];
  });
});

export var currentUserMuteSelector = createSelector(currentUserSelector, mutesSelector, function (user, mutes) {
  return user ? mutes[user._id] : null;
});

export var availableGroupMentionsSelector = createSelector(currentUserHasRoleSelector, function (hasRole) {
  return getAvailableGroupMentions(function (mention) {
    return hasRole('chat.mention.' + mention);
  });
});

export var emojiCompletionsSelector = createSelector(availableEmojiImagesSelector, function (images) {
  return Object.keys(images).map(function (name) {
    return {
      shortcode: name,
      image: images[name]
    };
  });
});

export var canDeleteMessagesSelector = createRoleCheckSelector('chat.delete');
//# sourceMappingURL=chatSelectors.js.map
