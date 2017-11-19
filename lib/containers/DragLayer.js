'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _DDItemTypes = require('../constants/DDItemTypes');

var _MediaDragPreview = require('../components/MediaList/MediaDragPreview');

var _MediaDragPreview2 = _interopRequireDefault(_MediaDragPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactDnd.DragLayer)(function (monitor) {
  return {
    items: monitor.getItem(),
    type: monitor.getItemType(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  };
});

var DragLayerContainer = function (_React$Component) {
  (0, _inherits3.default)(DragLayerContainer, _React$Component);

  function DragLayerContainer() {
    (0, _classCallCheck3.default)(this, DragLayerContainer);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  DragLayerContainer.prototype.renderPreview = function renderPreview() {
    switch (this.props.type) {
      case _DDItemTypes.MEDIA:
        return _react2.default.createElement(_MediaDragPreview2.default, this.props);
      default:
        return null;
    }
  };

  DragLayerContainer.prototype.render = function render() {
    var _props = this.props,
        isDragging = _props.isDragging,
        items = _props.items;

    if (!isDragging || !items) {
      return null;
    }

    return (0, _jsx3.default)('div', {
      className: 'DragLayerContainer'
    }, void 0, this.renderPreview());
  };

  return DragLayerContainer;
}(_react2.default.Component);

DragLayerContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.oneOf([_DDItemTypes.MEDIA, _DDItemTypes.WAITLIST_USER]),
  items: _propTypes2.default.object,
  isDragging: _propTypes2.default.bool.isRequired
} : {};

exports.default = enhance(DragLayerContainer);
//# sourceMappingURL=DragLayer.js.map
//# sourceMappingURL=DragLayer.js.map
