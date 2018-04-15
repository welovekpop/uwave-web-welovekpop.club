"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _Progress = require("material-ui/Progress");

var _Menu = require("material-ui/Menu");

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _DDItemTypes = require("../../../constants/DDItemTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playlistTarget = {
  drop: function drop(_ref, monitor) {
    var playlist = _ref.playlist,
        onAddToPlaylist = _ref.onAddToPlaylist;

    var _monitor$getItem = monitor.getItem(),
        media = _monitor$getItem.media;

    onAddToPlaylist(playlist, media);
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var enhance = (0, _reactDnd.DropTarget)(_DDItemTypes.MEDIA, playlistTarget, collect);
var itemClasses = {
  root: 'PlaylistMenuRow',
  selected: 'is-selected'
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, (0, _jsx2.default)(_Check.default, {}));

var PlaylistRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PlaylistRow, _React$Component);

  function PlaylistRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PlaylistRow.prototype;

  _proto.render = function render() {
    var _props = this.props,
        playlist = _props.playlist,
        selected = _props.selected,
        onClick = _props.onClick,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver;
    var activeClass = playlist.active && 'is-active';
    var droppableClass = isOver && 'is-droppable';
    var icon;

    if (playlist.creating) {
      icon = _ref2;
    } else if (playlist.active) {
      icon = _ref3;
    }

    return connectDropTarget((0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)(_Menu.MenuItem, {
      selected: selected,
      className: (0, _classnames.default)(activeClass, droppableClass),
      classes: itemClasses,
      onClick: onClick
    }, void 0, (0, _jsx2.default)("div", {
      className: "PlaylistMenuRow-title"
    }, void 0, icon, playlist.name), (0, _jsx2.default)("div", {
      className: "PlaylistMenuRow-count"
    }, void 0, playlist.size))));
  };

  return PlaylistRow;
}(_react.default.Component);

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  playlist: _propTypes.default.object,
  selected: _propTypes.default.bool,
  isOver: _propTypes.default.bool.isRequired,
  connectDropTarget: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onAddToPlaylist: _propTypes.default.func
} : {};

var _default = enhance(PlaylistRow); //# sourceMappingURL=Row.js.map


exports.default = _default;
//# sourceMappingURL=Row.js.map
