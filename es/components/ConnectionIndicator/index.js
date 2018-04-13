import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Card from "material-ui/es/Card/Card";
import CardHeader from "material-ui/es/Card/CardHeader";
import OfflineIcon from './OfflineIcon';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(OfflineIcon, {});

var ConnectionIndicator = function ConnectionIndicator(_ref) {
  var isConnected = _ref.isConnected,
      t = _ref.t;
  return isConnected ? null : _jsx("div", {
    className: "ConnectionIndicator-position"
  }, void 0, _jsx(Card, {}, void 0, _jsx(CardHeader, {
    title: t('server.connectionLost'),
    subheader: t('server.reconnecting'),
    avatar: _ref2
  })));
};

ConnectionIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired
} : {};
export default enhance(ConnectionIndicator);
//# sourceMappingURL=index.js.map
