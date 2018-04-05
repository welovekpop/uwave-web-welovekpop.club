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

var _Progress = require('material-ui/Progress');

var _Check = require('material-ui-icons/Check');

var _Check2 = _interopRequireDefault(_Check);

var _DDItemTypes = require('../../../constants/DDItemTypes');

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

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-loading'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  size: '100%'
}));

var _ref3 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, (0, _jsx3.default)(_Check2.default, {}));

var PlaylistRow = function (_React$Component) {
  (0, _inherits3.default)(PlaylistRow, _React$Component);

  function PlaylistRow() {
    (0, _classCallCheck3.default)(this, PlaylistRow);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  PlaylistRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        playlist = _props.playlist,
        selected = _props.selected,
        onClick = _props.onClick,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver;

    var activeClass = playlist.active && 'is-active';
    var selectedClass = selected && 'is-selected';
    var droppableClass = isOver && 'is-droppable';

    var icon = void 0;
    if (playlist.creating) {
      icon = _ref2;
    } else if (playlist.active) {
      icon = _ref3;
    }

    return connectDropTarget((0, _jsx3.default)('button', {
      role: 'menuitem',
      className: (0, _classnames2.default)('PlaylistMenuRow', activeClass, selectedClass, droppableClass, className),
      onClick: onClick
    }, void 0, (0, _jsx3.default)('div', {
      className: 'PlaylistMenuRow-content'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'PlaylistMenuRow-title'
    }, void 0, icon, playlist.name), (0, _jsx3.default)('div', {
      className: 'PlaylistMenuRow-count'
    }, void 0, playlist.size))));
  };

  return PlaylistRow;
}(_react2.default.Component);

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  playlist: _propTypes2.default.object,
  selected: _propTypes2.default.bool,
  isOver: _propTypes2.default.bool.isRequired,

  connectDropTarget: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  // Used in the drop handler above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  onAddToPlaylist: _propTypes2.default.func
} : {};

exports.default = enhance(PlaylistRow);
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
