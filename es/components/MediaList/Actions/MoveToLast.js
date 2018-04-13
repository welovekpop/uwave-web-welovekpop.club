import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import MoveToLastIcon from '@material-ui/icons/KeyboardArrowDown';
import Action from './Action';

var _ref2 =
/*#__PURE__*/
_jsx(MoveToLastIcon, {});

var MoveToLast = function MoveToLast(_ref) {
  var onLast = _ref.onLast,
      props = _objectWithoutProperties(_ref, ["onLast"]);

  return React.createElement(Action, _extends({}, props, {
    onAction: onLast
  }), _ref2);
};

MoveToLast.propTypes = process.env.NODE_ENV !== "production" ? {
  onLast: PropTypes.func.isRequired
} : {};
export default MoveToLast;
//# sourceMappingURL=MoveToLast.js.map
