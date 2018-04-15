import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from "material-ui/es/Progress";

var _ref2 =
/*#__PURE__*/
_jsx(CircularProgress, {
  className: "MediaLoadingIndicator-spinner"
});

var MediaLoadingIndicator = function MediaLoadingIndicator(_ref) {
  var className = _ref.className;
  return _jsx("div", {
    className: cx('MediaLoadingIndicator', className)
  }, void 0, _ref2);
};

MediaLoadingIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string
} : {};
export default MediaLoadingIndicator;
//# sourceMappingURL=MediaLoadingIndicator.js.map
