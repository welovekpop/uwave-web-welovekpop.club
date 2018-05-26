"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _FavoriteBorder = _interopRequireDefault(require("@material-ui/icons/FavoriteBorder"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var handleFavorite = function handleFavorite(onFavorite) {
  return function (event) {
    var pos = event.target.getBoundingClientRect();
    onFavorite({
      x: pos.left,
      y: pos.top
    });
  };
};

var Favorite = function Favorite(_ref) {
  var t = _ref.t,
      onFavorite = _ref.onFavorite,
      count = _ref.count,
      disabled = _ref.disabled,
      active = _ref.active;
  var CurrentIcon = active ? _Favorite.default : _FavoriteBorder.default;
  return (0, _jsx2.default)(_Button.default, {
    disabled: disabled,
    tooltip: t('votes.favorite'),
    onClick: handleFavorite(onFavorite),
    count: count
  }, void 0, (0, _jsx2.default)(CurrentIcon, {
    className: "ResponseButton-icon--favorite"
  }));
};

Favorite.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onFavorite: _propTypes.default.func.isRequired,
  count: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  active: _propTypes.default.bool
} : {};

var _default = enhance(Favorite);

exports.default = _default;
//# sourceMappingURL=Favorite.js.map
