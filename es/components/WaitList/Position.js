import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MuiAvatar from 'material-ui/Avatar';

var Position = function Position(_ref) {
  var muiTheme = _ref.muiTheme,
      position = _ref.position;
  return _jsx(MuiAvatar, {
    className: 'WaitlistRow-position',
    backgroundColor: 'transparent',
    size: 30,
    color: muiTheme.palette.textColor
  }, void 0, position);
};

Position.propTypes = process.env.NODE_ENV !== "production" ? {
  position: PropTypes.number.isRequired,
  muiTheme: PropTypes.object.isRequired
} : {};

export default muiThemeable()(Position);
//# sourceMappingURL=Position.js.map
