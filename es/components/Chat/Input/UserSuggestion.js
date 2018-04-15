import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar, ListItemText } from "material-ui/es/List";
import Avatar from '../../Avatar';
import Suggestion from './Suggestion';

var UserSuggestion = function UserSuggestion(_ref) {
  var user = _ref.value,
      props = _objectWithoutProperties(_ref, ["value"]);

  return React.createElement(Suggestion, props, _jsx(ListItemAvatar, {}, void 0, _jsx("div", {
    style: {
      display: 'inline-block'
    }
  }, void 0, _jsx(Avatar, {
    user: user
  }))), _jsx(ListItemText, {
    primary: user.username
  }));
};

UserSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }).isRequired
} : {};
export default UserSuggestion;
//# sourceMappingURL=UserSuggestion.js.map
