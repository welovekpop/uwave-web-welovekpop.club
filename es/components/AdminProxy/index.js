import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'react-loadable';
import Loader from '../Loader';
import Overlay from '../Overlay';
import OverlayHeader from '../Overlay/Header';

var _ref = _jsx(Loader, {
  size: 'large'
});

var AdminComponent = loadable({
  loader: function loader() {
    return import('../../admin/containers/AdminApp');
  },
  LoadingComponent: function LoadingComponent() {
    return _ref;
  }
});

var _ref3 = _jsx('div', {
  className: 'AppRow AppRow--middle AdminPanel'
}, void 0, _jsx(AdminComponent, {}));

var AdminProxy = function AdminProxy(_ref2) {
  var onCloseOverlay = _ref2.onCloseOverlay;
  return _jsx(Overlay, {
    className: 'AppColumn AppColumn--full',
    direction: 'top'
  }, void 0, _jsx(OverlayHeader, {
    title: 'Administration',
    onCloseOverlay: onCloseOverlay,
    direction: 'top'
  }), _ref3);
};

AdminProxy.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: PropTypes.func.isRequired
} : {};

export default AdminProxy;
//# sourceMappingURL=index.js.map
