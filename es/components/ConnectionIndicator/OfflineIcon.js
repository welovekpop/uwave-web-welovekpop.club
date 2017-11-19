import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

var _ref2 = _jsx(Loader, {
  size: 'tiny'
});

var OfflineIcon = function OfflineIcon(_ref) {
  var style = _ref.style;
  return _jsx('div', {
    style: _extends({}, style, { width: 24, height: 24, display: 'inline-block'
    })
  }, void 0, _ref2);
};

OfflineIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  style: PropTypes.object
} : {};

export default OfflineIcon;
//# sourceMappingURL=OfflineIcon.js.map
