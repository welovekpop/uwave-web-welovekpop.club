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

var _Favorite = require('material-ui-icons/Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _FavoriteBorder = require('material-ui-icons/FavoriteBorder');

var _FavoriteBorder2 = _interopRequireDefault(_FavoriteBorder);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

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

  var CurrentIcon = active ? _Favorite2.default : _FavoriteBorder2.default;

  return (0, _jsx3.default)(_Button2.default, {
    disabled: disabled,
    tooltip: t('votes.favorite'),
    onClick: handleFavorite(onFavorite),
    count: count
  }, void 0, (0, _jsx3.default)(CurrentIcon, {
    className: 'ResponseButton-icon--favorite'
  }));
};

Favorite.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onFavorite: _propTypes2.default.func.isRequired,
  count: _propTypes2.default.number.isRequired,
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool
} : {};

exports.default = enhance(Favorite);
//# sourceMappingURL=Favorite.js.map
//# sourceMappingURL=Favorite.js.map
