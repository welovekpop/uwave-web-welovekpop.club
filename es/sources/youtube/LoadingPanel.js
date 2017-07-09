import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import ImportPanelHeader from '../../components/PlaylistManager/Import/ImportPanelHeader';

var _ref2 = _jsx('div', {
  className: 'ImportPanel-loading'
}, void 0, _jsx(Loader, {
  size: 'large'
}));

var LoadingPanel = function LoadingPanel(_ref) {
  var onClosePanel = _ref.onClosePanel;
  return _jsx('div', {
    className: 'ImportPanel'
  }, void 0, _jsx(ImportPanelHeader, {
    onClosePanel: onClosePanel
  }), _ref2);
};

LoadingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  onClosePanel: PropTypes.func.isRequired
} : {};

export default LoadingPanel;
//# sourceMappingURL=LoadingPanel.js.map
