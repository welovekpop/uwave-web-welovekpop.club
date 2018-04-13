"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Dialog = _interopRequireWildcard(require("material-ui/Dialog"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _formatDuration = _interopRequireDefault(require("format-duration"));

var _Headset = _interopRequireDefault(require("@material-ui/icons/Headset"));

var _MusicNote = _interopRequireDefault(require("@material-ui/icons/MusicNote"));

var _PlayArrow = _interopRequireDefault(require("@material-ui/icons/PlayArrow"));

var _Stop = _interopRequireDefault(require("@material-ui/icons/Stop"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

var _TextField = _interopRequireDefault(require("../../Form/TextField"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// naive HH:mm:ss → seconds
var parseDuration = function parseDuration(str) {
  return str.split(':').map(function (part) {
    return parseInt(part.trim(), 10);
  }).reduce(function (duration, part) {
    return duration * 60 + part;
  }, 0);
};

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Headset.default, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_SwapHoriz.default, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_MusicNote.default, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_PlayArrow.default, {
  nativeColor: "#9f9d9e"
});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)(_Stop.default, {
  nativeColor: "#9f9d9e"
});

var EditMediaDialog =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EditMediaDialog, _React$Component);

  function EditMediaDialog() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      errors: null,
      artist: _this.props.media.artist,
      title: _this.props.media.title,
      start: (0, _formatDuration.default)(_this.props.media.start * 1000),
      end: (0, _formatDuration.default)(_this.props.media.end * 1000)
    }, _this.title = (0, _uniqueId.default)('editmedia'), _this.labelStart = (0, _uniqueId.default)('editmedia'), _this.labelEnd = (0, _uniqueId.default)('editmedia'), _this.handleSubmit = function (e) {
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

      if (Number.isNaN(startSeconds) || startSeconds < 0) {
        errors.push('invalidStartTime');
      }

      if (Number.isNaN(endSeconds) || endSeconds < 0) {
        errors.push('invalidEndTime');
      } else if (endSeconds < startSeconds) {
        errors.push('endTimeBeforeStart');
      } else if (endSeconds > media.duration) {
        errors.push('endTimeAfterSongEnd');
      }

      if (errors.length > 0) {
        _this.setState({
          errors: errors
        });

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
      _this.setState({
        artist: event.target.value
      });
    }, _this.handleChangeTitle = function (event) {
      _this.setState({
        title: event.target.value
      });
    }, _this.handleChangeStart = function (event) {
      _this.setState({
        start: event.target.value
      });
    }, _this.handleChangeEnd = function (event) {
      _this.setState({
        end: event.target.value
      });
    }, _this.handleSwapArtistTitle = function () {
      _this.setState({
        artist: _this.state.title,
        title: _this.state.artist
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = EditMediaDialog.prototype;

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        open = _props.open,
        media = _props.media,
        onCloseDialog = _props.onCloseDialog,
        bodyClassName = _props.bodyClassName,
        contentClassName = _props.contentClassName,
        titleClassName = _props.titleClassName;
    var _state = this.state,
        errors = _state.errors,
        artist = _state.artist,
        title = _state.title,
        start = _state.start,
        end = _state.end;
    var baseTabIndex = 1000;
    var content = null;

    if (open) {
      var artistInput = (0, _jsx2.default)(_TextField.default, {
        className: "EditMediaDialogGroup-field",
        placeholder: t(['dialogs.editMedia.artistLabel', 'media.artist']),
        value: artist,
        onChange: this.handleChangeArtist,
        icon: _ref,
        tabIndex: baseTabIndex,
        autoFocus: true
      });
      var artistTitleLabel = (0, _jsx2.default)("div", {
        className: "EditMediaDialogGroup-label"
      }, void 0, (0, _jsx2.default)(_IconButton.default, {
        onClick: this.handleSwapArtistTitle
      }, void 0, _ref2));
      var titleInput = (0, _jsx2.default)(_TextField.default, {
        className: "EditMediaDialogGroup-field",
        placeholder: t(['dialogs.editMedia.titleLabel', 'media.title']),
        value: title,
        onChange: this.handleChangeTitle,
        icon: _ref3,
        tabIndex: baseTabIndex + 1
      });
      var fromLabel = // eslint-disable-next-line jsx-a11y/label-has-for
      (0, _jsx2.default)("label", {
        htmlFor: this.labelStart,
        className: "EditMediaDialogGroup-label"
      }, void 0, t('dialogs.editMedia.playFromLabel'));
      var fromInput = (0, _jsx2.default)(_TextField.default, {
        id: this.labelStart,
        className: "EditMediaDialogGroup-field",
        placeholder: "0:00",
        value: start,
        onChange: this.handleChangeStart,
        icon: _ref4,
        tabIndex: baseTabIndex + 2
      });
      var toLabel = // eslint-disable-next-line jsx-a11y/label-has-for
      (0, _jsx2.default)("label", {
        htmlFor: this.labelEnd,
        className: "EditMediaDialogGroup-label"
      }, void 0, t('dialogs.editMedia.playToLabel'));
      var toInput = (0, _jsx2.default)(_TextField.default, {
        id: this.labelEnd,
        className: "EditMediaDialogGroup-field",
        placeholder: (0, _formatDuration.default)(media.duration),
        value: end,
        onChange: this.handleChangeEnd,
        icon: _ref5,
        tabIndex: baseTabIndex + 3
      });
      content = (0, _jsx2.default)(_Form.default, {
        onSubmit: this.handleSubmit
      }, void 0, errors && errors.length > 0 && (0, _jsx2.default)(_Group.default, {}, void 0, errors.map(function (error) {
        return (0, _jsx2.default)("div", {}, void 0, t("dialogs.editMedia.errors." + error));
      })), (0, _jsx2.default)("div", {
        className: "EditMediaDialogForm"
      }, void 0, (0, _jsx2.default)("div", {
        className: "EditMediaDialogForm-column"
      }, void 0, (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, artistInput), (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, fromLabel, fromInput)), (0, _jsx2.default)("div", {
        className: "EditMediaDialogForm-separator"
      }, void 0, (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, artistTitleLabel), (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, toLabel)), (0, _jsx2.default)("div", {
        className: "EditMediaDialogForm-column"
      }, void 0, (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, titleInput), (0, _jsx2.default)(_Group.default, {
        className: "EditMediaDialogGroup"
      }, void 0, toInput))), (0, _jsx2.default)(_Group.default, {
        className: "FormGroup--noSpacing"
      }, void 0, (0, _jsx2.default)(_Button.default, {
        className: "EditMediaDialog-submit"
      }, void 0, t('dialogs.editMedia.save'))));
    }

    return (0, _jsx2.default)(_Dialog.default, {
      classes: {
        paper: (0, _classnames.default)('Dialog', 'EditMediaDialog', contentClassName)
      },
      open: open,
      onClose: onCloseDialog,
      "aria-labelledby": this.title
    }, void 0, (0, _jsx2.default)(_Dialog.DialogTitle, {
      id: this.title,
      className: (0, _classnames.default)('Dialog-title', titleClassName)
    }, void 0, t('dialogs.editMedia.title')), (0, _jsx2.default)(_Dialog.DialogContent, {
      className: (0, _classnames.default)('Dialog-body', bodyClassName)
    }, void 0, content));
  };

  return EditMediaDialog;
}(_react.default.Component);

EditMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool,
  media: _propTypes.default.object,
  bodyClassName: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  titleClassName: _propTypes.default.string,
  onEditedMedia: _propTypes.default.func.isRequired,
  onCloseDialog: _propTypes.default.func.isRequired
} : {};

var _default = enhance(EditMediaDialog); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
