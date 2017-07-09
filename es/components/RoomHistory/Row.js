import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class, _class2, _temp2;

import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { MEDIA } from '../../constants/DDItemTypes';

import Actions from '../MediaList/Actions';
import SongTitle from '../SongTitle';
import TimeAgo from '../TimeAgo';

import HistoryVotes from './Votes';

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
      media: inSelection(selection, media.media) ? selection : [media.media]
    };
  }
};

var collect = function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

var HistoryRow = (_dec = DragSource(MEDIA, mediaSource, collect), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(HistoryRow, _React$Component);

  function HistoryRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, HistoryRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { showActions: false }, _this.handleMouseEnter = function () {
      _this.setState({ showActions: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ showActions: false });
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media.media);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HistoryRow.prototype.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview(getEmptyImage());
  };

  HistoryRow.prototype.render = function render() {
    var _props = this.props,
        historyEntry = _props.media,
        className = _props.className,
        selection = _props.selection,
        selected = _props.selected,
        connectDragSource = _props.connectDragSource,
        makeActions = _props.makeActions,
        onClick = _props.onClick;
    var media = historyEntry.media,
        timestamp = historyEntry.timestamp,
        user = historyEntry.user,
        stats = historyEntry.stats;
    var showActions = this.state.showActions;

    var selectedClass = selected ? 'is-selected' : '';
    var thumbnail = _jsx('div', {
      className: 'MediaListRow-thumb'
    }, void 0, _jsx('img', {
      className: 'MediaListRow-image',
      src: media.thumbnail,
      alt: ''
    }));
    return connectDragSource(
    // See PlaylistManager/Panel/Row.js
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _jsx('div', {
      className: cx('MediaListRow', 'HistoryRow', className, selectedClass),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onDoubleClick: this.handleDoubleClick,
      onClick: onClick
    }, void 0, thumbnail, _jsx(SongTitle, {
      className: 'HistoryRow-song',
      size: 'mediaRow',
      artist: media.artist,
      title: media.title
    }), _jsx('div', {
      className: 'HistoryRow-votes'
    }, void 0, React.createElement(HistoryVotes, stats)), _jsx('div', {
      className: 'HistoryRow-user'
    }, void 0, user.username), _jsx('div', {
      className: 'HistoryRow-time',
      dateTime: timestamp
    }, void 0, _jsx(TimeAgo, {
      timestamp: timestamp
    })), showActions && _jsx(Actions, {
      className: cx('MediaListRow-actions', selectedClass),
      selection: selection,
      media: media,
      makeActions: makeActions
    })));
  };

  return HistoryRow;
}(React.Component), _class2.defaultProps = {
  selected: false
}, _temp2)) || _class);
export { HistoryRow as default };
HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
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
//# sourceMappingURL=Row.js.map
