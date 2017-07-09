import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from 'material-ui/svg-icons/content/add';

import Action from './Action';

var handleAdd = function handleAdd(onAdd) {
  return function (event) {
    var pos = event.target.getBoundingClientRect();
    onAdd({
      x: pos.left,
      y: pos.top
    });
  };
};

var _ref2 = _jsx(AddIcon, {
  color: '#fff'
});

var AddToPlaylist = function AddToPlaylist(_ref) {
  var onAdd = _ref.onAdd,
      props = _objectWithoutProperties(_ref, ['onAdd']);

  return React.createElement(
    Action,
    _extends({}, props, {
      onAction: handleAdd(onAdd)
    }),
    _ref2
  );
};

AddToPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  onAdd: PropTypes.func.isRequired
} : {};

export default AddToPlaylist;
//# sourceMappingURL=AddToPlaylist.js.map
