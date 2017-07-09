import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import MoveToFirstIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import Action from './Action';

var _ref2 = _jsx(MoveToFirstIcon, {
  color: '#fff'
});

var MoveToFirst = function MoveToFirst(_ref) {
  var onFirst = _ref.onFirst,
      props = _objectWithoutProperties(_ref, ['onFirst']);

  return React.createElement(
    Action,
    _extends({}, props, { onAction: onFirst }),
    _ref2
  );
};

MoveToFirst.propTypes = process.env.NODE_ENV !== "production" ? {
  onFirst: PropTypes.func.isRequired
} : {};

export default MoveToFirst;
//# sourceMappingURL=MoveToFirst.js.map
