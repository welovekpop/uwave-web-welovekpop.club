'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('../../../components/Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('../../../components/Overlay/Content');

var _Content2 = _interopRequireDefault(_Content);

var _PlaylistPanel = require('./PlaylistPanel');

var _PlaylistPanel2 = _interopRequireDefault(_PlaylistPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistManager = function PlaylistManager(_ref) {
  var selectedPlaylist = _ref.selectedPlaylist,
      selectedItems = _ref.selectedItems,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx3.default)('div', {
    className: 'PlaylistManager'
  }, void 0, (0, _jsx3.default)(_Header2.default, {
    className: 'PlaylistHeader',
    title: selectedPlaylist.name,
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx3.default)(_Content2.default, {}, void 0, (0, _jsx3.default)(_PlaylistPanel2.default, {
    items: selectedItems
  })));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedPlaylist: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  selectedItems: _propTypes2.default.array.isRequired,
  onCloseOverlay: _propTypes2.default.func.isRequired
} : {};

exports.default = PlaylistManager;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
