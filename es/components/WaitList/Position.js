import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import MuiAvatar from "@material-ui/core/es/Avatar";

var Position = function Position(_ref) {
  var position = _ref.position;
  return _jsx(MuiAvatar, {
    className: "WaitlistRow-position"
  }, void 0, position);
};

Position.propTypes = process.env.NODE_ENV !== "production" ? {
  position: PropTypes.number.isRequired
} : {};
export default Position;
//# sourceMappingURL=Position.js.map
