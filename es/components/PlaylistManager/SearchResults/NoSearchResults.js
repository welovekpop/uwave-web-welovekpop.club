import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Typography from "@material-ui/core/es/Typography";
import NoResultsIcon from "@material-ui/icons/es/Search";
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(NoResultsIcon, {
  className: "SearchResults-noneIcon"
});

var NoResults = function NoResults(_ref) {
  var t = _ref.t;
  return _jsx("div", {
    className: "SearchResults-none"
  }, void 0, _ref2, _jsx(Typography, {
    className: "SearchResults-noneHeader"
  }, void 0, t('playlists.search.noResults')), _jsx(Typography, {}, void 0, t('playlists.search.noResultsSub')));
};

NoResults.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired
} : {};
export default enhance(NoResults);
//# sourceMappingURL=NoSearchResults.js.map
