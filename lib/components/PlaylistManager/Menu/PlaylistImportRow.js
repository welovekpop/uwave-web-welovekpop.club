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

var _reactI18next = require('react-i18next');

var _Progress = require('material-ui/Progress');

var _Input = require('material-ui-icons/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-loading'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  size: '100%'
}));

var _ref3 = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, (0, _jsx3.default)(_Input2.default, {}));

var PlaylistImportRow = function PlaylistImportRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      importing = _ref.importing,
      onClick = _ref.onClick;

  var icon = void 0;
  if (importing) {
    icon = _ref2;
  } else {
    icon = _ref3;
  }
  return (0, _jsx3.default)('button', {
    role: 'menuitem',
    className: (0, _classnames2.default)('PlaylistMenuRow', 'PlaylistMenuRow--import', className),
    onClick: onClick
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'PlaylistMenuRow-title'
  }, void 0, icon, t('playlists.import.title'))));
};

PlaylistImportRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  importing: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(PlaylistImportRow);
//# sourceMappingURL=PlaylistImportRow.js.map
//# sourceMappingURL=PlaylistImportRow.js.map
