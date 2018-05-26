import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import MoveToFirstIcon from "@material-ui/icons/es/KeyboardArrowUp";
import Action from './Action';

var _ref2 =
/*#__PURE__*/
_jsx(MoveToFirstIcon, {});

var MoveToFirst = function MoveToFirst(_ref) {
  var onFirst = _ref.onFirst,
      props = _objectWithoutProperties(_ref, ["onFirst"]);

  return React.createElement(Action, _extends({}, props, {
    onAction: onFirst
  }), _ref2);
};

MoveToFirst.propTypes = process.env.NODE_ENV !== "production" ? {
  onFirst: PropTypes.func.isRequired
} : {};
export default MoveToFirst;
//# sourceMappingURL=MoveToFirst.js.map
