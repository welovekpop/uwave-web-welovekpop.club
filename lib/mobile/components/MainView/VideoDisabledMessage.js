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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var VideoDisabledMessage = function VideoDisabledMessage(_ref) {
  var t = _ref.t,
      onEnableVideo = _ref.onEnableVideo;
  return (0, _jsx3.default)('div', {
    className: 'VideoDisabledMessage'
  }, void 0, (0, _jsx3.default)('p', {
    className: 'VideoDisabledMessage-text'
  }, void 0, t('booth.videoDisabled')), (0, _jsx3.default)(_Button2.default, {
    variant: 'raised',
    color: 'primary',
    onClick: onEnableVideo
  }, void 0, 'Enable?'));
};

VideoDisabledMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onEnableVideo: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(VideoDisabledMessage);
//# sourceMappingURL=VideoDisabledMessage.js.map
//# sourceMappingURL=VideoDisabledMessage.js.map
