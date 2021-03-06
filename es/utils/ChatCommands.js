import find from 'array-find';
import createDebug from 'debug';
var debug = createDebug('uwave:chat-commands');
var commands = {};
export function getCommands() {
  return commands;
}
export function register(name, description, _ref) {
  var action = _ref.action,
      guard = _ref.guard;
  commands[name] = {
    description: description,
    action: action,
    guard: guard
  };
}
export function canExecute(state, _temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
      guard = _ref2.guard;

  return guard ? guard(state) : true;
}
export function execute(state, name, args) {
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

export function findUser(users, username) {
  var lname = username.toLowerCase();
  return find(users, function (o) {
    return o.username.toLowerCase() === lname;
  });
}
//# sourceMappingURL=ChatCommands.js.map
