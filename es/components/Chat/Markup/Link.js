import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import truncate from 'truncate-url';

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ['children', 'href']);

  return React.createElement(
    'a',
    _extends({
      href: href,
      title: href,
      target: '_blank',
      rel: 'noopener noreferrer'
    }, props),
    truncate(children, 60)
  );
};

Link.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
} : {};

export default Link;
//# sourceMappingURL=Link.js.map
