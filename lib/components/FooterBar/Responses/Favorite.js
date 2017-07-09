'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _favoriteBorder = require('material-ui/svg-icons/action/favorite-border');

var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      muiTheme = _ref.muiTheme,
      onFavorite = _ref.onFavorite,
      count = _ref.count,
      disabled = _ref.disabled,
      active = _ref.active;

  var CurrentIcon = active ? _favorite2.default : _favoriteBorder2.default;

  return (0, _jsx3.default)(_Button2.default, {
    disabled: disabled,
    tooltip: t('votes.favorite'),
    onClick: handleFavorite(onFavorite),
    count: count
  }, void 0, (0, _jsx3.default)(CurrentIcon, {
    color: muiTheme.palette.primary1Color
  }));
};

Favorite.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  muiTheme: _propTypes2.default.object.isRequired,
  onFavorite: _propTypes2.default.func.isRequired,
  count: _propTypes2.default.number.isRequired,
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _muiThemeable2.default)())(Favorite);
//# sourceMappingURL=Favorite.js.map
//# sourceMappingURL=Favorite.js.map
