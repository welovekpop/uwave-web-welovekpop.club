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

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Header = require('../Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Loader2.default, {
  size: 'large'
});

var AdminComponent = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(() => require('../../admin/containers/AdminApp'));
  },
  loading: function loading() {
    return _ref;
  }
});

var _ref3 = (0, _jsx3.default)('div', {
  className: 'AppRow AppRow--middle AdminPanel'
}, void 0, (0, _jsx3.default)(AdminComponent, {}));

var AdminProxy = function AdminProxy(_ref2) {
  var onCloseOverlay = _ref2.onCloseOverlay;
  return (0, _jsx3.default)(_Overlay2.default, {
    className: 'AppColumn AppColumn--full',
    direction: 'top'
  }, void 0, (0, _jsx3.default)(_Header2.default, {
    title: 'Administration',
    onCloseOverlay: onCloseOverlay,
    direction: 'top'
  }), _ref3);
};

AdminProxy.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: _propTypes2.default.func.isRequired
} : {};

exports.default = AdminProxy;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
