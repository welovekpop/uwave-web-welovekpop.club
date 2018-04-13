import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import find from 'array-find';
import compose from 'recompose/compose';
import componentFromProp from 'recompose/componentFromProp';
import mapProps from 'recompose/mapProps';
import { roleColorsSelector } from '../../selectors/configSelectors';
var enhance = compose(connect(createStructuredSelector({
  colors: roleColorsSelector
}), {}), mapProps(function (_ref) {
  var colors = _ref.colors,
      role = _ref.role,
      roles = _ref.roles,
      props = _objectWithoutProperties(_ref, ["colors", "role", "roles"]);

  return _objectSpread({}, props, {
    style: {
      color: (role ? colors[role] : colors[find(roles, function (r) {
        return colors[r];
      })]) || colors.default
    },
    component: props.component || 'span'
  });
}));
var RoleColor = componentFromProp('component');
export default enhance(RoleColor);
//# sourceMappingURL=index.js.map
