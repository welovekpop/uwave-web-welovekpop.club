import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

var closeButtonStyle = {
  width: 44,
  height: 44,
  padding: 10,
  marginRight: -10
};

var _ref2 = _jsx('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, _jsx(SearchIcon, {
  color: '#fff'
}));

var _ref3 = _jsx(CloseIcon, {
  color: '#777'
});

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return _jsx('div', {
    role: 'menuitem',
    className: cx('PlaylistMenuRow', 'PlaylistMenuRow--search', className)
  }, void 0, _jsx('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, _jsx('button', {
    className: 'PlaylistMenuRow-title',
    onClick: onClick
  }, void 0, _ref2, '"', query, '"'), _jsx('div', {
    className: 'PlaylistMenuRow-count'
  }, void 0, _jsx(IconButton, {
    style: closeButtonStyle,
    onClick: onClose
  }, void 0, _ref3))));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  query: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
} : {};

export default SearchResultsRow;
//# sourceMappingURL=SearchResultsRow.js.map
