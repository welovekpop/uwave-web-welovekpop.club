import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import IconButton from 'material-ui/IconButton';
import HistoryIcon from 'material-ui/svg-icons/action/history';

var fullSize = { width: '100%', height: '100%' };

var _ref2 = _jsx(HistoryIcon, {
  style: fullSize,
  color: '#fff',
  className: 'HeaderHistoryButton-icon'
});

var HistoryButton = function HistoryButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return _jsx(IconButton, {
    className: 'HeaderHistoryButton',
    style: fullSize,
    tooltip: t('history.title'),
    tooltipPosition: 'bottom-center',
    onClick: onClick
  }, void 0, _ref2);
};

HistoryButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
} : {};

export default compose(translate(), pure)(HistoryButton);
//# sourceMappingURL=HistoryButton.js.map
