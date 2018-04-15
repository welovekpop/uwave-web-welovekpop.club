import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from "material-ui/es/List";

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return _jsx(List, {
    className: "SkipReasonsList"
  }, void 0, reasons.map(function (reason) {
    return _jsx(ListItem, {
      button: true,
      onClick: function onClick() {
        return onSelect(reason.name);
      }
    }, reason.name, _jsx(ListItemText, {
      className: "SkipReasonsList-label",
      primary: reason.label
    }));
  }));
};

SkipReasonsList.propTypes = process.env.NODE_ENV !== "production" ? {
  reasons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  onSelect: PropTypes.func.isRequired
} : {};
export default SkipReasonsList;
//# sourceMappingURL=SkipReasonsList.js.map
