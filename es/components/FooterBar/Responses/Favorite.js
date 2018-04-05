import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import FavoritedIcon from 'material-ui-icons/Favorite';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import Button from './Button';

var enhance = translate();

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

  var CurrentIcon = active ? FavoritedIcon : FavoriteIcon;

  return _jsx(Button, {
    disabled: disabled,
    tooltip: t('votes.favorite'),
    onClick: handleFavorite(onFavorite),
    count: count
  }, void 0, _jsx(CurrentIcon, {
    className: 'ResponseButton-icon--favorite'
  }));
};

Favorite.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
} : {};

export default enhance(Favorite);
//# sourceMappingURL=Favorite.js.map
