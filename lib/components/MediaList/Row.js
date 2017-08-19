'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _formatDuration = require('format-duration');

var _formatDuration2 = _interopRequireDefault(_formatDuration);

var _DDItemTypes = require('../../constants/DDItemTypes');

var _MediaLoadingIndicator = require('./MediaLoadingIndicator');

var _MediaLoadingIndicator2 = _interopRequireDefault(_MediaLoadingIndicator);

var _MediaThumbnail = require('./MediaThumbnail');

var _MediaThumbnail2 = _interopRequireDefault(_MediaThumbnail);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class, _class2, _temp2;

var inSelection = function inSelection(selection, media) {
  return selection.some(function (item) {
    return item._id === media._id;
  });
};

var mediaSource = {
  beginDrag: function beginDrag(_ref) {
    var selection = _ref.selection,
        media = _ref.media;

    return {
      media: inSelection(selection, media) ? selection : [media]
    };
  }
};

var collect = function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

var _ref2 = (0, _jsx3.default)(_MediaLoadingIndicator2.default, {
  className: 'MediaListRow-loader'
});

var Row = (_dec = (0, _reactDnd.DragSource)(_DDItemTypes.MEDIA, mediaSource, collect), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Row, _React$Component);

  function Row() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Row.prototype.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)());
  };

  Row.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        media = _props.media,
        selection = _props.selection,
        selected = _props.selected,
        connectDragSource = _props.connectDragSource,
        makeActions = _props.makeActions,
        onClick = _props.onClick;

    var selectedClass = selected ? 'is-selected' : '';
    var loadingClass = media.loading ? 'is-loading' : '';
    var duration = 'start' in media
    // playlist item
    ? media.end - media.start
    // search result
    : media.duration;

    return connectDragSource(
    // Bit uneasy about this, but turning the entire row into a button seems
    // wrong as well! Since we nest media action <button>s inside it, too.
    //
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('MediaListRow', className, selectedClass, loadingClass),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onDoubleClick: this.handleDoubleClick,
      onClick: onClick
    }, void 0, media.loading ? _ref2 : (0, _jsx3.default)(_MediaThumbnail2.default, {
      url: media.thumbnail
    }), (0, _jsx3.default)('div', {
      className: 'MediaListRow-artist',
      title: media.artist
    }, void 0, media.artist), (0, _jsx3.default)('div', {
      className: 'MediaListRow-title',
      title: media.title
    }, void 0, media.title), (0, _jsx3.default)('div', {
      className: 'MediaListRow-duration'
    }, void 0, (0, _formatDuration2.default)(duration * 1000)), (0, _jsx3.default)(_Actions2.default, {
      className: (0, _classnames2.default)('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return Row;
}(_react2.default.Component), _class2.defaultProps = {
  selected: false
}, _temp2)) || _class);
exports.default = Row;

Row.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  media: _propTypes2.default.object,
  selected: _propTypes2.default.bool,
  selection: _propTypes2.default.array,

  onOpenPreviewMediaDialog: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  makeActions: _propTypes2.default.func
} : {};
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
