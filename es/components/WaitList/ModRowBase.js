import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { DragSource } from 'react-dnd';
import DragIcon from 'material-ui-icons/DragHandle';
import RemoveIcon from 'material-ui-icons/Close';
import { WAITLIST_USER } from '../../constants/DDItemTypes';
import userCardable from '../../utils/userCardable';
import Avatar from '../Avatar';
import Username from '../Username';
import Position from './Position';

var userSource = {
  beginDrag: function beginDrag(props) {
    return { user: props.user };
  },
  endDrag: function endDrag(props, monitor) {
    var result = monitor.getDropResult();
    var item = monitor.getItem();
    if (item.user && result) {
      props.onMoveUser(result.position);
    }
  }
};

var collect = function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

/**
 * A Draggable waitlist user row with moderation tools.
 */

var _ref2 = _jsx('div', {
  className: 'WaitlistRow-tool WaitlistRow-handle'
}, void 0, _jsx(DragIcon, {}));

var _ref3 = _jsx(RemoveIcon, {});

var ModRowBase = function ModRowBase(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      isDragging = _ref.isDragging,
      connectDragPreview = _ref.connectDragPreview,
      connectDragSource = _ref.connectDragSource,
      onOpenCard = _ref.onOpenCard,
      onRemoveUser = _ref.onRemoveUser;
  return connectDragPreview(_jsx('div', {
    className: cx('UserRow', 'WaitlistRow', 'WaitlistRow--moderate', isDragging && 'is-dragging', className)
  }, void 0, _jsx(Position, {
    position: position + 1
  }), _jsx('button', {
    className: 'WaitlistRow-card',
    onClick: onOpenCard
  }, void 0, _jsx(Avatar, {
    className: 'UserRow-avatar',
    user: user
  }), _jsx(Username, {
    className: 'UserRow-username',
    user: user
  })), _jsx('div', {
    className: 'WaitlistRow-tools'
  }, void 0, connectDragSource(_ref2), _jsx('button', {
    className: 'WaitlistRow-tool WaitlistRow-remove',
    onClick: onRemoveUser
  }, void 0, _ref3))));
};

ModRowBase.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  position: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  onMoveUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired
} : {};

export default compose(DragSource(WAITLIST_USER, userSource, collect), userCardable(), withProps(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(ModRowBase);
//# sourceMappingURL=ModRowBase.js.map
