"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireWildcard(require("../../../components/List"));

var _CurrentPage = _interopRequireDefault(require("./CurrentPage"));

require("../../index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_List.ListItemText, {
  primary: "Main"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_List.ListItemText, {
  primary: "Users"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_List.ListItemText, {
  primary: "Bans"
});

var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return (0, _jsx2.default)("div", {
    className: "AdminApp"
  }, void 0, (0, _jsx2.default)("div", {
    className: "AdminApp-menu"
  }, void 0, (0, _jsx2.default)(_List.default, {}, void 0, (0, _jsx2.default)(_List.ListItem, {
    selected: currentView === 'main',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('main');
    }
  }, void 0, _ref2), (0, _jsx2.default)(_List.ListItem, {
    selected: currentView === 'users',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('users');
    }
  }, void 0, _ref3), (0, _jsx2.default)(_List.ListItem, {
    selected: currentView === 'bans',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('bans');
    }
  }, void 0, _ref4))), (0, _jsx2.default)("div", {
    className: "AdminApp-page"
  }, void 0, (0, _jsx2.default)(_CurrentPage.default, {
    page: currentView
  })));
};

AdminApp.propTypes = process.env.NODE_ENV !== "production" ? {
  currentView: _propTypes.default.string.isRequired,
  onTransition: _propTypes.default.func.isRequired
} : {};
var _default = AdminApp; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
