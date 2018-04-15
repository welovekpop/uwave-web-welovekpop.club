"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _DDItemTypes = require("../constants/DDItemTypes");

var _MediaDragPreview = _interopRequireDefault(require("../components/MediaList/MediaDragPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactDnd.DragLayer)(function (monitor) {
  return {
    items: monitor.getItem(),
    type: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  };
});

var DragLayerContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DragLayerContainer, _React$Component);

  function DragLayerContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DragLayerContainer.prototype;

  _proto.renderPreview = function renderPreview() {
    switch (this.props.type) {
      case _DDItemTypes.MEDIA:
        return _react.default.createElement(_MediaDragPreview.default, this.props);

      default:
        return null;
    }
  };

  _proto.render = function render() {
    var _props = this.props,
        isDragging = _props.isDragging,
        items = _props.items;

    if (!isDragging || !items) {
      return null;
    }

    return (0, _jsx2.default)("div", {
      className: "DragLayerContainer"
    }, void 0, this.renderPreview());
  };

  return DragLayerContainer;
}(_react.default.Component);

DragLayerContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes.default.oneOf([_DDItemTypes.MEDIA, _DDItemTypes.WAITLIST_USER]),
  items: _propTypes.default.object,
  isDragging: _propTypes.default.bool.isRequired
} : {};

var _default = enhance(DragLayerContainer); //# sourceMappingURL=DragLayer.js.map


exports.default = _default;
//# sourceMappingURL=DragLayer.js.map
