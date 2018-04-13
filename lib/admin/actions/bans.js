"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBansStart = loadBansStart;
exports.loadBansComplete = loadBansComplete;
exports.loadBans = loadBans;
exports.unbanUser = unbanUser;
exports.unbanUserAndReload = unbanUserAndReload;

var _RequestActionCreators = require("../../actions/RequestActionCreators");

var _mergeIncludedModels = _interopRequireDefault(require("../../utils/mergeIncludedModels"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadBansStart() {
  return {
    type: _ActionTypes.LOAD_BANS_START
  };
}

function loadBansComplete(response) {
  var meta = response.meta;
  return {
    type: _ActionTypes.LOAD_BANS_COMPLETE,
    payload: {
      bans: (0, _mergeIncludedModels.default)(response)
    },
    meta: {
      page: Math.floor(meta.offset / meta.pageSize),
      size: meta.pageSize
    }
  };
}

function loadBans() {
  return (0, _RequestActionCreators.get)('/bans', {
    onStart: loadBansStart,
    onComplete: loadBansComplete
  });
}

function unbanUser(user) {
  return (0, _RequestActionCreators.del)("/bans/" + user._id, {});
}

function unbanUserAndReload(user) {
  return function (dispatch) {
    return dispatch(unbanUser(user)).then(function () {
      return dispatch(loadBans());
    });
  };
} //# sourceMappingURL=bans.js.map
//# sourceMappingURL=bans.js.map
