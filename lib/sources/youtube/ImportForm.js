'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _playlistPlay = require('material-ui/svg-icons/av/playlist-play');

var _playlistPlay2 = _interopRequireDefault(_playlistPlay);

var _ImportSourceBlock = require('../../components/PlaylistManager/Import/ImportSourceBlock');

var _ImportSourceBlock2 = _interopRequireDefault(_ImportSourceBlock);

var _Form = require('../../components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../components/Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TextField = require('../../components/Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../../components/Form/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp2;

var _ref = (0, _jsx3.default)(_playlistPlay2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Import From Channel'));

var _ref3 = (0, _jsx3.default)(_playlistPlay2.default, {
  color: '#9f9d9e'
});

var _ref4 = (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Import Playlist'));

var YoutubeImportForm = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(YoutubeImportForm, _React$Component);

  function YoutubeImportForm() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YoutubeImportForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportChannel = function (e) {
      e.preventDefault();
      var url = _this.channel.value;
      _this.dispatch((0, _actions.getChannelPlaylists)(url)).catch(function () {
        _this.props.onHideImportPanel();
      });
      _this.props.onShowImportPanel();
    }, _this.handleImportPlaylist = function (e) {
      e.preventDefault();
      var url = _this.playlist.value;

      _this.dispatch((0, _actions.getImportablePlaylist)(url)).catch(function () {
        _this.props.onHideImportPanel();
      });
      _this.props.onShowImportPanel();
    }, _this.refChannel = function (channel) {
      _this.channel = channel;
    }, _this.refPlaylist = function (playlist) {
      _this.playlist = playlist;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  YoutubeImportForm.prototype.dispatch = function dispatch(action) {
    return this.context.store.dispatch(action);
  };

  YoutubeImportForm.prototype.render = function render() {
    return (0, _jsx3.default)(_ImportSourceBlock2.default, {
      title: 'YouTube',
      sourceType: 'youtube'
    }, void 0, (0, _jsx3.default)(_Form2.default, {
      onSubmit: this.handleImportChannel
    }, void 0, (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refChannel,
      placeholder: 'Channel URL',
      icon: _ref
    })), _ref2), (0, _jsx3.default)(_Form2.default, {
      onSubmit: this.handleImportPlaylist
    }, void 0, (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refPlaylist,
      placeholder: 'Playlist URL',
      icon: _ref3
    })), _ref4));
  };

  return YoutubeImportForm;
}(_react2.default.Component), _class.contextTypes = {
  store: _propTypes2.default.object
}, _temp2);
exports.default = YoutubeImportForm;

YoutubeImportForm.propTypes = process.env.NODE_ENV !== "production" ? {
  onShowImportPanel: _propTypes2.default.func.isRequired,
  onHideImportPanel: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=ImportForm.js.map
//# sourceMappingURL=ImportForm.js.map
