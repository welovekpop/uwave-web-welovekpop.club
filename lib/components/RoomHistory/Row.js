"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _DDItemTypes = require("../../constants/DDItemTypes");

var _Actions = _interopRequireDefault(require("../MediaList/Actions"));

var _SongTitle = _interopRequireDefault(require("../SongTitle"));

var _TimeAgo = _interopRequireDefault(require("../TimeAgo"));

var _Votes = _interopRequireDefault(require("./Votes"));

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

var HistoryRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(HistoryRow, _React$Component);

  function HistoryRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      showActions: false
    }, _this.handleMouseEnter = function () {
      _this.setState({
        showActions: true
      });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        showActions: false
      });
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media.media);
    }, _this.handleKeyPress = function (event) {
      if (event.code === 'Space') {
        _this.props.onClick();
      }
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = HistoryRow.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)());
  };

  _proto.render = function render() {
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
    var thumbnail = (0, _jsx2.default)("div", {
      className: "MediaListRow-thumb"
    }, void 0, (0, _jsx2.default)("img", {
      className: "MediaListRow-image",
      src: media.thumbnail,
      alt: ""
    }));
    return connectDragSource( // See PlaylistManager/Panel/Row.js
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('MediaListRow', 'HistoryRow', className, selectedClass),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onDoubleClick: this.handleDoubleClick,
      onKeyPress: this.handleKeyPress,
      onClick: onClick
    }, void 0, thumbnail, (0, _jsx2.default)(_SongTitle.default, {
      className: "HistoryRow-song",
      size: "mediaRow",
      artist: media.artist,
      title: media.title
    }), (0, _jsx2.default)("div", {
      className: "HistoryRow-votes"
    }, void 0, _react.default.createElement(_Votes.default, stats)), (0, _jsx2.default)("div", {
      className: "HistoryRow-user"
    }, void 0, user.username), (0, _jsx2.default)("div", {
      className: "HistoryRow-time",
      dateTime: timestamp
    }, void 0, (0, _jsx2.default)(_TimeAgo.default, {
      timestamp: timestamp
    })), showActions && (0, _jsx2.default)(_Actions.default, {
      className: (0, _classnames.default)('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return HistoryRow;
}(_react.default.Component);

HistoryRow.defaultProps = {
  selected: false
};
HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  connectDragSource: _propTypes.default.func.isRequired,
  connectDragPreview: _propTypes.default.func.isRequired,
  media: _propTypes.default.object,
  selected: _propTypes.default.bool,
  selection: _propTypes.default.array,
  onOpenPreviewMediaDialog: _propTypes.default.func,
  onClick: _propTypes.default.func,
  makeActions: _propTypes.default.func
} : {};

var _default = enhance(HistoryRow); //# sourceMappingURL=Row.js.map


exports.default = _default;
//# sourceMappingURL=Row.js.map
