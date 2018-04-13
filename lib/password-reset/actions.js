"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResetKey = setResetKey;
exports.resetPasswordComplete = resetPasswordComplete;
exports.resetPassword = resetPassword;

var _constants = require("./constants");

var _RequestActionCreators = require("../actions/RequestActionCreators");

function setResetKey(key) {
  return {
    type: _constants.SET_RESET_KEY,
    payload: key
  };
}

function resetPasswordComplete() {
  return {
    type: _constants.SET_RESET_SUCCESS
  };
}

function resetPassword(newPassword) {
  return function (dispatch, getState) {
    var key = getState().passwordReset.key;
    return dispatch((0, _RequestActionCreators.post)("/auth/password/reset/" + key, {
      password: newPassword
    }, {
      onComplete: resetPasswordComplete,
      onError: function onError(err) {
        return {
          type: _constants.SET_RESET_SUCCESS,
          error: true,
          payload: err
        };
      }
    }));
  };
} //# sourceMappingURL=actions.js.map
//# sourceMappingURL=actions.js.map
