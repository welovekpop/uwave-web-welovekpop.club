'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _arrowDownward = require('material-ui/svg-icons/navigation/arrow-downward');

var _arrowDownward2 = _interopRequireDefault(_arrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollNotice = function ScrollNotice(_ref) {
  var muiTheme = _ref.muiTheme,
      show = _ref.show,
      onClick = _ref.onClick;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('ChatMessages-scrollDown', show && 'is-visible')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessages-scrollDownButton'
  }, void 0, (0, _jsx3.default)(_FloatingActionButton2.default, {
    mini: true,
    onTouchTap: onClick
  }, void 0, (0, _jsx3.default)(_arrowDownward2.default, {
    style: { fill: muiTheme.palette.textColor }
  }))));
};

ScrollNotice.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  show: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _muiThemeable2.default)()(ScrollNotice);
//# sourceMappingURL=ScrollDownNotice.js.map
//# sourceMappingURL=ScrollDownNotice.js.map
