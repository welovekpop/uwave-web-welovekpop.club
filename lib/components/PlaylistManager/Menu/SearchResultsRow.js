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

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, (0, _jsx3.default)(_search2.default, {
  color: '#fff'
}));

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      size = _ref.size,
      onClick = _ref.onClick;
  return (0, _jsx3.default)('button', {
    role: 'menuitem',
    className: (0, _classnames2.default)('PlaylistMenuRow', 'PlaylistMenuRow--search', className),
    onClick: onClick
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-title'
  }, void 0, _ref2, '"', query, '"'), (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-count'
  }, void 0, size)));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  query: _propTypes2.default.string,
  size: _propTypes2.default.number,
  onClick: _propTypes2.default.func
} : {};

exports.default = SearchResultsRow;
//# sourceMappingURL=SearchResultsRow.js.map
//# sourceMappingURL=SearchResultsRow.js.map
