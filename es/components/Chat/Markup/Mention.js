import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var Mention = function Mention(_ref) {
  var className = _ref.className,
      user = _ref.user,
      props = _objectWithoutProperties(_ref, ["className", "user"]);

  return React.createElement("span", _extends({
    className: cx('ChatMention', className)
  }, props), "@", user.username);
};

Mention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
} : {};
export default Mention;
//# sourceMappingURL=Mention.js.map
