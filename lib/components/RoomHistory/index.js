'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Header = require('../Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

var _HistoryList = require('./HistoryList');

var _HistoryList2 = _interopRequireDefault(_HistoryList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var RoomHistory = function RoomHistory(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog,
      props = (0, _objectWithoutProperties3.default)(_ref, ['t', 'className', 'onCloseOverlay', 'onOpenAddMediaMenu', 'onOpenPreviewMediaDialog']);

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('RoomHistory', className)
  }, void 0, (0, _jsx3.default)(_Header2.default, {
    direction: 'top',
    className: 'AppRow AppRow--top',
    title: t('history.title'),
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx3.default)('div', {
    className: 'RoomHistory-body AppRow AppRow--middle'
  }, void 0, _react2.default.createElement(_HistoryList2.default, (0, _extends3.default)({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog
  }, props))));
};

RoomHistory.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  onCloseOverlay: _propTypes2.default.func.isRequired,
  onOpenAddMediaMenu: _propTypes2.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(RoomHistory);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
