import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import MediaLoadingIndicator from './MediaLoadingIndicator';

var _ref = _jsx(MediaLoadingIndicator, {
  className: 'MediaListRow-loader'
});

var _ref2 = _jsx('div', {
  className: 'MediaListRow-artist'
}, void 0, ' \u2026 ');

var _ref3 = _jsx('div', {
  className: 'MediaListRow-title'
}, void 0, ' \u2026 ');

var _ref4 = _jsx('div', {
  className: 'MediaListRow-duration'
}, void 0, ' \u2026 ');

var LoadingRow = function (_React$Component) {
  _inherits(LoadingRow, _React$Component);

  function LoadingRow() {
    _classCallCheck(this, LoadingRow);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LoadingRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        selected = _props.selected,
        attrs = _objectWithoutProperties(_props, ['className', 'selected']);

    var selectedClass = selected ? 'is-selected' : '';
    return React.createElement(
      'div',
      _extends({
        className: cx('MediaListRow', 'is-loading', className, selectedClass)
      }, attrs),
      _ref,
      _ref2,
      _ref3,
      _ref4
    );
  };

  return LoadingRow;
}(React.Component);

LoadingRow.defaultProps = {
  selected: false
};
export default LoadingRow;
LoadingRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  selected: PropTypes.bool
} : {};
//# sourceMappingURL=LoadingRow.js.map
