import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
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

var enhance = DragSource(MEDIA, mediaSource, collect);

var HistoryRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HistoryRow, _React$Component);

  function HistoryRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      showActions: false
    }, _this.handleMouseEnter = function () {
      _this.setState({
        showActions: true
      });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        showActions: false
      });
    }, _this.handleDoubleClick = function () {
      _this.props.onOpenPreviewMediaDialog(_this.props.media.media);
    }, _this.handleKeyPress = function (event) {
      if (event.code === 'Space') {
        _this.props.onClick();
      }
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = HistoryRow.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.connectDragPreview(getEmptyImage());
  };

  _proto.render = function render() {
    var _this$props = this.props,
        historyEntry = _this$props.media,
        className = _this$props.className,
        selection = _this$props.selection,
        selected = _this$props.selected,
        connectDragSource = _this$props.connectDragSource,
        makeActions = _this$props.makeActions,
        onClick = _this$props.onClick;
    var media = historyEntry.media,
        timestamp = historyEntry.timestamp,
        user = historyEntry.user,
        stats = historyEntry.stats;
    var showActions = this.state.showActions;
    var selectedClass = selected ? 'is-selected' : '';

    var thumbnail = _jsx("div", {
      className: "MediaListRow-thumb"
    }, void 0, _jsx("img", {
      className: "MediaListRow-image",
      src: media.thumbnail,
      alt: ""
    }));

    return connectDragSource( // See PlaylistManager/Panel/Row.js
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _jsx("div", {
      className: cx('MediaListRow', 'HistoryRow', className, selectedClass),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onDoubleClick: this.handleDoubleClick,
      onKeyPress: this.handleKeyPress,
      onClick: onClick
    }, void 0, thumbnail, _jsx(SongTitle, {
      className: "HistoryRow-song",
      size: "mediaRow",
      artist: media.artist,
      title: media.title
    }), _jsx("div", {
      className: "HistoryRow-votes"
    }, void 0, React.createElement(HistoryVotes, stats)), _jsx("div", {
      className: "HistoryRow-user"
    }, void 0, user.username), _jsx("div", {
      className: "HistoryRow-time",
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
}(React.Component);

HistoryRow.defaultProps = {
  selected: false
};
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
export default enhance(HistoryRow);
//# sourceMappingURL=Row.js.map
