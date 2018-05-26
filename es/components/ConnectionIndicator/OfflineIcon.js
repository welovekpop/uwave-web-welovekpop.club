import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/es/CircularProgress";

var _ref2 =
/*#__PURE__*/
_jsx(CircularProgress, {
  size: 32
});

var OfflineIcon = function OfflineIcon(_ref) {
  var style = _ref.style;
  return _jsx("div", {
    style: _extends({}, style, {
      width: 32,
      height: 32,
      display: 'inline-block'
    })
  }, void 0, _ref2);
};

OfflineIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  style: PropTypes.object
} : {};
export default OfflineIcon;
//# sourceMappingURL=OfflineIcon.js.map
