import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import UpvoteIcon from "@material-ui/icons/es/ThumbUp";
import Button from './Button';
var enhance = translate();

var Upvote = function Upvote(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      active = _ref.active,
      count = _ref.count,
      onUpvote = _ref.onUpvote;
  return _jsx(Button, {
    disabled: disabled,
    tooltip: t('votes.upvote'),
    onClick: onUpvote,
    count: count
  }, void 0, _jsx(UpvoteIcon, {
    className: active ? 'ResponseButton-icon--upvoted' : ''
  }));
};

Upvote.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onUpvote: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
} : {};
export default enhance(Upvote);
//# sourceMappingURL=Upvote.js.map
