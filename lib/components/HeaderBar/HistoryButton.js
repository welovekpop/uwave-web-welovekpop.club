'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _History = require('material-ui-icons/History');

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_History2.default, {
  className: 'HeaderHistoryButton-icon'
});

var HistoryButton = function HistoryButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return (0, _jsx3.default)(_Tooltip2.default, {
    title: t('history.title'),
    position: 'bottom'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    'aria-label': t('history.title'),
    className: 'HeaderHistoryButton',
    onClick: onClick
  }, void 0, _ref2));
};

HistoryButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default)(HistoryButton);
//# sourceMappingURL=HistoryButton.js.map
//# sourceMappingURL=HistoryButton.js.map
