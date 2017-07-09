import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';

var LabeledControl = function LabeledControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children;
  return _jsx('div', {}, void 0, _jsx('label', {
    htmlFor: id
  }, void 0, label), children);
};

LabeledControl.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
} : {};

export default LabeledControl;
//# sourceMappingURL=LabeledControl.js.map
