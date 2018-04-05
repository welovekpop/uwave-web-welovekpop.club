import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon, ListItemText } from 'material-ui/es/List';
import PeopleIcon from 'material-ui-icons/People';
import Suggestion from './Suggestion';

var _ref2 = _jsx(ListItemIcon, {}, void 0, _jsx(PeopleIcon, {}));

var GroupSuggestion = function GroupSuggestion(_ref) {
  var group = _ref.value,
      props = _objectWithoutProperties(_ref, ['value']);

  return React.createElement(
    Suggestion,
    props,
    _ref2,
    _jsx(ListItemText, {
      primary: group
    })
  );
};

GroupSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.string.isRequired
} : {};

export default GroupSuggestion;
//# sourceMappingURL=GroupSuggestion.js.map
