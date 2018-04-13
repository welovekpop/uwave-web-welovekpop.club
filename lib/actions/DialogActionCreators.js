"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openEditMediaDialog = openEditMediaDialog;
exports.closeEditMediaDialog = closeEditMediaDialog;
exports.openPreviewMediaDialog = openPreviewMediaDialog;
exports.closePreviewMediaDialog = closePreviewMediaDialog;
exports.openLoginDialog = openLoginDialog;
exports.openRegisterDialog = openRegisterDialog;
exports.closeLoginDialog = closeLoginDialog;
exports.openResetPasswordDialog = openResetPasswordDialog;
exports.closeResetPasswordDialog = closeResetPasswordDialog;

var _dialogs = require("../constants/actionTypes/dialogs");

function openEditMediaDialog(playlistID, media) {
  return {
    type: _dialogs.OPEN_EDIT_MEDIA_DIALOG,
    payload: {
      playlistID: playlistID,
      media: media
    }
  };
}

function closeEditMediaDialog() {
  return {
    type: _dialogs.CLOSE_EDIT_MEDIA_DIALOG
  };
}

function openPreviewMediaDialog(media) {
  return {
    type: _dialogs.OPEN_PREVIEW_MEDIA_DIALOG,
    payload: {
      media: media
    }
  };
}

function closePreviewMediaDialog() {
  return {
    type: _dialogs.CLOSE_PREVIEW_MEDIA_DIALOG
  };
}

function openLoginDialog() {
  return {
    type: _dialogs.OPEN_LOGIN_DIALOG,
    payload: {
      show: 'login'
    }
  };
}

function openRegisterDialog() {
  return {
    type: _dialogs.OPEN_LOGIN_DIALOG,
    payload: {
      show: 'register'
    }
  };
}

function closeLoginDialog() {
  return {
    type: _dialogs.CLOSE_LOGIN_DIALOG
  };
}

function openResetPasswordDialog() {
  return {
    type: _dialogs.OPEN_LOGIN_DIALOG,
    payload: {
      show: 'reset'
    }
  };
}

function closeResetPasswordDialog() {
  return {
    type: _dialogs.CLOSE_RESET_PASSWORD_DIALOG
  };
} //# sourceMappingURL=DialogActionCreators.js.map
//# sourceMappingURL=DialogActionCreators.js.map
