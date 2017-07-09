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

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Tooltip = require('../../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tooltipStyle = {
  textIndent: 'initial'
};

var enhance = (0, _compose2.default)((0, _withState2.default)('showTooltip', 'setShowTooltip', false), (0, _withProps2.default)(function (props) {
  return {
    onShowTooltip: function onShowTooltip() {
      props.setShowTooltip(true);
    },
    onHideTooltip: function onHideTooltip() {
      props.setShowTooltip(false);
    }
  };
}));

var shortcode = function shortcode(name) {
  return ':' + name + ':';
};
var url = function url(filename) {
  return '/assets/emoji/' + filename;
};

var Emoji = function Emoji(_ref) {
  var name = _ref.name,
      image = _ref.image,
      showTooltip = _ref.showTooltip,
      onShowTooltip = _ref.onShowTooltip,
      onHideTooltip = _ref.onHideTooltip;
  return (0, _jsx3.default)('span', {
    onMouseEnter: onShowTooltip,
    onMouseLeave: onHideTooltip,
    className: 'Emoji',
    'data-emoji': name
  }, void 0, (0, _jsx3.default)(_Tooltip2.default, {
    label: shortcode(name),
    verticalPosition: 'top',
    horizontalPosition: 'center',
    show: showTooltip,
    style: tooltipStyle
  }), (0, _jsx3.default)('img', {
    className: 'Emoji-img',
    src: url(image),
    alt: shortcode(name)
  }));
};

Emoji.propTypes = process.env.NODE_ENV !== "production" ? {
  showTooltip: _propTypes2.default.bool.isRequired,
  onShowTooltip: _propTypes2.default.func.isRequired,
  onHideTooltip: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired
} : {};

exports.default = enhance(Emoji);
//# sourceMappingURL=Emoji.js.map
//# sourceMappingURL=Emoji.js.map
