"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("@material-ui/icons/List"));

var _transformStyle = _interopRequireDefault(require("../../utils/transformStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemStyles = function getItemStyles(offset) {
  return offset ? (0, _objectAssign.default)({
    display: 'inline-block'
  }, (0, _transformStyle.default)("translate(" + offset.x + "px, " + offset.y + "px)")) : {
    display: 'none'
  };
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_List.default, {
  className: "MediaDragPreview-icon"
});

var MediaDragPreview = function MediaDragPreview(_ref) {
  var items = _ref.items,
      currentOffset = _ref.currentOffset;

  if (!items || !items.media) {
    return null;
  }

  return (0, _jsx2.default)("div", {
    className: "MediaDragPreview",
    style: getItemStyles(currentOffset)
  }, void 0, _ref2, items.media.length);
};

MediaDragPreview.propTypes = process.env.NODE_ENV !== "production" ? {
  items: _propTypes.default.object,
  currentOffset: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  })
} : {};
var _default = MediaDragPreview; //# sourceMappingURL=MediaDragPreview.js.map

exports.default = _default;
//# sourceMappingURL=MediaDragPreview.js.map
