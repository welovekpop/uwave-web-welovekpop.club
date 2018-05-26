"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModeEdit = _interopRequireDefault(require("@material-ui/icons/ModeEdit"));

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {});

var EditMedia = function EditMedia(_ref) {
  var onEdit = _ref.onEdit,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onEdit"]);
  return _react.default.createElement(_Action.default, (0, _extends2.default)({}, props, {
    onAction: onEdit
  }), _ref2);
};

EditMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  onEdit: _propTypes.default.func.isRequired
} : {};
var _default = EditMedia;
exports.default = _default;
//# sourceMappingURL=EditMedia.js.map
