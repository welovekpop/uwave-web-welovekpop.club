"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommands = getCommands;
exports.register = register;
exports.canExecute = canExecute;
exports.execute = execute;
exports.findUser = findUser;

var _arrayFind = _interopRequireDefault(require("array-find"));

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug.default)('uwave:chat-commands');
var commands = {};

function getCommands() {
  return commands;
}

function register(name, description, _ref) {
  var action = _ref.action,
      guard = _ref.guard;
  commands[name] = {
    description: description,
    action: action,
    guard: guard
  };
}

function canExecute(state, _temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
      guard = _ref2.guard;

  return guard ? guard(state) : true;
}

function execute(state, name, args) {
  if (args === void 0) {
    args = [];
  }

  debug('execute', name, args);

  if (commands[name]) {
    var allowed = canExecute(state, commands[name]);
    debug('canExecute', allowed);

    if (allowed) {
      var _commands$name;

      return (_commands$name = commands[name]).action.apply(_commands$name, args);
    }
  }

  return null;
} // Helper to consistently find online users in command handlers.


function findUser(users, username) {
  var lname = username.toLowerCase();
  return (0, _arrayFind.default)(users, function (o) {
    return o.username.toLowerCase() === lname;
  });
} //# sourceMappingURL=ChatCommands.js.map
//# sourceMappingURL=ChatCommands.js.map
