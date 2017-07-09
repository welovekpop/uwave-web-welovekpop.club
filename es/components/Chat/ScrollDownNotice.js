import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ScrollDownIcon from 'material-ui/svg-icons/navigation/arrow-downward';

var ScrollNotice = function ScrollNotice(_ref) {
  var muiTheme = _ref.muiTheme,
      show = _ref.show,
      onClick = _ref.onClick;
  return _jsx('div', {
    className: cx('ChatMessages-scrollDown', show && 'is-visible')
  }, void 0, _jsx('div', {
    className: 'ChatMessages-scrollDownButton'
  }, void 0, _jsx(FloatingActionButton, {
    mini: true,
    onTouchTap: onClick
  }, void 0, _jsx(ScrollDownIcon, {
    style: { fill: muiTheme.palette.textColor }
  }))));
};

ScrollNotice.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
} : {};

export default muiThemeable()(ScrollNotice);
//# sourceMappingURL=ScrollDownNotice.js.map
