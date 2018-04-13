import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import userCardable from '../../utils/userCardable';
import Avatar from '../Avatar';
import Username from '../Username';
import Position from './Position';

var SimpleRow = function SimpleRow(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      onOpenCard = _ref.onOpenCard;
  return _jsx("button", {
    className: cx('UserRow', 'WaitlistRow', 'UserRow--cardable', className),
    onClick: onOpenCard
  }, void 0, _jsx("div", {}, void 0, _jsx(Position, {
    position: position + 1
  }), _jsx(Avatar, {
    className: "UserRow-avatar",
    user: user
  }), _jsx(Username, {
    className: "UserRow-username",
    user: user
  })));
};

SimpleRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  position: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  onOpenCard: PropTypes.func.isRequired
} : {};
export default compose(userCardable(), withProps(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(SimpleRow);
//# sourceMappingURL=SimpleRow.js.map
