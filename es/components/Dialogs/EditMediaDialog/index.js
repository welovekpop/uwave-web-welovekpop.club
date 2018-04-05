import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/es/Dialog';
import IconButton from 'material-ui/es/IconButton';
import uniqueId from 'lodash/uniqueId';
import formatDuration from 'format-duration';
import ArtistIcon from 'material-ui-icons/Headset';
import TitleIcon from 'material-ui-icons/MusicNote';
import StartIcon from 'material-ui-icons/PlayArrow';
import EndIcon from 'material-ui-icons/Stop';
import SwapArtistTitleIcon from 'material-ui-icons/SwapHoriz';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import Button from '../../Form/Button';
import TextField from '../../Form/TextField';

// naive HH:mm:ss → seconds
var parseDuration = function parseDuration(str) {
  return str.split(':').map(function (part) {
    return parseInt(part.trim(), 10);
  }).reduce(function (duration, part) {
    return duration * 60 + part;
  }, 0);
};

var enhance = translate();

var _ref = _jsx(ArtistIcon, {
  nativeColor: '#9f9d9e'
});

var _ref2 = _jsx(SwapArtistTitleIcon, {
  nativeColor: '#9f9d9e'
});

var _ref3 = _jsx(TitleIcon, {
  nativeColor: '#9f9d9e'
});

var _ref4 = _jsx(StartIcon, {
  nativeColor: '#9f9d9e'
});

var _ref5 = _jsx(EndIcon, {
  nativeColor: '#9f9d9e'
});

var EditMediaDialog = function (_React$Component) {
  _inherits(EditMediaDialog, _React$Component);

  function EditMediaDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, EditMediaDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      errors: null,
      artist: _this.props.media.artist,
      title: _this.props.media.title,
      start: formatDuration(_this.props.media.start * 1000),
      end: formatDuration(_this.props.media.end * 1000)
    }, _this.title = uniqueId('editmedia'), _this.labelStart = uniqueId('editmedia'), _this.labelEnd = uniqueId('editmedia'), _this.handleSubmit = function (e) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  EditMediaDialog.prototype.render = function render() {
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
      var artistInput = _jsx(TextField, {
        className: 'EditMediaDialogGroup-field',
        placeholder: t(['dialogs.editMedia.artistLabel', 'media.artist']),
        value: artist,
        onChange: this.handleChangeArtist,
        icon: _ref,
        tabIndex: baseTabIndex,
        autoFocus: true
      });
      var artistTitleLabel = _jsx('div', {
        className: 'EditMediaDialogGroup-label'
      }, void 0, _jsx(IconButton, {
        onClick: this.handleSwapArtistTitle
      }, void 0, _ref2));
      var titleInput = _jsx(TextField, {
        className: 'EditMediaDialogGroup-field',
        placeholder: t(['dialogs.editMedia.titleLabel', 'media.title']),
        value: title,
        onChange: this.handleChangeTitle,
        icon: _ref3,
        tabIndex: baseTabIndex + 1
      });

      var fromLabel =
      // eslint-disable-next-line jsx-a11y/label-has-for
      _jsx('label', {
        htmlFor: this.labelStart,
        className: 'EditMediaDialogGroup-label'
      }, void 0, t('dialogs.editMedia.playFromLabel'));
      var fromInput = _jsx(TextField, {
        id: this.labelStart,
        className: 'EditMediaDialogGroup-field',
        placeholder: '0:00',
        value: start,
        onChange: this.handleChangeStart,
        icon: _ref4,
        tabIndex: baseTabIndex + 2
      });
      var toLabel =
      // eslint-disable-next-line jsx-a11y/label-has-for
      _jsx('label', {
        htmlFor: this.labelEnd,
        className: 'EditMediaDialogGroup-label'
      }, void 0, t('dialogs.editMedia.playToLabel'));
      var toInput = _jsx(TextField, {
        id: this.labelEnd,
        className: 'EditMediaDialogGroup-field',
        placeholder: formatDuration(media.duration),
        value: end,
        onChange: this.handleChangeEnd,
        icon: _ref5,
        tabIndex: baseTabIndex + 3
      });

      content = _jsx(Form, {
        onSubmit: this.handleSubmit
      }, void 0, errors && errors.length > 0 && _jsx(FormGroup, {}, void 0, errors.map(function (error) {
        return _jsx('div', {}, void 0, t('dialogs.editMedia.errors.' + error));
      })), _jsx('div', {
        className: 'EditMediaDialogForm'
      }, void 0, _jsx('div', {
        className: 'EditMediaDialogForm-column'
      }, void 0, _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, artistInput), _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, fromLabel, fromInput)), _jsx('div', {
        className: 'EditMediaDialogForm-separator'
      }, void 0, _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, artistTitleLabel), _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, toLabel)), _jsx('div', {
        className: 'EditMediaDialogForm-column'
      }, void 0, _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, titleInput), _jsx(FormGroup, {
        className: 'EditMediaDialogGroup'
      }, void 0, toInput))), _jsx(FormGroup, {
        className: 'FormGroup--noSpacing'
      }, void 0, _jsx(Button, {
        className: 'EditMediaDialog-submit'
      }, void 0, t('dialogs.editMedia.save'))));
    }

    return _jsx(Dialog, {
      classes: {
        paper: cx('Dialog', 'EditMediaDialog', contentClassName)
      },
      open: open,
      onClose: onCloseDialog,
      'aria-labelledby': this.title
    }, void 0, _jsx(DialogTitle, {
      id: this.title,
      className: cx('Dialog-title', titleClassName)
    }, void 0, t('dialogs.editMedia.title')), _jsx(DialogContent, {
      className: cx('Dialog-body', bodyClassName)
    }, void 0, content));
  };

  return EditMediaDialog;
}(React.Component);

EditMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  open: PropTypes.bool,
  media: PropTypes.object,

  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,

  onEditedMedia: PropTypes.func.isRequired,
  onCloseDialog: PropTypes.func.isRequired
} : {};


export default enhance(EditMediaDialog);
//# sourceMappingURL=index.js.map
