import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'material-ui/svg-icons/action/search';

var _ref2 = _jsx('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, _jsx(SearchIcon, {
  color: '#fff'
}));

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      size = _ref.size,
      onClick = _ref.onClick;
  return _jsx('button', {
    role: 'menuitem',
    className: cx('PlaylistMenuRow', 'PlaylistMenuRow--search', className),
    onClick: onClick
  }, void 0, _jsx('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, _jsx('div', {
    className: 'PlaylistMenuRow-title'
  }, void 0, _ref2, '"', query, '"'), _jsx('div', {
    className: 'PlaylistMenuRow-count'
  }, void 0, size)));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  query: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func
} : {};

export default SearchResultsRow;
//# sourceMappingURL=SearchResultsRow.js.map
