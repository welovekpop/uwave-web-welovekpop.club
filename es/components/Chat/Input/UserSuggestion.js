import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import Suggestion from './Suggestion';

var UserSuggestion = function UserSuggestion(_ref) {
  var user = _ref.value,
      props = _objectWithoutProperties(_ref, ['value']);

  return React.createElement(Suggestion, _extends({}, props, {
    value: user._id,
    primaryText: user.username,
    leftAvatar: _jsx('div', {
      style: { display: 'inline-block' }
    }, void 0, _jsx(Avatar, {
      user: user
    }))
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
