"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteButton = function DeleteButton(_ref) {
  var onDelete = _ref.onDelete;
  return (0, _jsx2.default)("button", {
    className: "ChatMessage-delete",
    onClick: onDelete
  }, void 0, "Delete");
};

DeleteButton.propTypes = process.env.NODE_ENV !== "production" ? {
  onDelete: _propTypes.default.func.isRequired
} : {};
var _default = DeleteButton;
exports.default = _default;
//# sourceMappingURL=DeleteButton.js.map
