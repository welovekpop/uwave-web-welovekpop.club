import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import BaseSearchBar from '../../SearchBar';
import SourcePicker from './SourcePicker';

var SearchBar = function SearchBar(_ref) {
  var className = _ref.className,
      source = _ref.source,
      onSubmit = _ref.onSubmit,
      onSourceChange = _ref.onSourceChange;
  return _jsx(BaseSearchBar, {
    className: className,
    onSubmit: onSubmit
  }, void 0, _jsx(SourcePicker, {
    className: "SearchBar-source",
    selected: source,
    onChange: onSourceChange
  }));
};

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSourceChange: PropTypes.func.isRequired
} : {};
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map
