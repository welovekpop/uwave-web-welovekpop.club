import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import DownvoteIcon from "@material-ui/icons/es/ThumbDown";
import Button from './Button';
var enhance = translate();

var Downvote = function Downvote(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      active = _ref.active,
      count = _ref.count,
      onDownvote = _ref.onDownvote;
  return _jsx(Button, {
    disabled: disabled,
    tooltip: t('votes.downvote'),
    onClick: onDownvote,
    count: count
  }, void 0, _jsx(DownvoteIcon, {
    className: active ? 'ResponseButton-icon--downvoted' : ''
  }));
};

Downvote.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
} : {};
export default enhance(Downvote);
//# sourceMappingURL=Downvote.js.map
