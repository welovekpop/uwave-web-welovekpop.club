"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

var _Suggestion = _interopRequireDefault(require("./Suggestion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSuggestion = function UserSuggestion(_ref) {
  var user = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value"]);
  return _react.default.createElement(_Suggestion.default, props, (0, _jsx2.default)(_ListItemAvatar.default, {}, void 0, (0, _jsx2.default)("div", {
    style: {
      display: 'inline-block'
    }
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    user: user
  }))), (0, _jsx2.default)(_ListItemText.default, {
    primary: user.username
  }));
};

UserSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    avatar: _propTypes.default.string
  }).isRequired
} : {};
var _default = UserSuggestion;
exports.default = _default;
//# sourceMappingURL=UserSuggestion.js.map
