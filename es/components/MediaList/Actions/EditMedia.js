import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/ModeEdit';
import Action from './Action';

var _ref2 =
/*#__PURE__*/
_jsx(EditIcon, {});

var EditMedia = function EditMedia(_ref) {
  var onEdit = _ref.onEdit,
      props = _objectWithoutProperties(_ref, ["onEdit"]);

  return React.createElement(Action, _extends({}, props, {
    onAction: onEdit
  }), _ref2);
};

EditMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  onEdit: PropTypes.func.isRequired
} : {};
export default EditMedia;
//# sourceMappingURL=EditMedia.js.map
