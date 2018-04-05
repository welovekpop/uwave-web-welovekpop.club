'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui-icons/List');

var _List2 = _interopRequireDefault(_List);

var _transformStyle = require('../../utils/transformStyle');

var _transformStyle2 = _interopRequireDefault(_transformStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemStyles = function getItemStyles(offset) {
  return offset ? (0, _objectAssign2.default)({ display: 'inline-block' }, (0, _transformStyle2.default)('translate(' + offset.x + 'px, ' + offset.y + 'px)')) : { display: 'none' };
};

var _ref2 = (0, _jsx3.default)(_List2.default, {
  className: 'MediaDragPreview-icon'
});

var MediaDragPreview = function MediaDragPreview(_ref) {
  var items = _ref.items,
      currentOffset = _ref.currentOffset;

  if (!items || !items.media) {
    return null;
  }
  return (0, _jsx3.default)('div', {
    className: 'MediaDragPreview',
    style: getItemStyles(currentOffset)
  }, void 0, _ref2, items.media.length);
};

MediaDragPreview.propTypes = process.env.NODE_ENV !== "production" ? {
  items: _propTypes2.default.object,
  currentOffset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  })
} : {};

exports.default = MediaDragPreview;
//# sourceMappingURL=MediaDragPreview.js.map
//# sourceMappingURL=MediaDragPreview.js.map
