'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommands = getCommands;
exports.register = register;
exports.canExecute = canExecute;
exports.execute = execute;
exports.findUser = findUser;

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('uwave:chat-commands');

var commands = {};

function getCommands() {
  return commands;
}

function register(name, description, _ref) {
  var action = _ref.action,
      guard = _ref.guard;

  commands[name] = { description: description, action: action, guard: guard };
}

function canExecute(state) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      guard = _ref2.guard;

  return guard ? guard(state) : true;
}

function execute(state, name) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

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
}

// Helper to consistently find online users in command handlers.
function findUser(users, username) {
  var lname = username.toLowerCase();
  return (0, _arrayFind2.default)(users, function (o) {
    return o.username.toLowerCase() === lname;
  });
}
//# sourceMappingURL=ChatCommands.js.map
//# sourceMappingURL=ChatCommands.js.map
