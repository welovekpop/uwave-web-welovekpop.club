import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from '../../../components/List';
import CurrentPage from './CurrentPage';
import '../../index.css';

var _ref2 =
/*#__PURE__*/
_jsx(ListItemText, {
  primary: "Main"
});

var _ref3 =
/*#__PURE__*/
_jsx(ListItemText, {
  primary: "Users"
});

var _ref4 =
/*#__PURE__*/
_jsx(ListItemText, {
  primary: "Bans"
});

var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return _jsx("div", {
    className: "AdminApp"
  }, void 0, _jsx("div", {
    className: "AdminApp-menu"
  }, void 0, _jsx(List, {}, void 0, _jsx(ListItem, {
    selected: currentView === 'main',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('main');
    }
  }, void 0, _ref2), _jsx(ListItem, {
    selected: currentView === 'users',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('users');
    }
  }, void 0, _ref3), _jsx(ListItem, {
    selected: currentView === 'bans',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('bans');
    }
  }, void 0, _ref4))), _jsx("div", {
    className: "AdminApp-page"
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
