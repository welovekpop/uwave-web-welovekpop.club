import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from "material-ui/es/Snackbar";

var ErrorArea = function ErrorArea(_ref) {
  var error = _ref.error,
      onDismiss = _ref.onDismiss;
  return _jsx("div", {
    className: "ErrorArea"
  }, void 0, _jsx(Snackbar, {
    SnackbarContentProps: {
      className: 'ErrorArea-snackbar'
    },
    open: !!error,
    message: error || '',
    onClose: onDismiss
  }));
};

ErrorArea.propTypes = process.env.NODE_ENV !== "production" ? {
  error: PropTypes.string,
  onDismiss: PropTypes.func.isRequired
} : {};
export default ErrorArea;
//# sourceMappingURL=index.js.map
