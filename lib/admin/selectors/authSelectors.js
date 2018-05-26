"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canChangeMotdSelector = void 0;

var _userSelectors = require("../../selectors/userSelectors");

/* eslint-disable import/prefer-default-export */
// TODO replace with check for the `motd.set` role.
var canChangeMotdSelector = _userSelectors.isModeratorSelector;
exports.canChangeMotdSelector = canChangeMotdSelector;
//# sourceMappingURL=authSelectors.js.map
