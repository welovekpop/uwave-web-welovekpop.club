"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupMention = function GroupMention(_ref) {
  var className = _ref.className,
      group = _ref.group;
  return (0, _jsx2.default)("span", {
    className: (0, _classnames.default)('ChatMention', "ChatMention--" + group, className)
  }, void 0, "@", group);
};

GroupMention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  group: _propTypes.default.string.isRequired
} : {};
var _default = GroupMention; //# sourceMappingURL=GroupMention.js.map

exports.default = _default;
//# sourceMappingURL=GroupMention.js.map
