import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '../../../components/List';
import CurrentPage from './CurrentPage';

import './index.css';

var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return _jsx('div', {
    className: 'AdminApp'
  }, void 0, _jsx('div', {
    className: 'AdminApp-menu'
  }, void 0, _jsx(List, {}, void 0, _jsx(ListItem, {
    primaryText: 'Main',
    className: cx('AdminApp-menuItem', currentView === 'main' && 'is-selected'),
    selected: currentView === 'main',
    onClick: function onClick() {
      return onTransition('main');
    }
  }), _jsx(ListItem, {
    primaryText: 'Users',
    className: cx('AdminApp-menuItem', currentView === 'users' && 'is-selected'),
    selected: currentView === 'users',
    onClick: function onClick() {
      return onTransition('users');
    }
  }), _jsx(ListItem, {
    primaryText: 'Bans',
    className: cx('AdminApp-menuItem', currentView === 'bans' && 'is-selected'),
    selected: currentView === 'bans',
    onClick: function onClick() {
      return onTransition('bans');
    }
  }))), _jsx('div', {
    className: 'AdminApp-page'
  }, void 0, _jsx(CurrentPage, {
    page: currentView
  })));
};

AdminApp.propTypes = process.env.NODE_ENV !== "production" ? {
  currentView: PropTypes.string.isRequired,
  onTransition: PropTypes.func.isRequired
} : {};

export default AdminApp;
//# sourceMappingURL=index.js.map
