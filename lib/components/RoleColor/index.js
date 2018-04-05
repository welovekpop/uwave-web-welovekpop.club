'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _componentFromProp = require('recompose/componentFromProp');

var _componentFromProp2 = _interopRequireDefault(_componentFromProp);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _configSelectors = require('../../selectors/configSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactRedux.connect)((0, _reselect.createStructuredSelector)({
  colors: _configSelectors.roleColorsSelector
}), {}), (0, _mapProps2.default)(function (_ref) {
  var colors = _ref.colors,
      role = _ref.role,
      roles = _ref.roles,
      props = (0, _objectWithoutProperties3.default)(_ref, ['colors', 'role', 'roles']);

  return (0, _extends3.default)({}, props, {
    style: {
      color: (role ? colors[role] : colors[(0, _arrayFind2.default)(roles, function (r) {
        return colors[r];
      })]) || colors.default
    },
    component: props.component || 'span'
  });
}));

var RoleColor = (0, _componentFromProp2.default)('component');

exports.default = enhance(RoleColor);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
