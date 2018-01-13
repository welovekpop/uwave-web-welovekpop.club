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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var closeButtonStyle = {
  width: 44,
  height: 44,
  padding: 10,
  marginRight: -10
};

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, (0, _jsx3.default)(_search2.default, {
  color: '#fff'
}));

var _ref3 = (0, _jsx3.default)(_close2.default, {
  color: '#777'
});

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return (0, _jsx3.default)('div', {
    role: 'menuitem',
    className: (0, _classnames2.default)('PlaylistMenuRow', 'PlaylistMenuRow--search', className)
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'PlaylistMenuRow-title',
    onClick: onClick
  }, void 0, _ref2, '"', query, '"'), (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-count'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    style: closeButtonStyle,
    onClick: onClose
  }, void 0, _ref3))));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  query: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
} : {};

exports.default = SearchResultsRow;
//# sourceMappingURL=SearchResultsRow.js.map
//# sourceMappingURL=SearchResultsRow.js.map
