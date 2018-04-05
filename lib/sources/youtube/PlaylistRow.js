'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _PlaylistAdd = require('material-ui-icons/PlaylistAdd');

var _PlaylistAdd2 = _interopRequireDefault(_PlaylistAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_PlaylistAdd2.default, {});

var PlaylistRow = function PlaylistRow(_ref) {
  var className = _ref.className,
      playlist = _ref.playlist,
      onImport = _ref.onImport,
      attrs = (0, _objectWithoutProperties3.default)(_ref, ['className', 'playlist', 'onImport']);

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
  }, void 0, 'Items: ', playlist.size)), (0, _jsx3.default)(_IconButton2.default, {
    className: 'src-youtube-PlaylistRow-import',
    onClick: onImport
  }, void 0, _ref2));
};

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  playlist: _propTypes2.default.object.isRequired,
  onImport: _propTypes2.default.func.isRequired
} : {};

exports.default = PlaylistRow;
//# sourceMappingURL=PlaylistRow.js.map
//# sourceMappingURL=PlaylistRow.js.map
