'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactDnd = require('react-dnd');

var _dragHandle = require('material-ui/svg-icons/editor/drag-handle');

var _dragHandle2 = _interopRequireDefault(_dragHandle);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _DDItemTypes = require('../../constants/DDItemTypes');

var _userCardable = require('../../utils/userCardable');

var _userCardable2 = _interopRequireDefault(_userCardable);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../Username');

var _Username2 = _interopRequireDefault(_Username);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _ref2 = (0, _jsx3.default)('div', {
  className: 'WaitlistRow-tool WaitlistRow-handle'
}, void 0, (0, _jsx3.default)(_dragHandle2.default, {}));

var _ref3 = (0, _jsx3.default)(_close2.default, {});

var ModRowBase = function ModRowBase(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      isDragging = _ref.isDragging,
      connectDragPreview = _ref.connectDragPreview,
      connectDragSource = _ref.connectDragSource,
      onOpenCard = _ref.onOpenCard,
      onRemoveUser = _ref.onRemoveUser;
  return connectDragPreview((0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserRow', 'WaitlistRow', 'WaitlistRow--moderate', isDragging && 'is-dragging', className)
  }, void 0, (0, _jsx3.default)(_Position2.default, {
    position: position + 1
  }), (0, _jsx3.default)('button', {
    className: 'WaitlistRow-card',
    onClick: onOpenCard
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'UserRow-avatar',
    user: user
  }), (0, _jsx3.default)(_Username2.default, {
    className: 'UserRow-username',
    user: user
  })), (0, _jsx3.default)('div', {
    className: 'WaitlistRow-tools'
  }, void 0, connectDragSource(_ref2), (0, _jsx3.default)('button', {
    className: 'WaitlistRow-tool WaitlistRow-remove',
    onClick: onRemoveUser
  }, void 0, _ref3))));
};

ModRowBase.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  position: _propTypes2.default.number.isRequired,
  user: _propTypes2.default.object.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  connectDragSource: _propTypes2.default.func.isRequired,
  onMoveUser: _propTypes2.default.func.isRequired,
  onRemoveUser: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactDnd.DragSource)(_DDItemTypes.WAITLIST_USER, userSource, collect), (0, _userCardable2.default)(), (0, _withProps2.default)(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(ModRowBase);
//# sourceMappingURL=ModRowBase.js.map
//# sourceMappingURL=ModRowBase.js.map
