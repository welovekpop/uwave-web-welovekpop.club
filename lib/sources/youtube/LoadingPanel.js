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

var _Loader = require('../../components/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _ImportPanelHeader = require('../../components/PlaylistManager/Import/ImportPanelHeader');

var _ImportPanelHeader2 = _interopRequireDefault(_ImportPanelHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('div', {
  className: 'ImportPanel-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'large'
}));

var LoadingPanel = function LoadingPanel(_ref) {
  var onClosePanel = _ref.onClosePanel;
  return (0, _jsx3.default)('div', {
    className: 'ImportPanel'
  }, void 0, (0, _jsx3.default)(_ImportPanelHeader2.default, {
    onClosePanel: onClosePanel
  }), _ref2);
};

LoadingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  onClosePanel: _propTypes2.default.func.isRequired
} : {};

exports.default = LoadingPanel;
//# sourceMappingURL=LoadingPanel.js.map
//# sourceMappingURL=LoadingPanel.js.map
