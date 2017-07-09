import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return _jsx('div', {
    className: cx('Avatar', className)
  }, void 0, _jsx('img', {
    className: 'Avatar-image',
    src: user.avatar || '/a/' + encodeURIComponent(user._id),
    alt: user.username
  }));
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
} : {};

export default Avatar;
//# sourceMappingURL=index.js.map
