import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import nest from 'recompose/nest';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import hoistStatics from 'hoist-non-react-statics';
import loadable from 'react-loadable';
import { CircularProgress } from "material-ui/es/Progress";
import Overlay from '../Overlay';
import OverlayContent from '../Overlay/Content';
import OverlayHeader from '../Overlay/Header';
import { closeAll } from '../../actions/OverlayActionCreators';

var _ref3 =
/*#__PURE__*/
_jsx(CircularProgress, {
  className: "LoadingOverlay-spinner",
  thickness: 1.6
});

export default function createLazyOverlay(_ref) {
  var loader = _ref.loader,
      title = _ref.title,
      _ref$OverlayComponent = _ref.OverlayComponent,
      OverlayComponent = _ref$OverlayComponent === void 0 ? Overlay : _ref$OverlayComponent;
  if (typeof loader !== 'function') throw new TypeError('loader must be a function');
  var enhance = compose(translate(), connect(null, {
    onCloseOverlay: closeAll
  }));

  var LoadingOverlay = function LoadingOverlay(_ref2) {
    var t = _ref2.t,
        pastDelay = _ref2.pastDelay,
        onCloseOverlay = _ref2.onCloseOverlay;
    return _jsx(React.Fragment, {}, void 0, _jsx(OverlayHeader, {
      title: title ? title(t) : '...',
      onCloseOverlay: onCloseOverlay
    }), _jsx(OverlayContent, {
      className: "LoadingOverlay-body"
    }, void 0, pastDelay && _ref3));
  };

  LoadingOverlay.propTypes = process.env.NODE_ENV !== "production" ? {
    t: PropTypes.func.isRequired,
    pastDelay: PropTypes.bool.isRequired,
    onCloseOverlay: PropTypes.func.isRequired
  } : {};
  var LazyOverlay = loadable({
    loader: loader,
    loading: enhance(LoadingOverlay)
  });
  return hoistStatics(nest(OverlayComponent, LazyOverlay), LazyOverlay);
}
//# sourceMappingURL=index.js.map
