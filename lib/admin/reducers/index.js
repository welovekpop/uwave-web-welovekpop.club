'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _bans = require('./bans');

var _bans2 = _interopRequireDefault(_bans);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _users2.default,
  bans: _bans2.default,
  view: _view2.default
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
