"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _DDItemTypes = require("../../../constants/DDItemTypes");

var _isDraggingNearTopOfRow = _interopRequireDefault(require("../../../utils/isDraggingNearTopOfRow"));

var _Row = _interopRequireDefault(require("../../MediaList/Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaTarget = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    var media = item.media;

    if (media) {
      var thisID = props.media._id; // Do not attempt to move when the selection is dropped on top of an item
      // that is in the selection.

      if (media.some(function (playlistItem) {
        return playlistItem._id === thisID;
      })) {
        return;
      }

      var insertBefore = (0, _isDraggingNearTopOfRow.default)(monitor, component);
      props.onMoveMedia(media, insertBefore ? {
        before: thisID
      } : {
        after: thisID
      });
    }
  },
  hover: function hover(props, monitor, component) {
    component.setState({
      insertingAbove: (0, _isDraggingNearTopOfRow.default)(monitor, component)
    });
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistItemRow-drop-indicator"
});

var PlaylistItemRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PlaylistItemRow, _React$Component);

  function PlaylistItemRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      insertingAbove: false
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = PlaylistItemRow.prototype;

  _proto.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = (0, _objectWithoutProperties2.default)(_props, ["connectDropTarget", "isOver"]);
    var insertingAbove = this.state.insertingAbove;
    var dropIndicator = _ref;
    return connectDropTarget((0, _jsx2.default)("div", {
      className: "PlaylistItemRow"
    }, void 0, isOver && insertingAbove && dropIndicator, _react.default.createElement(_Row.default, props), isOver && !insertingAbove && dropIndicator));
  };

  return PlaylistItemRow;
}(_react.default.Component);

PlaylistItemRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: _propTypes.default.func.isRequired,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onMoveMedia: _propTypes.default.func.isRequired,
  isOver: _propTypes.default.bool.isRequired
} : {};

var _default = (0, _reactDnd.DropTarget)(_DDItemTypes.MEDIA, mediaTarget, collect)(PlaylistItemRow); //# sourceMappingURL=PlaylistItemRow.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistItemRow.js.map
