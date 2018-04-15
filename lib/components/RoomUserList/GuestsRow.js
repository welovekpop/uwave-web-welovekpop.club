"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = require("material-ui/List");

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GuestsRow = function GuestsRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      guests = _ref.guests;
  return (0, _jsx2.default)(_List.ListItem, {
    className: (0, _classnames.default)('UserRow', 'UserRow--guests', className)
  }, void 0, (0, _jsx2.default)(_List.ListItemText, {
    classes: {
      primary: 'UserRow-guestsText'
    },
    primary: t('users.guests', {
      count: guests
    })
  }));
};

GuestsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  guests: _propTypes.default.number.isRequired
} : {};

var _default = (0, _reactI18next.translate)()(GuestsRow); //# sourceMappingURL=GuestsRow.js.map


exports.default = _default;
//# sourceMappingURL=GuestsRow.js.map
