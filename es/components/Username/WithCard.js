import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import userCardable from '../../utils/userCardable';

import UsernameBase from './';

var enhance = compose(userCardable(), withProps(function (props) {
  return {
    onUsernameClick: function onUsernameClick(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}));

var UsernameWithCard = function UsernameWithCard(_ref) {
  var user = _ref.user,
      onUsernameClick = _ref.onUsernameClick;
  return _jsx('button', {
    onClick: onUsernameClick
  }, void 0, _jsx(UsernameBase, {
    user: user
  }));
};

UsernameWithCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  onUsernameClick: PropTypes.func.isRequired
} : {};

export default enhance(UsernameWithCard);
//# sourceMappingURL=WithCard.js.map
