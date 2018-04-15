import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import formatDuration from 'format-duration';
import { MEDIA } from '../../constants/DDItemTypes';
import MediaLoadingIndicator from './MediaLoadingIndicator';
import MediaThumbnail from './MediaThumbnail';
import Actions from './Actions';

var inSelection = function inSelection(selection, media) {
  return selection.some(function (item) {
    return item._id === media._id;
  });
};

var mediaSource = {
  beginDrag: function beginDrag(_ref) {
    var selection = _ref.selection,
        media = _ref.media;
    return {
      media: inSelection(selection, media) ? selection : [media]
    };
  }
};

var collect = function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

var enhance = DragSource(MEDIA, mediaSource, collect);

var _ref2 =
/*#__PURE__*/
_jsx(MediaLoadingIndicator, {
  className: "MediaListRow-loader"
});

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Row, _React$Component);

  function Row() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleKeyPress = function (event) {
      if (event.code === 'Space') {
        _this.props.onClick();
      }
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media);
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Row.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview(getEmptyImage());
  };

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        media = _props.media,
        selection = _props.selection,
        selected = _props.selected,
        connectDragSource = _props.connectDragSource,
        makeActions = _props.makeActions,
        onClick = _props.onClick;
    var selectedClass = selected ? 'is-selected' : '';
    var loadingClass = media.loading ? 'is-loading' : '';
    var duration = 'start' in media // playlist item
    ? media.end - media.start // search result
    : media.duration;
    return connectDragSource( // Bit uneasy about this, but turning the entire row into a button seems
    // wrong as well! Since we nest media action <button>s inside it, too.
    //
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _jsx("div", {
      className: cx('MediaListRow', className, selectedClass, loadingClass),
      onDoubleClick: this.handleDoubleClick,
      onKeyPress: this.handleKeyPress,
      onClick: onClick
    }, void 0, media.loading ? _ref2 : _jsx(MediaThumbnail, {
      url: media.thumbnail
    }), _jsx("div", {
      className: "MediaListRow-artist",
      title: media.artist
    }, void 0, media.artist), _jsx("div", {
      className: "MediaListRow-title",
      title: media.title
    }, void 0, media.title), _jsx("div", {
      className: "MediaListRow-duration"
    }, void 0, formatDuration(duration * 1000)), _jsx(Actions, {
      className: cx('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return Row;
}(React.Component);

Row.defaultProps = {
  selected: false
};
Row.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  media: PropTypes.object,
  selected: PropTypes.bool,
  selection: PropTypes.array,
  onOpenPreviewMediaDialog: PropTypes.func,
  onClick: PropTypes.func,
  makeActions: PropTypes.func
} : {};
export default enhance(Row);
//# sourceMappingURL=Row.js.map
