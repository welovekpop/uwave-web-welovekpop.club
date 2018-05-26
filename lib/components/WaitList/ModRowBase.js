"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactDnd = require("react-dnd");

var _DragHandle = _interopRequireDefault(require("@material-ui/icons/DragHandle"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _DDItemTypes = require("../../constants/DDItemTypes");

var _userCardable = _interopRequireDefault(require("../../utils/userCardable"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Username = _interopRequireDefault(require("../Username"));

var _Position = _interopRequireDefault(require("./Position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSource = {
  beginDrag: function beginDrag(props) {
    return {
      user: props.user
    };
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


var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "WaitlistRow-tool WaitlistRow-handle"
}, void 0, (0, _jsx2.default)(_DragHandle.default, {}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Close.default, {});

var ModRowBase = function ModRowBase(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      isDragging = _ref.isDragging,
      connectDragPreview = _ref.connectDragPreview,
      connectDragSource = _ref.connectDragSource,
      onOpenCard = _ref.onOpenCard,
      onRemoveUser = _ref.onRemoveUser;
  return connectDragPreview((0, _jsx2.default)("div", {
    className: (0, _classnames.default)('UserRow', 'WaitlistRow', 'WaitlistRow--moderate', isDragging && 'is-dragging', className)
  }, void 0, (0, _jsx2.default)(_Position.default, {
    position: position + 1
  }), (0, _jsx2.default)("button", {
    className: "WaitlistRow-card",
    onClick: onOpenCard
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "UserRow-avatar",
    user: user
  }), (0, _jsx2.default)(_Username.default, {
    className: "UserRow-username",
    user: user
  })), (0, _jsx2.default)("div", {
    className: "WaitlistRow-tools"
  }, void 0, connectDragSource(_ref2), (0, _jsx2.default)("button", {
    className: "WaitlistRow-tool WaitlistRow-remove",
    onClick: onRemoveUser
  }, void 0, _ref3))));
};

ModRowBase.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  position: _propTypes.default.number.isRequired,
  user: _propTypes.default.object.isRequired,
  connectDragPreview: _propTypes.default.func.isRequired,
  connectDragSource: _propTypes.default.func.isRequired,
  onMoveUser: _propTypes.default.func.isRequired,
  onRemoveUser: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactDnd.DragSource)(_DDItemTypes.WAITLIST_USER, userSource, collect), (0, _userCardable.default)(), (0, _withProps.default)(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(ModRowBase);

exports.default = _default;
//# sourceMappingURL=ModRowBase.js.map
