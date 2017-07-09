import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import FavoritedIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Button from './Button';

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

  var CurrentIcon = active ? FavoritedIcon : FavoriteIcon;

  return _jsx(Button, {
    disabled: disabled,
    tooltip: t('votes.favorite'),
    onClick: handleFavorite(onFavorite),
    count: count
  }, void 0, _jsx(CurrentIcon, {
    color: muiTheme.palette.primary1Color
  }));
};

Favorite.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
  onFavorite: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
} : {};

export default compose(translate(), muiThemeable())(Favorite);
//# sourceMappingURL=Favorite.js.map
