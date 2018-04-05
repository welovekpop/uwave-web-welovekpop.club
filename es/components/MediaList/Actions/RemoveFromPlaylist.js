import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from 'material-ui-icons/Delete';
import Action from './Action';

var _ref2 = _jsx(DeleteIcon, {});

var RemoveFromPlaylist = function RemoveFromPlaylist(_ref) {
  var onRemove = _ref.onRemove,
      props = _objectWithoutProperties(_ref, ['onRemove']);

  return React.createElement(
    Action,
    _extends({}, props, { onAction: onRemove }),
    _ref2
  );
};

RemoveFromPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  onRemove: PropTypes.func.isRequired
} : {};

export default RemoveFromPlaylist;
//# sourceMappingURL=RemoveFromPlaylist.js.map
