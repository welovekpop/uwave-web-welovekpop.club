import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import uniqueId from 'lodash/uniqueId';
import formatDuration from 'format-duration';
import ArtistIcon from 'material-ui/svg-icons/hardware/headset';
import TitleIcon from 'material-ui/svg-icons/image/music-note';
import StartIcon from 'material-ui/svg-icons/av/play-arrow';
import EndIcon from 'material-ui/svg-icons/av/stop';
import SwapArtistTitleIcon from 'material-ui/svg-icons/action/swap-horiz';
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

var _ref = _jsx(ArtistIcon, {
  color: '#9f9d9e'
});

var _ref2 = _jsx(SwapArtistTitleIcon, {
  color: '#9f9d9e'
});

var _ref3 = _jsx(TitleIcon, {
  color: '#9f9d9e'
});

var _ref4 = _jsx(StartIcon, {
  color: '#9f9d9e'
});

var _ref5 = _jsx(EndIcon, {
  color: '#9f9d9e'
});

var EditMediaDialog = (_dec = translate(), _dec(_class = function (_React$Component) {
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
    }, _this.labelStart = uniqueId('editmedia'), _this.labelEnd = uniqueId('editmedia'), _this.handleSubmit = function (e) {
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
        titleClassName = _props.titleClassName,
        props = _objectWithoutProperties(_props, ['t', 'open', 'media', 'onCloseDialog', 'bodyClassName', 'contentClassName', 'titleClassName']);

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

      var fromLabel = _jsx('label', {
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
      var toLabel = _jsx('label', {
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
        className: 'EditMediaDialog',
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
    return React.createElement(
      Dialog,
      _extends({}, props, {
        contentClassName: cx('Dialog', contentClassName),
        bodyClassName: cx('Dialog-body', bodyClassName),
        titleClassName: cx('Dialog-title', titleClassName),
        title: t('dialogs.editMedia.title'),
        open: open,
        onRequestClose: onCloseDialog
      }),
      content
    );
  };

  return EditMediaDialog;
}(React.Component)) || _class);
export { EditMediaDialog as default };
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
//# sourceMappingURL=index.js.map
