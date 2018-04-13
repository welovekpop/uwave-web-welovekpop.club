import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';

var DeleteButton = function DeleteButton(_ref) {
  var onDelete = _ref.onDelete;
  return _jsx("button", {
    className: "ChatMessage-delete",
    onClick: onDelete
  }, void 0, "Delete");
};

DeleteButton.propTypes = process.env.NODE_ENV !== "production" ? {
  onDelete: PropTypes.func.isRequired
} : {};
export default DeleteButton;
//# sourceMappingURL=DeleteButton.js.map
