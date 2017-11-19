'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Card = require('material-ui/Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('material-ui/Card/CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _OfflineIcon = require('./OfflineIcon');

var _OfflineIcon2 = _interopRequireDefault(_OfflineIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var positionStyle = {
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 55
};

var _ref2 = (0, _jsx3.default)(_OfflineIcon2.default, {});

var ConnectionIndicator = function ConnectionIndicator(_ref) {
  var isConnected = _ref.isConnected,
      t = _ref.t;
  return isConnected ? null : (0, _jsx3.default)('div', {
    style: positionStyle
  }, void 0, (0, _jsx3.default)(_Card2.default, {}, void 0, (0, _jsx3.default)(_CardHeader2.default, {
    title: t('server.connectionLost'),
    subtitle: t('server.reconnecting'),
    avatar: _ref2
  })));
};

ConnectionIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  isConnected: _propTypes2.default.bool.isRequired
} : {};

exports.default = enhance(ConnectionIndicator);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
