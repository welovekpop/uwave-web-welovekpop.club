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

var _List = require('../../../components/List');

var _CurrentPage = require('./CurrentPage');

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return (0, _jsx3.default)('div', {
    className: 'AdminApp'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'AdminApp-menu'
  }, void 0, (0, _jsx3.default)(_List.List, {}, void 0, (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Main',
    className: (0, _classnames2.default)('AdminApp-menuItem', currentView === 'main' && 'is-selected'),
    selected: currentView === 'main',
    onClick: function onClick() {
      return onTransition('main');
    }
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Users',
    className: (0, _classnames2.default)('AdminApp-menuItem', currentView === 'users' && 'is-selected'),
    selected: currentView === 'users',
    onClick: function onClick() {
      return onTransition('users');
    }
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Bans',
    className: (0, _classnames2.default)('AdminApp-menuItem', currentView === 'bans' && 'is-selected'),
    selected: currentView === 'bans',
    onClick: function onClick() {
      return onTransition('bans');
    }
  }))), (0, _jsx3.default)('div', {
    className: 'AdminApp-page'
  }, void 0, (0, _jsx3.default)(_CurrentPage2.default, {
    page: currentView
  })));
};

AdminApp.propTypes = process.env.NODE_ENV !== "production" ? {
  currentView: _propTypes2.default.string.isRequired,
  onTransition: _propTypes2.default.func.isRequired
} : {};

exports.default = AdminApp;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
