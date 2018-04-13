import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var GroupMention = function GroupMention(_ref) {
  var className = _ref.className,
      group = _ref.group;
  return _jsx("span", {
    className: cx('ChatMention', "ChatMention--" + group, className)
  }, void 0, "@", group);
};

GroupMention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  group: PropTypes.string.isRequired
} : {};
export default GroupMention;
//# sourceMappingURL=GroupMention.js.map
