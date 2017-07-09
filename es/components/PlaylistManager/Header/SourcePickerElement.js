import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var SourcePickerElement = function SourcePickerElement(_ref) {
  var className = _ref.className,
      name = _ref.name,
      source = _ref.source,
      active = _ref.active;
  return _jsx('div', {
    className: cx('SourcePickerElement', 'SourcePickerElement--' + name, active && 'SourcePickerElement--active', className),
    style: { backgroundImage: 'url(' + source.logo + ')' }
  });
};

SourcePickerElement.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  source: PropTypes.shape({
    logo: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.bool
} : {};

export default SourcePickerElement;
//# sourceMappingURL=SourcePickerElement.js.map
