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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _DDItemTypes = require('../../constants/DDItemTypes');

var _Actions = require('../MediaList/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _SongTitle = require('../SongTitle');

var _SongTitle2 = _interopRequireDefault(_SongTitle);

var _TimeAgo = require('../TimeAgo');

var _TimeAgo2 = _interopRequireDefault(_TimeAgo);

var _Votes = require('./Votes');

var _Votes2 = _interopRequireDefault(_Votes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      media: inSelection(selection, media.media) ? selection : [media.media]
    };
  }
};

var collect = function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

var enhance = (0, _reactDnd.DragSource)(_DDItemTypes.MEDIA, mediaSource, collect);

var HistoryRow = function (_React$Component) {
  (0, _inherits3.default)(HistoryRow, _React$Component);

  function HistoryRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HistoryRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { showActions: false }, _this.handleMouseEnter = function () {
      _this.setState({ showActions: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ showActions: false });
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media.media);
    }, _this.handleKeyPress = function (event) {
      if (event.code === 'Space') {
        _this.props.onClick();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  HistoryRow.prototype.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)());
  };

  HistoryRow.prototype.render = function render() {
    var _props = this.props,
        historyEntry = _props.media,
        className = _props.className,
        selection = _props.selection,
        selected = _props.selected,
        connectDragSource = _props.connectDragSource,
        makeActions = _props.makeActions,
        onClick = _props.onClick;
    var media = historyEntry.media,
        timestamp = historyEntry.timestamp,
        user = historyEntry.user,
        stats = historyEntry.stats;
    var showActions = this.state.showActions;

    var selectedClass = selected ? 'is-selected' : '';
    var thumbnail = (0, _jsx3.default)('div', {
      className: 'MediaListRow-thumb'
    }, void 0, (0, _jsx3.default)('img', {
      className: 'MediaListRow-image',
      src: media.thumbnail,
      alt: ''
    }));
    return connectDragSource(
    // See PlaylistManager/Panel/Row.js
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('MediaListRow', 'HistoryRow', className, selectedClass),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onDoubleClick: this.handleDoubleClick,
      onKeyPress: this.handleKeyPress,
      onClick: onClick
    }, void 0, thumbnail, (0, _jsx3.default)(_SongTitle2.default, {
      className: 'HistoryRow-song',
      size: 'mediaRow',
      artist: media.artist,
      title: media.title
    }), (0, _jsx3.default)('div', {
      className: 'HistoryRow-votes'
    }, void 0, _react2.default.createElement(_Votes2.default, stats)), (0, _jsx3.default)('div', {
      className: 'HistoryRow-user'
    }, void 0, user.username), (0, _jsx3.default)('div', {
      className: 'HistoryRow-time',
      dateTime: timestamp
    }, void 0, (0, _jsx3.default)(_TimeAgo2.default, {
      timestamp: timestamp
    })), showActions && (0, _jsx3.default)(_Actions2.default, {
      className: (0, _classnames2.default)('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return HistoryRow;
}(_react2.default.Component);

HistoryRow.defaultProps = {
  selected: false
};
HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
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

exports.default = enhance(HistoryRow);
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
