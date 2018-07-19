import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Typography from "@material-ui/core/es/Typography";
import EmptyIcon from "@material-ui/icons/es/PlaylistAdd";
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(EmptyIcon, {
  className: "PlaylistPanel-emptyIcon"
});

var PlaylistFilterEmpty = function PlaylistFilterEmpty(_ref) {
  var t = _ref.t;
  return _jsx("div", {
    className: "PlaylistPanel-empty"
  }, void 0, _ref2, _jsx(Typography, {
    className: "PlaylistPanel-emptyHeader"
  }, void 0, t('playlists.playlist.filterEmpty')), _jsx(Typography, {}, void 0, t('playlists.playlist.filterEmptySub')));
};

PlaylistFilterEmpty.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired
} : {};
export default enhance(PlaylistFilterEmpty);
//# sourceMappingURL=PlaylistFilterEmpty.js.map
