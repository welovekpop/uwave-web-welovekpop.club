"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactList = _interopRequireDefault(require("react-list"));

var _reactListLazyLoad = _interopRequireDefault(require("react-list-lazy-load"));

var _immutable = _interopRequireDefault(require("item-selection/immutable"));

var _LoadingRow = _interopRequireDefault(require("./LoadingRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var BaseMediaList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BaseMediaList, _React$Component);

  function BaseMediaList() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      selection: (0, _immutable.default)(_this.props.media)
    }, _this.renderList = function (items, ref) {
      var ListComponent = _this.props.listComponent;
      return _react.default.createElement(ListComponent, {
        ref: ref
      }, items);
    }, _this.renderRow = function (index) {
      var _makeActions = _this.props.makeActions;
      var props = _this.props.rowProps || {};
      var media = _this.props.media[index];
      var selection = _this.state.selection;
      var selected = selection.isSelectedIndex(index);

      if (!media) {
        return (0, _jsx2.default)(_LoadingRow.default, {
          className: "MediaList-row",
          selected: selected
        }, index);
      }

      var MediaRow = _this.props.rowComponent;
      var isAlternate = index % 2 === 0;
      return _react.default.createElement(MediaRow, (0, _extends2.default)({
        key: media ? media._id : index
      }, props, {
        className: (0, _classnames.default)('MediaList-row', isAlternate && 'MediaListRow--alternate'),
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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = BaseMediaList.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.media !== this.props.media) {
      var selection = this.state.selection.getIndices();
      var mediaChanged = didMediaChange(this.props.media, nextProps.media);
      this.setState({
        selection: mediaChanged ? (0, _immutable.default)(nextProps.media) : (0, _immutable.default)(nextProps.media, selection)
      });
    }
  };

  _proto.selectItem = function selectItem(index, e) {
    e.preventDefault();
    var selection = this.state.selection;

    if (e.shiftKey) {
      selection = selection.selectRange(index);
    } else if (e.ctrlKey) {
      selection = selection.selectToggle(index);
    } else {
      selection = selection.select(index);
    }

    this.setState({
      selection: selection
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        media = _props.media,
        size = _props.size,
        onRequestPage = _props.onRequestPage;
    var list = (0, _jsx2.default)(_reactList.default, {
      itemsRenderer: this.renderList,
      itemRenderer: this.renderRow,
      length: size || media.length,
      type: "uniform",
      forceUpdateOnMediaChange: media,
      forceUpdateOnSelectionChange: this.state.selection
    });

    if (onRequestPage) {
      list = (0, _jsx2.default)(_reactListLazyLoad.default, {
        items: media,
        length: size || media.length,
        pageSize: 50,
        onRequestPage: onRequestPage
      }, void 0, list);
    }

    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('MediaList', className)
    }, void 0, list);
  };

  return BaseMediaList;
}(_react.default.Component);

exports.default = BaseMediaList;

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("span", {});

BaseMediaList.defaultProps = {
  // The `size` property is only necessary for lazy loading.
  size: null,
  makeActions: function makeActions() {
    return _ref;
  }
};
BaseMediaList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  media: _propTypes.default.array,
  size: _propTypes.default.number,
  onRequestPage: _propTypes.default.func,
  listComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]).isRequired,
  rowComponent: _propTypes.default.func.isRequired,
  rowProps: _propTypes.default.object,
  onOpenPreviewMediaDialog: _propTypes.default.func,
  makeActions: _propTypes.default.func
} : {}; //# sourceMappingURL=BaseMediaList.js.map
//# sourceMappingURL=BaseMediaList.js.map
