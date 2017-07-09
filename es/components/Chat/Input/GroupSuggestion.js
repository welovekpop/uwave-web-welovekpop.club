import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import Suggestion from './Suggestion';

var _ref = _jsx(PeopleIcon, {});

var GroupSuggestion = function GroupSuggestion(props) {
  return React.createElement(Suggestion, _extends({}, props, {
    leftIcon: _ref
  }));
};

GroupSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.string.isRequired
} : {};

export default GroupSuggestion;
//# sourceMappingURL=GroupSuggestion.js.map
