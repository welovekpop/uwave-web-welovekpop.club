import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from "material-ui/es/List";

var Suggestion = function Suggestion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      select = _ref.select,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["children", "className", "select", "selected"]);

  return React.createElement(ListItem, _extends({
    button: true,
    onClick: select,
    className: cx('SuggestionItem', selected && 'is-focused', className)
  }, props), children);
};

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  select: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
} : {};
export default Suggestion;
//# sourceMappingURL=Suggestion.js.map
