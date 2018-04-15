import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

var CurrentDJ = function CurrentDJ(_ref) {
  var t = _ref.t,
      className = _ref.className,
      dj = _ref.dj;
  return _jsx("div", {
    className: className
  }, void 0, t('booth.currentDJ', {
    user: dj.username
  }));
};

CurrentDJ.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  dj: PropTypes.shape({
    username: PropTypes.string.isRequired
  })
} : {};
export default translate()(CurrentDJ);
//# sourceMappingURL=CurrentDJ.js.map
