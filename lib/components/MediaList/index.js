'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _reactList = require('react-list');

var _reactList2 = _interopRequireDefault(_reactList);

var _reactListLazyLoad = require('react-list-lazy-load');

var _reactListLazyLoad2 = _interopRequireDefault(_reactListLazyLoad);

var _immutable = require('item-selection/immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _LoadingRow = require('./LoadingRow');

var _LoadingRow2 = _interopRequireDefault(_LoadingRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp2;

/**
 * Check if two media lists are different, taking into account
 * pagination. If the new media list contains items where the previous
 * list doesn't, but every other item is identical, we assume
 * the new list has just loaded a page that wasn't loaded in the
 * previous one, and decide that the list is not really different.
 */
function didMediaChange(prev, next) {
  return prev.some(function (item, i) {
    return item && next[i] && item._id !== next[i]._id;
  });
}

var _ref = (0, _jsx3.default)('span', {});

var MediaList = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(MediaList, _React$Component);

  function MediaList() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MediaList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { selection: (0, _immutable2.default)(_this.props.media) }, _this.renderRow = function (index) {
      var _makeActions = _this.props.makeActions;
      var props = _this.props.rowProps || {};
      var media = _this.props.media[index];
      var selection = _this.state.selection;

      var selected = selection.isSelectedIndex(index);
      if (!media) {
        return (0, _jsx3.default)(_LoadingRow2.default, {
          className: 'MediaList-row',
          selected: selected
        }, index);
      }
      var MediaRow = _this.props.rowComponent;
      var isAlternate = index % 2 === 0;
      return _react2.default.createElement(MediaRow, (0, _extends3.default)({
        key: media ? media._id : index
      }, props, {
        className: (0, _classnames2.default)('MediaList-row', isAlternate && 'MediaListRow--alternate'),
        media: media,
        selected: selected,
        selection: selection.get(),
        onClick: function onClick(e) {
          return _this.selectItem(index, e);
        },
        onOpenPreviewMediaDialog: _this.props.onOpenPreviewMediaDialog,
        makeActions: function makeActions() {
          return _makeActions(media, selection, index);
        }
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  MediaList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.media !== this.props.media) {
      var selection = this.state.selection.getIndices();
      var mediaChanged = didMediaChange(this.props.media, nextProps.media);
      this.setState({
        selection: mediaChanged ? (0, _immutable2.default)(nextProps.media) : (0, _immutable2.default)(nextProps.media, selection)
      });
    }
  };

  MediaList.prototype.selectItem = function selectItem(index, e) {
    e.preventDefault();

    var selection = this.state.selection;

    if (e.shiftKey) {
      selection = selection.selectRange(index);
    } else if (e.ctrlKey) {
      selection = selection.selectToggle(index);
    } else {
      selection = selection.select(index);
    }

    this.setState({ selection: selection });
  };

  MediaList.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        media = _props.media,
        size = _props.size,
        onRequestPage = _props.onRequestPage;

    var list = (0, _jsx3.default)(_reactList2.default, {
      itemRenderer: this.renderRow,
      length: size || media.length,
      type: 'uniform',
      forceUpdateOnMediaChange: media,
      forceUpdateOnSelectionChange: this.state.selection
    });
    if (onRequestPage) {
      list = (0, _jsx3.default)(_reactListLazyLoad2.default, {
        items: media,
        length: size || media.length,
        pageSize: 50,
        onRequestPage: onRequestPage
      }, void 0, list);
    }
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('MediaList', className)
    }, void 0, list);
  };

  return MediaList;
}(_react2.default.Component), _class.defaultProps = {
  // The `size` property is only necessary for lazy loading.
  size: null,
  rowComponent: _Row2.default,
  makeActions: function makeActions() {
    return _ref;
  }
}, _temp2);
exports.default = MediaList;

MediaList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _react2.default.PropTypes.string,
  media: _react2.default.PropTypes.array,
  size: _react2.default.PropTypes.number,
  onRequestPage: _react2.default.PropTypes.func,
  rowComponent: _react2.default.PropTypes.func,
  rowProps: _react2.default.PropTypes.object,

  onOpenPreviewMediaDialog: _react2.default.PropTypes.func,
  makeActions: _react2.default.PropTypes.func
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
