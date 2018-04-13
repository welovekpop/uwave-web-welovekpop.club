"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _formatDuration = _interopRequireDefault(require("format-duration"));

var _DDItemTypes = require("../../constants/DDItemTypes");

var _MediaLoadingIndicator = _interopRequireDefault(require("./MediaLoadingIndicator"));

var _MediaThumbnail = _interopRequireDefault(require("./MediaThumbnail"));

var _Actions = _interopRequireDefault(require("./Actions"));

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

var enhance = (0, _reactDnd.DragSource)(_DDItemTypes.MEDIA, mediaSource, collect);

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MediaLoadingIndicator.default, {
  className: "MediaListRow-loader"
});

var Row =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Row, _React$Component);

  function Row() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleKeyPress = function (event) {
      if (event.code === 'Space') {
        _this.props.onClick();
      }
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media);
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Row.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)());
  };

  _proto.render = function render() {
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
    var duration = 'start' in media // playlist item
    ? media.end - media.start // search result
    : media.duration;
    return connectDragSource( // Bit uneasy about this, but turning the entire row into a button seems
    // wrong as well! Since we nest media action <button>s inside it, too.
    //
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('MediaListRow', className, selectedClass, loadingClass),
      onDoubleClick: this.handleDoubleClick,
      onKeyPress: this.handleKeyPress,
      onClick: onClick
    }, void 0, media.loading ? _ref2 : (0, _jsx2.default)(_MediaThumbnail.default, {
      url: media.thumbnail
    }), (0, _jsx2.default)("div", {
      className: "MediaListRow-artist",
      title: media.artist
    }, void 0, media.artist), (0, _jsx2.default)("div", {
      className: "MediaListRow-title",
      title: media.title
    }, void 0, media.title), (0, _jsx2.default)("div", {
      className: "MediaListRow-duration"
    }, void 0, (0, _formatDuration.default)(duration * 1000)), (0, _jsx2.default)(_Actions.default, {
      className: (0, _classnames.default)('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return Row;
}(_react.default.Component);

Row.defaultProps = {
  selected: false
};
Row.propTypes = process.env.NODE_ENV !== "production" ? {
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

var _default = enhance(Row); //# sourceMappingURL=Row.js.map


exports.default = _default;
//# sourceMappingURL=Row.js.map
