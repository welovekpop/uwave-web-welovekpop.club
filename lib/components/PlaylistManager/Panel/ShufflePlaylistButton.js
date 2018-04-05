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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _reactI18next = require('react-i18next');

var _Progress = require('material-ui/Progress');

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Shuffle = require('material-ui-icons/Shuffle');

var _Shuffle2 = _interopRequireDefault(_Shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _withState2.default)('isLoading', 'setLoading', false), (0, _withHandlers2.default)({
  onClick: function onClick(props) {
    return function () {
      props.setLoading(true);
      props.onShuffle().then(function () {
        props.setLoading(false);
      }, function () {
        props.setLoading(false);
      });
    };
  }
}), (0, _reactI18next.translate)());

var _ref2 = (0, _jsx3.default)(_Progress.CircularProgress, {
  size: '100%'
});

var _ref3 = (0, _jsx3.default)(_Shuffle2.default, {});

var ShuffleButton = function ShuffleButton(_ref) {
  var t = _ref.t,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick;
  return (0, _jsx3.default)(_Tooltip2.default, {
    title: t('playlists.shuffle'),
    placement: 'top'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    className: 'PlaylistMeta-iconButton',
    onClick: onClick
  }, void 0, isLoading ? _ref2 : _ref3));
};

ShuffleButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  isLoading: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onShuffle: _propTypes2.default.func.isRequired // eslint-disable-line react/no-unused-prop-types
} : {};

exports.default = enhance(ShuffleButton);
//# sourceMappingURL=ShufflePlaylistButton.js.map
//# sourceMappingURL=ShufflePlaylistButton.js.map
