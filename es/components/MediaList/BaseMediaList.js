import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import BaseList from 'react-list';
import LazyList from 'react-list-lazy-load';
import itemSelection from 'item-selection/immutable';
import LoadingRow from './LoadingRow';
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
  _inheritsLoose(BaseMediaList, _React$Component);

  function BaseMediaList() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      selection: itemSelection(_this.props.media)
    }, _this.renderList = function (items, ref) {
      var ListComponent = _this.props.listComponent;
      return React.createElement(ListComponent, {
        ref: ref
      }, items);
    }, _this.renderRow = function (index) {
      var _makeActions = _this.props.makeActions;
      var props = _this.props.rowProps || {};
      var media = _this.props.media[index];
      var selection = _this.state.selection;
      var selected = selection.isSelectedIndex(index);

      if (!media) {
        return _jsx(LoadingRow, {
          className: "MediaList-row",
          selected: selected
        }, index);
      }

      var MediaRow = _this.props.rowComponent;
      var isAlternate = index % 2 === 0;
      return React.createElement(MediaRow, _extends({
        key: media ? media._id : index
      }, props, {
        className: cx('MediaList-row', isAlternate && 'MediaListRow--alternate'),
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = BaseMediaList.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.media !== this.props.media) {
      var selection = this.state.selection.getIndices();
      var mediaChanged = didMediaChange(this.props.media, nextProps.media);
      this.setState({
        selection: mediaChanged ? itemSelection(nextProps.media) : itemSelection(nextProps.media, selection)
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
    var _this$props = this.props,
        className = _this$props.className,
        media = _this$props.media,
        size = _this$props.size,
        onRequestPage = _this$props.onRequestPage;

    var list = _jsx(BaseList, {
      itemsRenderer: this.renderList,
      itemRenderer: this.renderRow,
      length: size || media.length,
      type: "uniform",
      forceUpdateOnMediaChange: media,
      forceUpdateOnSelectionChange: this.state.selection
    });

    if (onRequestPage) {
      list = _jsx(LazyList, {
        items: media,
        length: size || media.length,
        pageSize: 50,
        onRequestPage: onRequestPage
      }, void 0, list);
    }

    return _jsx("div", {
      className: cx('MediaList', className)
    }, void 0, list);
  };

  return BaseMediaList;
}(React.Component);

var _ref =
/*#__PURE__*/
_jsx("span", {});

BaseMediaList.defaultProps = {
  // The `size` property is only necessary for lazy loading.
  size: null,
  makeActions: function makeActions() {
    return _ref;
  }
};
export { BaseMediaList as default };
BaseMediaList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  media: PropTypes.array,
  size: PropTypes.number,
  onRequestPage: PropTypes.func,
  listComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  rowComponent: PropTypes.func.isRequired,
  rowProps: PropTypes.object,
  onOpenPreviewMediaDialog: PropTypes.func,
  makeActions: PropTypes.func
} : {};
//# sourceMappingURL=BaseMediaList.js.map
