'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Header = require('../../Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

var _MediaSearchBar = require('../../../containers/MediaSearchBar');

var _MediaSearchBar2 = _interopRequireDefault(_MediaSearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 = (0, _jsx3.default)(_MediaSearchBar2.default, {
  className: 'PlaylistHeader-search'
});

var PlaylistManagerHeader = function PlaylistManagerHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx3.default)(_Header2.default, {
    className: (0, _classnames2.default)('PlaylistHeader', className),
    title: t('playlists.title'),
    onCloseOverlay: onCloseOverlay
  }, void 0, _ref2);
};

PlaylistManagerHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  t: _propTypes2.default.func.isRequired,
  onCloseOverlay: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(PlaylistManagerHeader);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
