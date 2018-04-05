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

var _MediaList = require('../MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistPanel = function PlaylistPanel(_ref) {
  var items = _ref.items;
  return (0, _jsx3.default)('div', {
    className: 'PlaylistPanel'
  }, void 0, (0, _jsx3.default)(_MediaList2.default, {
    className: 'PlaylistPanel-media',
    media: items
  }));
};

PlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  items: _propTypes2.default.array.isRequired
} : {};

exports.default = PlaylistPanel;
//# sourceMappingURL=PlaylistPanel.js.map
//# sourceMappingURL=PlaylistPanel.js.map
