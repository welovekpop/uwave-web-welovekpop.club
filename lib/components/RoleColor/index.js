"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _arrayFind = _interopRequireDefault(require("array-find"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _componentFromProp = _interopRequireDefault(require("recompose/componentFromProp"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _configSelectors = require("../../selectors/configSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactRedux.connect)((0, _reselect.createStructuredSelector)({
  colors: _configSelectors.roleColorsSelector
}), {}), (0, _mapProps.default)(function (_ref) {
  var colors = _ref.colors,
      role = _ref.role,
      roles = _ref.roles,
      props = (0, _objectWithoutProperties2.default)(_ref, ["colors", "role", "roles"]);
  return (0, _extends2.default)({}, props, {
    style: {
      color: (role ? colors[role] : colors[(0, _arrayFind.default)(roles, function (r) {
        return colors[r];
      })]) || colors.default
    },
    component: props.component || 'span'
  });
}));
var RoleColor = (0, _componentFromProp.default)('component');

var _default = enhance(RoleColor); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
