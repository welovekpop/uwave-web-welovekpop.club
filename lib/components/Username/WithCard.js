"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _userCardable = _interopRequireDefault(require("../../utils/userCardable"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _userCardable.default)(), (0, _withProps.default)(function (props) {
  return {
    onUsernameClick: function onUsernameClick(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}));

var UsernameWithCard = function UsernameWithCard(_ref) {
  var user = _ref.user,
      onUsernameClick = _ref.onUsernameClick;
  return (0, _jsx2.default)("button", {
    onClick: onUsernameClick
  }, void 0, (0, _jsx2.default)(_.default, {
    user: user
  }));
};

UsernameWithCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  onUsernameClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(UsernameWithCard); //# sourceMappingURL=WithCard.js.map


exports.default = _default;
//# sourceMappingURL=WithCard.js.map
