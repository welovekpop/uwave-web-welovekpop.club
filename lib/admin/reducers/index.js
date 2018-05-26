"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _users = _interopRequireDefault(require("./users"));

var _bans = _interopRequireDefault(require("./bans"));

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  users: _users.default,
  bans: _bans.default,
  view: _view.default
});

exports.default = _default;
//# sourceMappingURL=index.js.map
