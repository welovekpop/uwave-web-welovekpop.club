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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _shuffle = require('material-ui/svg-icons/av/shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

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

var _ref2 = (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
});

var _ref3 = (0, _jsx3.default)(_shuffle2.default, {
  color: '#555',
  hoverColor: '#fff'
});

var ShuffleButton = function ShuffleButton(_ref) {
  var t = _ref.t,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick;
  return (0, _jsx3.default)(_IconButton2.default, {
    onClick: onClick,
    tooltip: t('playlists.shuffle'),
    tooltipPosition: 'top-center'
  }, void 0, isLoading ? _ref2 : _ref3);
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
