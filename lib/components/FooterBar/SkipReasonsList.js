"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireWildcard(require("material-ui/List"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return (0, _jsx2.default)(_List.default, {
    className: "SkipReasonsList"
  }, void 0, reasons.map(function (reason) {
    return (0, _jsx2.default)(_List.ListItem, {
      button: true,
      onClick: function onClick() {
        return onSelect(reason.name);
      }
    }, reason.name, (0, _jsx2.default)(_List.ListItemText, {
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
var _default = SkipReasonsList; //# sourceMappingURL=SkipReasonsList.js.map

exports.default = _default;
//# sourceMappingURL=SkipReasonsList.js.map
