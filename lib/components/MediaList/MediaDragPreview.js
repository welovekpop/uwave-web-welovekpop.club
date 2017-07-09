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

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _list = require('material-ui/svg-icons/action/list');

var _list2 = _interopRequireDefault(_list);

var _transformStyle = require('../../utils/transformStyle');

var _transformStyle2 = _interopRequireDefault(_transformStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemStyles = function getItemStyles(offset) {
  return offset ? (0, _objectAssign2.default)({ display: 'inline-block' }, (0, _transformStyle2.default)('translate(' + offset.x + 'px, ' + offset.y + 'px)')) : { display: 'none' };
};

var dragIconStyle = {
  verticalAlign: 'bottom',
  marginRight: 3
};

var MediaDragPreview = function MediaDragPreview(_ref) {
  var muiTheme = _ref.muiTheme,
      items = _ref.items,
      currentOffset = _ref.currentOffset;

  if (!items || !items.media) {
    return null;
  }
  return (0, _jsx3.default)('div', {
    className: 'MediaDragPreview',
    style: getItemStyles(currentOffset)
  }, void 0, (0, _jsx3.default)(_list2.default, {
    color: muiTheme.palette.textColor,
    style: dragIconStyle
  }), items.media.length);
};

MediaDragPreview.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  items: _propTypes2.default.object,
  currentOffset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  })
} : {};

exports.default = (0, _muiThemeable2.default)()(MediaDragPreview);
//# sourceMappingURL=MediaDragPreview.js.map
//# sourceMappingURL=MediaDragPreview.js.map
