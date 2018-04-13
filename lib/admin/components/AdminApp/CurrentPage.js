"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _componentFromProp = _interopRequireDefault(require("recompose/componentFromProp"));

var _Main = _interopRequireDefault(require("../Main"));

var _UsersList = _interopRequireDefault(require("../../containers/UsersList"));

var _BansList = _interopRequireDefault(require("../../containers/BansList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pages = {
  main: _Main.default,
  users: _UsersList.default,
  bans: _BansList.default
};
var enhance = (0, _mapProps.default)(function (props) {
  return {
    component: pages[props.page]
  };
});
var CurrentPage = enhance((0, _componentFromProp.default)('component'));
var _default = CurrentPage; //# sourceMappingURL=CurrentPage.js.map

exports.default = _default;
//# sourceMappingURL=CurrentPage.js.map
