import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from "material-ui/es/Progress";
import ImportPanelHeader from '../../components/PlaylistManager/Import/ImportPanelHeader';

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "ImportPanel-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var LoadingPanel = function LoadingPanel(_ref) {
  var onClosePanel = _ref.onClosePanel;
  return _jsx("div", {
    className: "ImportPanel"
  }, void 0, _jsx(ImportPanelHeader, {
    onClosePanel: onClosePanel
  }), _ref2);
};

LoadingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  onClosePanel: PropTypes.func.isRequired
} : {};
export default LoadingPanel;
//# sourceMappingURL=LoadingPanel.js.map
