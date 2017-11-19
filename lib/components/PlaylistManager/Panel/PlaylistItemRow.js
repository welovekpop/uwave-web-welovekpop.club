'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _DDItemTypes = require('../../../constants/DDItemTypes');

var _isDraggingNearTopOfRow = require('../../../utils/isDraggingNearTopOfRow');

var _isDraggingNearTopOfRow2 = _interopRequireDefault(_isDraggingNearTopOfRow);

var _Row = require('../../MediaList/Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaTarget = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    var media = item.media;

    if (media) {
      var thisID = props.media._id;
      // Do not attempt to move when the selection is dropped on top of an item
      // that is in the selection.
      if (media.some(function (playlistItem) {
        return playlistItem._id === thisID;
      })) {
        return;
      }
      var insertBefore = (0, _isDraggingNearTopOfRow2.default)(monitor, component);
      props.onMoveMedia(media, insertBefore ? { before: thisID } : { after: thisID });
    }
  },
  hover: function hover(props, monitor, component) {
    component.setState({
      insertingAbove: (0, _isDraggingNearTopOfRow2.default)(monitor, component)
    });
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var _ref = (0, _jsx3.default)('div', {
  className: 'PlaylistItemRow-drop-indicator'
});

var PlaylistItemRow = function (_React$Component) {
  (0, _inherits3.default)(PlaylistItemRow, _React$Component);

  function PlaylistItemRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PlaylistItemRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      insertingAbove: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PlaylistItemRow.prototype.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = (0, _objectWithoutProperties3.default)(_props, ['connectDropTarget', 'isOver']);

    var insertingAbove = this.state.insertingAbove;

    var dropIndicator = _ref;

    return connectDropTarget((0, _jsx3.default)('div', {
      className: 'PlaylistItemRow'
    }, void 0, isOver && insertingAbove && dropIndicator, _react2.default.createElement(_Row2.default, props), isOver && !insertingAbove && dropIndicator));
  };

  return PlaylistItemRow;
}(_react2.default.Component);

PlaylistItemRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: _propTypes2.default.func.isRequired,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onMoveMedia: _propTypes2.default.func.isRequired,
  isOver: _propTypes2.default.bool.isRequired
} : {};

exports.default = (0, _reactDnd.DropTarget)(_DDItemTypes.MEDIA, mediaTarget, collect)(PlaylistItemRow);
//# sourceMappingURL=PlaylistItemRow.js.map
//# sourceMappingURL=PlaylistItemRow.js.map
