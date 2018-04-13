import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { CircularProgress } from "material-ui/es/Progress";
import ImportIcon from '@material-ui/icons/Input';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var _ref3 =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, _jsx(ImportIcon, {}));

var PlaylistImportRow = function PlaylistImportRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      importing = _ref.importing,
      onClick = _ref.onClick;
  var icon;

  if (importing) {
    icon = _ref2;
  } else {
    icon = _ref3;
  }

  return _jsx("button", {
    role: "menuitem",
    className: cx('PlaylistMenuRow', 'PlaylistMenuRow--import', className),
    onClick: onClick
  }, void 0, _jsx("div", {
    className: "PlaylistMenuRow-content"
  }, void 0, _jsx("div", {
    className: "PlaylistMenuRow-title"
  }, void 0, icon, t('playlists.import.title'))));
};

PlaylistImportRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  importing: PropTypes.bool,
  onClick: PropTypes.func.isRequired
} : {};
export default enhance(PlaylistImportRow);
//# sourceMappingURL=PlaylistImportRow.js.map
