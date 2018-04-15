import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "material-ui/es/IconButton";
import { ListItem } from "material-ui/es/List";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, _jsx(SearchIcon, {}));

var _ref3 =
/*#__PURE__*/
_jsx(CloseIcon, {
  nativeColor: "#777"
});

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return _jsx(ListItem, {
    role: "menuitem",
    className: cx('PlaylistMenuRow', 'PlaylistMenuRow--search', className)
  }, void 0, _jsx("button", {
    className: "PlaylistMenuRow-title",
    onClick: onClick
  }, void 0, _ref2, "\"", query, "\""), _jsx("div", {
    className: "PlaylistMenuRow-count"
  }, void 0, _jsx(IconButton, {
    className: "PlaylistMenuRow-closeButton",
    onClick: onClose
  }, void 0, _ref3)));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  query: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
} : {};
export default SearchResultsRow;
//# sourceMappingURL=SearchResultsRow.js.map
