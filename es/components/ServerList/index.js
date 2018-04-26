import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import { CircularProgress } from "material-ui/es/Progress";
import loadable from 'react-loadable';

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "ServerList ServerList--loading"
}, void 0, _jsx(CircularProgress, {}));

var ServerList = loadable({
  loader: function loader() {
    return import('@u-wave/react-server-list'
    /* webpackChunkName: "serverList" */
    );
  },
  loading: function loading() {
    return _ref;
  },
  render: function render(loaded, props) {
    var Container = loaded.Container;
    return _jsx("div", {
      className: "ServerList"
    }, void 0, React.createElement(Container, props));
  }
});
export default ServerList;
//# sourceMappingURL=index.js.map
