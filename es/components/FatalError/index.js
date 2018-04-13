import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardActions } from "material-ui/es/Card";
import Button from "material-ui/es/Button";
import Typography from "material-ui/es/Typography";

function reload() {
  window.location.reload();
}

var _ref2 =
/*#__PURE__*/
_jsx(Typography, {
  variant: "headline"
}, void 0, "\xFCWave Crashed");

var _ref3 =
/*#__PURE__*/
_jsx(Typography, {
  component: "p"
}, void 0, "The admins have been made aware of this issue. Please reload the page.");

var _ref4 =
/*#__PURE__*/
_jsx(CardActions, {}, void 0, _jsx(Button, {
  variant: "raised",
  color: "secondary",
  className: "FatalError-reload",
  onClick: reload,
  autoFocus: true
}, void 0, "Reload"));

var FatalError = function FatalError(_ref) {
  var error = _ref.error;
  return _jsx("div", {
    className: "FatalError"
  }, void 0, _jsx(Card, {
    raised: true,
    className: "FatalError-paper"
  }, void 0, _jsx(CardContent, {}, void 0, _ref2, _jsx(Typography, {
    component: "p"
  }, void 0, error.message), _ref3), _ref4));
};

FatalError.propTypes = process.env.NODE_ENV !== "production" ? {
  error: PropTypes.object.isRequired
} : {};
export default FatalError;
//# sourceMappingURL=index.js.map
