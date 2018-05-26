"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return (0, _jsx2.default)(_List.default, {
    className: "SkipReasonsList"
  }, void 0, reasons.map(function (reason) {
    return (0, _jsx2.default)(_ListItem.default, {
      button: true,
      onClick: function onClick() {
        return onSelect(reason.name);
      }
    }, reason.name, (0, _jsx2.default)(_ListItemText.default, {
      className: "SkipReasonsList-label",
      primary: reason.label
    }));
  }));
};

SkipReasonsList.propTypes = process.env.NODE_ENV !== "production" ? {
  reasons: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    label: _propTypes.default.string
  })).isRequired,
  onSelect: _propTypes.default.func.isRequired
} : {};
var _default = SkipReasonsList;
exports.default = _default;
//# sourceMappingURL=SkipReasonsList.js.map
