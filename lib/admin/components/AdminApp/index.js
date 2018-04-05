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

var _List = require('../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _CurrentPage = require('./CurrentPage');

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

require('../../index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_List.ListItemText, {
  primary: 'Main'
});

var _ref3 = (0, _jsx3.default)(_List.ListItemText, {
  primary: 'Users'
});

var _ref4 = (0, _jsx3.default)(_List.ListItemText, {
  primary: 'Bans'
});

var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return (0, _jsx3.default)('div', {
    className: 'AdminApp'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'AdminApp-menu'
  }, void 0, (0, _jsx3.default)(_List2.default, {}, void 0, (0, _jsx3.default)(_List.ListItem, {
    selected: currentView === 'main',
    className: 'AdminApp-menuItem',
    onClick: function onClick() {
      return onTransition('main');
    }
  }, void 0, _ref2), (0, _jsx3.default)(_List.ListItem, {
    selected: currentView === 'users',
    className: 'AdminApp-menuItem',
    onClick: function onClick() {
      return onTransition('users');
    }
  }, void 0, _ref3), (0, _jsx3.default)(_List.ListItem, {
    selected: currentView === 'bans',
    className: 'AdminApp-menuItem',
    onClick: function onClick() {
      return onTransition('bans');
    }
  }, void 0, _ref4))), (0, _jsx3.default)('div', {
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
