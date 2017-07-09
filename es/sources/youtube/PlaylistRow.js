import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ImportIcon from 'material-ui/svg-icons/av/playlist-add';

var _ref = _jsx(ImportIcon, {
  color: '#fff'
});

var PlaylistRow = function (_React$Component) {
  _inherits(PlaylistRow, _React$Component);

  function PlaylistRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, PlaylistRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportPlaylist = function () {
      _this.props.onImport();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PlaylistRow.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        playlist = _props.playlist,
        attrs = _objectWithoutProperties(_props, ['className', 'playlist']);

    var thumbnail = _jsx('div', {
      className: 'MediaListRow-thumb'
    }, void 0, _jsx('img', {
      className: 'MediaListRow-image',
      src: playlist.thumbnail,
      alt: ''
    }, playlist.id));

    return React.createElement(
      'div',
      _extends({
        className: cx('MediaListRow', 'src-youtube-PlaylistRow', className)
      }, attrs),
      thumbnail,
      _jsx('div', {
        className: 'src-youtube-PlaylistRow-info',
        title: playlist.description
      }, void 0, _jsx('div', {
        className: 'src-youtube-PlaylistRow-name'
      }, void 0, playlist.name), _jsx('div', {
        className: 'src-youtube-PlaylistRow-size'
      }, void 0, 'Items: ', playlist.size)),
      _jsx('div', {
        className: 'src-youtube-PlaylistRow-import'
      }, void 0, _jsx(IconButton, {
        style: {
          width: '100%',
          height: '100%'
        },
        onClick: this.handleImportPlaylist
      }, void 0, _ref))
    );
  };

  return PlaylistRow;
}(React.Component);

export { PlaylistRow as default };
PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  playlist: PropTypes.object.isRequired,

  onImport: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=PlaylistRow.js.map
