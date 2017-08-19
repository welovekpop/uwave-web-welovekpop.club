'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _formatDuration = require('format-duration');

var _formatDuration2 = _interopRequireDefault(_formatDuration);

var _headset = require('material-ui/svg-icons/hardware/headset');

var _headset2 = _interopRequireDefault(_headset);

var _musicNote = require('material-ui/svg-icons/image/music-note');

var _musicNote2 = _interopRequireDefault(_musicNote);

var _playArrow = require('material-ui/svg-icons/av/play-arrow');

var _playArrow2 = _interopRequireDefault(_playArrow);

var _stop = require('material-ui/svg-icons/av/stop');

var _stop2 = _interopRequireDefault(_stop);

var _swapHoriz = require('material-ui/svg-icons/action/swap-horiz');

var _swapHoriz2 = _interopRequireDefault(_swapHoriz);

var _Form = require('../../Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _Button = require('../../Form/Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextField = require('../../Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

// naive HH:mm:ss → seconds
var parseDuration = function parseDuration(str) {
  return str.split(':').map(function (part) {
    return parseInt(part.trim(), 10);
  }).reduce(function (duration, part) {
    return duration * 60 + part;
  }, 0);
};

var _ref = (0, _jsx3.default)(_headset2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)(_swapHoriz2.default, {
  color: '#9f9d9e'
});

var _ref3 = (0, _jsx3.default)(_musicNote2.default, {
  color: '#9f9d9e'
});

var _ref4 = (0, _jsx3.default)(_playArrow2.default, {
  color: '#9f9d9e'
});

var _ref5 = (0, _jsx3.default)(_stop2.default, {
  color: '#9f9d9e'
});

var EditMediaDialog = (_dec = (0, _reactI18next.translate)(), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(EditMediaDialog, _React$Component);

  function EditMediaDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditMediaDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      errors: null,
      artist: _this.props.media.artist,
      title: _this.props.media.title,
      start: (0, _formatDuration2.default)(_this.props.media.start * 1000),
      end: (0, _formatDuration2.default)(_this.props.media.end * 1000)
    }, _this.labelStart = (0, _uniqueId2.default)('editmedia'), _this.labelEnd = (0, _uniqueId2.default)('editmedia'), _this.handleSubmit = function (e) {
      e.preventDefault();

      var _this$props = _this.props,
          media = _this$props.media,
          onEditedMedia = _this$props.onEditedMedia,
          onCloseDialog = _this$props.onCloseDialog;
      var _this$state = _this.state,
          artist = _this$state.artist,
          title = _this$state.title,
          start = _this$state.start,
          end = _this$state.end;

      var startSeconds = parseDuration(start);
      var endSeconds = parseDuration(end);

      var errors = [];
      if (isNaN(startSeconds) || startSeconds < 0) {
        errors.push('invalidStartTime');
      }
      if (isNaN(endSeconds) || endSeconds < 0) {
        errors.push('invalidEndTime');
      } else if (endSeconds < startSeconds) {
        errors.push('endTimeBeforeStart');
      } else if (endSeconds > media.duration) {
        errors.push('endTimeAfterSongEnd');
      }

      if (errors.length > 0) {
        _this.setState({ errors: errors });
        return;
      }

      onEditedMedia({
        artist: artist,
        title: title,
        start: startSeconds,
        end: endSeconds
      });
      onCloseDialog();
    }, _this.handleChangeArtist = function (event) {
      _this.setState({ artist: event.target.value });
    }, _this.handleChangeTitle = function (event) {
      _this.setState({ title: event.target.value });
    }, _this.handleChangeStart = function (event) {
      _this.setState({ start: event.target.value });
    }, _this.handleChangeEnd = function (event) {
      _this.setState({ end: event.target.value });
    }, _this.handleSwapArtistTitle = function () {
      _this.setState({
        artist: _this.state.title,
        title: _this.state.artist
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  EditMediaDialog.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        open = _props.open,
        media = _props.media,
        onCloseDialog = _props.onCloseDialog,
        bodyClassName = _props.bodyClassName,
        contentClassName = _props.contentClassName,
        titleClassName = _props.titleClassName,
        props = (0, _objectWithoutProperties3.default)(_props, ['t', 'open', 'media', 'onCloseDialog', 'bodyClassName', 'contentClassName', 'titleClassName']);

    var _state = this.state,
        errors = _state.errors,
        artist = _state.artist,
        title = _state.title,
        start = _state.start,
        end = _state.end;

    var baseTabIndex = 1000;
    var content = null;
    if (open) {
      var artistInput = (0, _jsx3.default)(_TextField2.default, {
        className: 'EditMediaDialogGroup-field',
        placeholder: t(['dialogs.editMedia.artistLabel', 'media.artist']),
        value: artist,
        onChange: this.handleChangeArtist,
        icon: _ref,
        tabIndex: baseTabIndex,
        autoFocus: true
      });
      var artistTitleLabel = (0, _jsx3.default)('div', {
        className: 'EditMediaDialogGroup-label'
      }, void 0, (0, _jsx3.default)(_IconButton2.default, {
        onClick: this.handleSwapArtistTitle
      }, void 0, _ref2));
      var titleInput = (0, _jsx3.default)(_TextField2.default, {
        className: 'EditMediaDialogGroup-field',
        placeholder: t(['dialogs.editMedia.titleLabel', 'media.title']),
        value: title,
        onChange: this.handleChangeTitle,
        icon: _ref3,
        tabIndex: baseTabIndex + 1
      });

      var fromLabel = (0, _jsx3.default)('label', {
        htmlFor: this.labelStart,
        className: 'EditMediaDialogGroup-label'
      }, void 0, t('dialogs.editMedia.playFromLabel'));
      var fromInput = (0, _jsx3.default)(_TextField2.default, {
        id: this.labelStart,
        className: 'EditMediaDialogGroup-field',
        placeholder: '0:00',
        value: start,
        onChange: this.handleChangeStart,
        icon: _ref4,
        tabIndex: baseTabIndex + 2
      });
      var toLabel = (0, _jsx3.default)('label', {
        htmlFor: this.labelEnd,
        className: 'EditMediaDialogGroup-label'
      }, void 0, t('dialogs.editMedia.playToLabel'));
      var toInput = (0, _jsx3.default)(_TextField2.default, {
        id: this.labelEnd,
        className: 'EditMediaDialogGroup-field',
        placeholder: (0, _formatDuration2.default)(media.duration),
        value: end,
        onChange: this.handleChangeEnd,
        icon: _ref5,
        tabIndex: baseTabIndex + 3
      });

      content = (0, _jsx3.default)(_Form2.default, {
        className: 'EditMediaDialog',
        onSubmit: this.handleSubmit
      }, void 0, errors && errors.length > 0 && (0, _jsx3.default)(_Group2.default, {}, void 0, errors.map(function (error) {
        return (0, _jsx3.default)('div', {}, void 0, t('dialogs.editMedia.errors.' + error));
      })), (0, _jsx3.default)('div', {
        className: 'EditMediaDialogForm'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'EditMediaDialogForm-column'
      }, void 0, (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, artistInput), (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, fromLabel, fromInput)), (0, _jsx3.default)('div', {
        className: 'EditMediaDialogForm-separator'
      }, void 0, (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, artistTitleLabel), (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, toLabel)), (0, _jsx3.default)('div', {
        className: 'EditMediaDialogForm-column'
      }, void 0, (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, titleInput), (0, _jsx3.default)(_Group2.default, {
        className: 'EditMediaDialogGroup'
      }, void 0, toInput))), (0, _jsx3.default)(_Group2.default, {
        className: 'FormGroup--noSpacing'
      }, void 0, (0, _jsx3.default)(_Button2.default, {
        className: 'EditMediaDialog-submit'
      }, void 0, t('dialogs.editMedia.save'))));
    }
    return _react2.default.createElement(_Dialog2.default, (0, _extends3.default)({}, props, {
      contentClassName: (0, _classnames2.default)('Dialog', contentClassName),
      bodyClassName: (0, _classnames2.default)('Dialog-body', bodyClassName),
      titleClassName: (0, _classnames2.default)('Dialog-title', titleClassName),
      title: t('dialogs.editMedia.title'),
      open: open,
      onRequestClose: onCloseDialog
    }), content);
  };

  return EditMediaDialog;
}(_react2.default.Component)) || _class);
exports.default = EditMediaDialog;

EditMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  media: _propTypes2.default.object,

  bodyClassName: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  titleClassName: _propTypes2.default.string,

  onEditedMedia: _propTypes2.default.func.isRequired,
  onCloseDialog: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
