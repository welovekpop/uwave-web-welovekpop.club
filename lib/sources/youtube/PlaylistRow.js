'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _playlistAdd = require('material-ui/svg-icons/av/playlist-add');

var _playlistAdd2 = _interopRequireDefault(_playlistAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_playlistAdd2.default, {
  color: '#fff'
});

var PlaylistRow = function (_React$Component) {
  (0, _inherits3.default)(PlaylistRow, _React$Component);

  function PlaylistRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PlaylistRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportPlaylist = function () {
      _this.props.onImport();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PlaylistRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        playlist = _props.playlist,
        attrs = (0, _objectWithoutProperties3.default)(_props, ['className', 'playlist']);

    var thumbnail = (0, _jsx3.default)('div', {
      className: 'MediaListRow-thumb'
    }, void 0, (0, _jsx3.default)('img', {
      className: 'MediaListRow-image',
      src: playlist.thumbnail,
      alt: ''
    }, playlist.id));

    return _react2.default.createElement('div', (0, _extends3.default)({
      className: (0, _classnames2.default)('MediaListRow', 'src-youtube-PlaylistRow', className)
    }, attrs), thumbnail, (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistRow-info',
      title: playlist.description
    }, void 0, (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistRow-name'
    }, void 0, playlist.name), (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistRow-size'
    }, void 0, 'Items: ', playlist.size)), (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistRow-import'
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      style: {
        width: '100%',
        height: '100%'
      },
      onClick: this.handleImportPlaylist
    }, void 0, _ref)));
  };

  return PlaylistRow;
}(_react2.default.Component);

exports.default = PlaylistRow;

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  playlist: _propTypes2.default.object.isRequired,

  onImport: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=PlaylistRow.js.map
//# sourceMappingURL=PlaylistRow.js.map
