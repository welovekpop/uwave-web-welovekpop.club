import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'react-loadable';
import { CircularProgress } from "material-ui/es/Progress";
import Overlay from '../Overlay';
import OverlayHeader from '../Overlay/Header';

var _ref =
/*#__PURE__*/
_jsx(CircularProgress, {
  size: "100%"
});

var AdminComponent = loadable({
  loader: function loader() {
    return import('../../admin/containers/AdminApp'
    /* webpackChunkName: "admin" */
    );
  },
  loading: function loading() {
    return _ref;
  }
});

var _ref3 =
/*#__PURE__*/
_jsx("div", {
  className: "AppRow AppRow--middle AdminPanel"
}, void 0, _jsx(AdminComponent, {}));

var AdminProxy = function AdminProxy(_ref2) {
  var onCloseOverlay = _ref2.onCloseOverlay;
  return _jsx(Overlay, {
    className: "AppColumn AppColumn--full",
    direction: "top"
  }, void 0, _jsx(OverlayHeader, {
    title: "Administration",
    onCloseOverlay: onCloseOverlay,
    direction: "top"
  }), _ref3);
};

AdminProxy.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: PropTypes.func.isRequired
} : {};
export default AdminProxy;
//# sourceMappingURL=index.js.map
