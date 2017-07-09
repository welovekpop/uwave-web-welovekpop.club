import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

function getComponentName(Component) {
  return Component.name || Component.displayName || 'Component';
}

export default function injectMediaSources() {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getMediaSource = function (name) {
          return _this.context.mediaSources[name];
        }, _this.getAllMediaSources = function () {
          return _this.context.mediaSources;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class.prototype.render = function render() {
        return React.createElement(Component, _extends({
          getMediaSource: this.getMediaSource,
          getAllMediaSources: this.getAllMediaSources
        }, this.props));
      };

      return _class;
    }(React.Component), _class.displayName = 'InjectMediaSources(' + getComponentName(Component) + ')', _class.contextTypes = {
      mediaSources: PropTypes.object
    }, _temp2;
  };
}
//# sourceMappingURL=injectMediaSources.js.map
