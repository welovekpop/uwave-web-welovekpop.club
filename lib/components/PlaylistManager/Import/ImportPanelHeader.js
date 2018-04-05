'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('material-ui-icons/Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 = (0, _jsx3.default)(_Close2.default, {});

var ImportPanelHeader = function ImportPanelHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      children = _ref.children,
      onClosePanel = _ref.onClosePanel;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('ImportPanelHeader', className)
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ImportPanelHeader-content'
  }, void 0, children), (0, _jsx3.default)(_Tooltip2.default, {
    title: t('close'),
    placement: 'top'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    onClick: onClosePanel
  }, void 0, _ref2)));
};

ImportPanelHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  t: _propTypes2.default.func.isRequired,
  onClosePanel: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(ImportPanelHeader);
//# sourceMappingURL=ImportPanelHeader.js.map
//# sourceMappingURL=ImportPanelHeader.js.map
