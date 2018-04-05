import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import MuiAvatar from 'material-ui/es/Avatar';

var Position = function Position(_ref) {
  var position = _ref.position;
  return _jsx(MuiAvatar, {
    className: 'WaitlistRow-position'
  }, void 0, position);
};

Position.propTypes = process.env.NODE_ENV !== "production" ? {
  position: PropTypes.number.isRequired
} : {};

export default Position;
//# sourceMappingURL=Position.js.map
